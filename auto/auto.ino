// this means 3 KB (!!!)
//#define DEV

/*
Breadboard pin assignments:

U24 = BA
U23 = BB

U22 = GND
U21 = VCC

U20 = AA
U19 = AB

U15 = VCC
U14 = GND

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
unsigned long lastTick;

/************************ L9110 */
void drive(byte motor, int_fast16_t speed) {
  LOG("%d %d\n", motor, speed);
  digitalWrite(PIN_MOTOR[motor<<1], abs(speed));
  digitalWrite(PIN_MOTOR[(motor<<1)+1], speed < 0 ? LOW : HIGH);
}

/************************ atmega168/328 */
void setup() {
#ifdef DEV
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
    LOG("Serial test... %c", input);
  }
#endif

  // blink about once per second
  lastTick = millis();
  byte state = (lastTick >> 10) & 3;
  
  byte led = state & 1;
  LOG("lastTick: %ul, led: %d\n", lastTick, led);
  digitalWrite(LED_BUILTIN, (led > 0 ? HIGH : LOW));

  // TODO: slow start for motors - wheels lose grip instantly when going from zero to high in a single step
  // TODO: ping

  switch (state) {
    case 0:
      drive(0, 96); break;
    case 1:
      drive(1, 96); break;
    case 2:
      drive(0, 0); break;
    case 3:
      drive(1, 0); break;
  }
}
