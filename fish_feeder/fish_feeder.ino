//#define DEV
#include <agoston.h>
//#include <LowPower.h>

// pin for optocoupler
#define PIN_OC  3

const unsigned long STATE_LENGTH[2] = {16 * 3600ul * 1000ul, 8 * 3600ul * 1000ul};
unsigned long state_next_at = 0;
byte state = 0;

void setup() {
#ifdef DEV
  delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(115200);
#endif

  pinAsOutput(LED_BUILTIN);
  digitalLow(LED_BUILTIN);
  pinAsOutput(PIN_OC);
  digitalLow(PIN_OC);
}

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

  if (input == '1') {
    LOG("1", NULL);
    digitalHigh(LED_BUILTIN);
    digitalHigh(PIN_OC);
  }

  if (input == '2') {
    LOG("2", NULL);
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
