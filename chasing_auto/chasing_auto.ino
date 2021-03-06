// this means 3-4 KB (!!!)
//#define DEV

// Self-driving car. After boot, it looks around (rotates around its axis) slowly, and if there's something within 1m, it switches to full-speed chase
// only stopping when there's an obstacle very close or there's no obstacle any more within 1m.

// Sadly, the ultrasonic sensor doesn't detect close proximity even at point blank if it is not perpendicular to it. E.g. going at 45 degrees against a cupboard triggers no proximity.
// And since this sensor is at the front of the vehicle, it gets banged head-on all the friggin time.
// This is likely caused by the ultrasonic waves deflecting from hard surfaces at an angle, with very little of the sound waves reflected to the sensor,
// they are not enough to trigger response.
// Ideally, one would get 3-5 of these sensors and brick the front part of the auto with them, but sadly, they each take a considerable time for the monitor response
// NewPing allows the use of interrupts to trigger on echo, but we also need a timer to PWM the two L9110 motor controller ports
// Maybe, 1 timer to control 2 PWMs for L9110, and the remaining 2 timers to control 2 sensors would do the trick...
// Or, I could actually connect 3 sensors in a series, only then we wouldn't know which one pulled the TRIG pin, only that one did
// Also a possible hack is to remove the housing of the trigger+echo speaker, so that it would cover a wider area, probably at the cost of range - but then again,
// even the floor might trigger it

// eh, I'll just add an RFM69 and make it remote controllable. :)

/*
Breadboard pin assignments:

U24 = BA (L9110)
U23 = BB (L9110)

U22 = GND (L9110)
U21 = VCC (L9110)

U20 = AA (L9110)
U19 = AB (L9110)

D21 = GND (HC-SR04)
D20 = ECHO (HC-SR04)
D19 = TRIG (HC-SR04)
D18 = VCC (HC-SR04)

U15 = VCC
U14 = GND
U13 = RST
U12 = 5V

D13 = RST
D12 = GND

D11 = D2
D10 = D3 (PWM)
D09 = D4
D08 = D5 (PWM)
D07 = D6 (PWM)
D06 = D7
D05 = D8
D04 = D9 (PWM)
D03 = D10 (PWM)
D02 = D11 (PWM)
D01 = D12
*/

#include <NewPing.h>

#ifdef DEV
#include <SPI.h>
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.println(buf);

char input;
char buf[80];
#else
#define LOG(format, args...)
#endif


unsigned long lastTick;



/************************ util */
template <typename T> int sgn(T val) {
    return (T(0) < val) - (val < T(0));
}



/************************ L9110 */
// IA(DO) IB(PWM) Motor State 
// L      L       Off 
// H      L       Forward 
// L      H       Reverse 
// H      H       Off

const byte PIN_MOTOR[4] = {6, 5, 9, 8}; // 2 pins per motor; A is PWM speed, B is direction

// default values are set so that on the first tick, even if nothing happens, motors are set to (0,0)
int state_motor[2] = {-1, -1};
int req_motor[2] = {0, 0};
unsigned long motorTick = 0;

byte l_direction(int speed) {
  return speed <= 0 ? LOW : HIGH;
}

byte l_speed(int speed) {
  return speed <= 0 ? -speed : 255-speed;
}

void setSpeed(byte motor, int speed) {
  if (state_motor[motor] == speed) return;
  
  byte req_speed = l_speed(speed);
  byte req_direction = l_direction(speed);

  if (l_direction(state_motor[motor]) != req_direction) digitalWrite(PIN_MOTOR[(motor<<1)+1], req_direction);
  if (l_speed(state_motor[motor]) != req_speed) analogWrite(PIN_MOTOR[motor<<1], req_speed);

  state_motor[motor] = speed;
}

void tick_motor() {
  int elapsed = lastTick - motorTick;
  motorTick = lastTick;
  
  for (byte i = 0; i < 2; i++) {
    int diff = req_motor[i] - state_motor[i];
    if (diff == 0) continue;
    
    // 1 speed per ms
    if (diff > 0) {
      setSpeed(i, state_motor[i] + min(elapsed, diff));
    } else {
      setSpeed(i, state_motor[i] + max(-elapsed, diff));
    }
  }
}

// input range: (-255, 255)
void drive(int left, int right) {
  req_motor[0] = left;
  req_motor[1] = right;
}




/************************ LED */
byte state_led = LOW;
void tick_led() {
//  // blink about once per second
//  byte new_led = (lastTick >> 10) & 1;
//  if (new_led != state_led) {
//    digitalWrite(LED_BUILTIN, (new_led > 0 ? HIGH : LOW));
//    state_led = new_led;
//  }

  digitalWrite(LED_BUILTIN, state_led);
  state_led = LOW;
}


/************************ HC-SR04 */
#define PIN_TRIGGER 12
#define PIN_ECHO 11
#define MAX_DISTANCE_CM 100
NewPing sonar(PIN_TRIGGER, PIN_ECHO, MAX_DISTANCE_CM);
byte state_ping = 0;
u16 distance[8] = {0,0,0,0,0,0,0,0};
byte lastDistance = 0;

void tick_ping() {
  // try to measre 32 times per second
  byte new_ping = (lastTick >> 5) & 0xff;
  if (new_ping != state_ping) {
    unsigned int uS = sonar.ping();
    u16 dist_cm = uS / US_ROUNDTRIP_CM;
    if (!dist_cm) dist_cm = MAX_DISTANCE_CM;
    
    lastDistance = (lastDistance + 1) & 7;
    distance[lastDistance] = dist_cm;
    
    state_ping = new_ping;
  }
}



/************************ Logic */
#define STATE_CRUISING 1
#define STATE_CHASING 2
int state = 0;
int cruise = 75;  // minimum needed to move the car

void tick_logic() {
  LOG("distance: %d, state: %d, motor: %d/%d %d/%d", distance[lastDistance], state, state_motor[0], req_motor[0], state_motor[1], req_motor[1]);

  // avoid collosion
  if (check_obstacle_ahead(3, 10)) {
    start_halt();
    return;
  }

  switch (state) {
    case STATE_CRUISING:
      if (check_obstacle_ahead(3, 60)) {
        drive(0,0);
        tick_motor(); // evil, but this way we force a stop before acceleration
        start_chasing();
      }
      return;

    case STATE_CHASING:
      // standard collosion avoidance good here
      return;
    
    default:
      start_cruising();
  }
}

boolean check_obstacle_ahead(byte samples, byte min_cm) {
  for (int i = lastDistance, j = 0; j < samples; i = (i - 1) & 0xf, j++) {
    if (distance[i] <= min_cm) {
      LOG("obstacle within %d cm", min_cm);
      state_led = HIGH; // this is evil, but I need to know when it was triggered
      return true;
    }
  }
  return false;
}

void start_cruising() {
  LOG("starting cruising", 0);
  // cruise should switch direction time to time to avoid one-sided wear
  drive(cruise, -cruise);
  cruise = -cruise;
  state = STATE_CRUISING;
}

void start_chasing() {
  LOG("starting chasing", 0);
  drive(255,255);
  state = STATE_CHASING;
}

void start_halt() {
  LOG("starting halting", 0);
  drive(0,0);
  state = 0;
}

/************************ INIT */
void setup() {
#ifdef DEV
  delay(50);  // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(9600);
#endif

  for (int i = 0; i < 4; i++) pinMode(PIN_MOTOR[i], OUTPUT);

  lastTick = millis();
  motorTick = lastTick;
}

/************************ LOOP */

void loop() {
#ifdef DEV
  if (Serial.available()) {
    input = Serial.read();
  } else {
    input = 0;
  }

  if (input == 't') {
    LOG("Serial test...", 0);
  }
#endif

  lastTick = millis();
  
  tick_led();
  tick_ping();
  tick_logic();
  tick_motor();
}
