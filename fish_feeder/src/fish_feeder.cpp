/* Slows down the 2-week fish feeder by 50% so that it would feed for 3 weeks.
   Simply disconnect the battery via an optocoupler for 8 hours a day.

   NB, after 50 days, this would fail as millis() would overflow unsigned long.
*/

// #define DEV
#include <Arduino.h>
#include <agoston.h>
//#include <LowPower.h>

// pin for optocoupler
#define PIN_OC  12

const unsigned long STATE_LENGTH[2] = {16ul * 3600ul * 1000ul, 8ul * 3600ul * 1000ul};
// const unsigned long STATE_LENGTH[2] = {2ul * 1000ul, 1ul * 1000ul};
unsigned long state_next_at = 0;
uint8_t state = 0;

void setup() {
#ifdef DEV
  delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(115200);
#endif

  pinAsOutput(LED_BUILTIN);
  pinAsOutput(PIN_OC);
}

void loop() {
#ifdef DEV
  uint8_t input = 0;
  if (Serial.available()) {
    input = Serial.read();
  }

  if (input == 't') {
    LOG("Serial test...");
  }

  if (input == '1') {
    LOG("1");
    digitalHigh(LED_BUILTIN);
    digitalHigh(PIN_OC);
  }

  if (input == '2') {
    LOG("2");
    digitalLow(LED_BUILTIN);
    digitalLow(PIN_OC);
  }
#endif

  unsigned long now = millis();
  if (now > state_next_at) {
    state = !state;
    state_next_at += STATE_LENGTH[state];

    digitalWrite(LED_BUILTIN, state);
    digitalWrite(PIN_OC, state);
  }

  // not available on atmega168
  //	LowPower.powerDown(SLEEP_30MS, ADC_OFF, BOD_OFF);
  delay(20);	// wakey after deep sleep
}
