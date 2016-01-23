// this means 3-4 KB (!!!)
//#define DEV

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
char buf[40];
#else
#define LOG(format, args...)
#endif

const byte PIN_MOTOR[4] = {6, 5, 9, 8}; // 2 pins per motor; A is PWM speed, B is direction
#define PIN_LED 13     // use built-in LED
#define PIN_TRIGGER 12
#define PIN_ECHO 11
#define MAX_DISTANCE_CM 100

unsigned long lastTick;

/************************ util */
template <typename T> int sgn(T val) {
    return (T(0) < val) - (val < T(0));
}

/************************ L9110 */
int state_motor[2] = {0, 0};

#define STATE_CRUISING 1
#define STATE_CHASING 2
int state = 0;

inline byte direction(int speed) {
  return speed < 0 ? LOW : HIGH;
}

void setSpeed(byte motor, int speed) {
  if (state_motor[motor] == speed) return;
  
  byte req_speed = abs(speed);
  byte req_direction = direction(speed);

  if (abs(state_motor[motor]) != req_speed) digitalWrite(PIN_MOTOR[motor<<1], req_speed);
  if (direction(state_motor[motor]) != req_direction) digitalWrite(PIN_MOTOR[(motor<<1)+1], req_direction);

  state_motor[motor] = speed;
}

// input range: (-255, 255)
void drive(int left, int right) {
  // gently scale motors to avoid losing grip on laminated floor
  int dir_left = sgn(left - state_motor[0]);
  int dir_right = sgn(right - state_motor[1]);
  
  while (state_motor[0] != left || state_motor[1] != right) {
    if (dir_left) setSpeed(0, state_motor[0] + dir_left);
    if (dir_right) setSpeed(1, state_motor[1] + dir_right);
    delay(1);
  }
}

void tick_motor() {
  switch (state) {
    case 0:
    break;
  
  }
}


/************************ LED */
byte state_led = 0;
void tick_led() {
  // blink about once per second
  byte new_led = (lastTick >> 10) & 1;
  if (new_led != state_led) {
    digitalWrite(LED_BUILTIN, (new_led > 0 ? HIGH : LOW));
    state_led = new_led;
  }
}


/************************ HC-SR04 */
NewPing sonar(PIN_TRIGGER, PIN_ECHO, MAX_DISTANCE_CM);
byte state_ping = 0;
u16 distance = 0;

void tick_ping() {
  // measure about 15 times per second
  byte new_ping = (lastTick >> 6) & 0xff;
  if (new_ping != state_ping) {
    unsigned int uS = sonar.ping();
    
    if (uS > US_ROUNDTRIP_CM) {     // ignore measurement errors
      distance = uS / US_ROUNDTRIP_CM;
      LOG("Measured %d cm", distance);
    }
    
    state_ping = new_ping;
  }
}

/************************ INIT */
void setup() {
#ifdef DEV
  delay(50);  // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(9600);
#endif

  for (int i = 0; i < sizeof(PIN_MOTOR); i++) pinMode(PIN_MOTOR[i], OUTPUT);
  pinMode(PIN_LED, OUTPUT);

  lastTick = millis();
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
  tick_motor();
}
