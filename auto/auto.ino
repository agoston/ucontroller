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

NewPing sonar(PIN_TRIGGER, PIN_ECHO, MAX_DISTANCE_CM);

unsigned long lastTick;

byte state_led = 0;

byte state_motor[2] = {0,0};

byte state_ping = 0;
u16 distance = 0;

/************************ L9110 */
void drive(byte motor, u16 speed) {
  LOG("%d %d\n", motor, speed);
  digitalWrite(PIN_MOTOR[motor<<1], abs(speed));
  digitalWrite(PIN_MOTOR[(motor<<1)+1], speed < 0 ? LOW : HIGH);
}

void tick_motor() {
  // TODO: slow start for motors - wheels lose grip instantly when going from zero to high in a single step
  
  // XXX
  
//  switch (state) {
//    case 0:
//      drive(0, 96); break;
//    case 1:
//      drive(1, 96); break;
//    case 2:
//      drive(0, 0); break;
//    case 3:
//      drive(1, 0); break;
//  }
}

/************************ LED */
void tick_led() {
  // blink about once per second
  byte new_led = (lastTick >> 10) & 1;
  if (new_led != state_led) {
    digitalWrite(LED_BUILTIN, (new_led > 0 ? HIGH : LOW));
    state_led = new_led;
  }
}

/************************ HC-SR04 */
void tick_ping() {
  // measure about 10 times per second
  byte new_ping = (lastTick >> 7) & 15;
  if (new_ping != state_ping) {
    unsigned int uS = sonar.ping();
    
    if (uS > US_ROUNDTRIP_CM) {     // ignore measurement errors
      distance = uS / US_ROUNDTRIP_CM;
      LOG("Measured %d cm", distance);
    }
    
    state_ping = new_ping;
  }
}

/************************ atmega168/328 */
void setup() {
#ifdef DEV
  delay(50);  // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(9600);
#endif

  for (int i = 0; i < sizeof(PIN_MOTOR); i++) pinMode(PIN_MOTOR[i], OUTPUT);
  pinMode(PIN_LED, OUTPUT);

  drive(0, 0);
  drive(1, 0);

  lastTick = millis();
}

// the loop routine runs over and over again forever:
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
