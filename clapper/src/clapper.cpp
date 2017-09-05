//#define DEV

#include <SPI.h>
#include <agoston.h>

// pin for optocoupler
#define PIN_OC  3
// pin of sound sensor
#define PIN_SND 2

// power of 2
#define NUMTS 16
volatile unsigned long ts[NUMTS];
volatile int its;

void resetTs() {
  memset((void*)ts, 0, sizeof(ts));
  its = 0;
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 200ul) return;
  its = (its+1) & (NUMTS-1);
  ts[its] = time;
}

void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(9600);
#endif
  pinAsOutput(LED_BUILTIN);
  digitalLow(LED_BUILTIN);
  pinAsOutput(PIN_OC);
  digitalLow(PIN_OC);

  pinMode(PIN_SND, INPUT);  // can't use macro shortcut here, since we're attaching an interrupt to this pin

  resetTs();

  attachInterrupt(digitalPinToInterrupt(PIN_SND), recordNoise, RISING);
}

boolean detectClap(int &it, int ms, int e) {
  unsigned long current = ts[it];
  it = (it-1) & (NUMTS-1);
  unsigned long prev = ts[it];

  LOGP("Clap: %d. %lu, %lu", it, current, prev);

  unsigned long diff = current - prev;
  if (diff >= (1ul<<15)) return false;

  if (abs((int)diff - ms) <= e) return true;
  return false;
}

boolean detectOnClap() {
  int it = its;
  return detectClap(it, 250, 75) && detectClap(it, 250, 75);
}

boolean detectOffClap() {
  int it = its;
  return detectClap(it, 500, 100);
}

unsigned long lastRun = 0;

void loop() {
  // if there was no new input since last run, skip
  unsigned long thisRun = ts[its];
  if (lastRun == thisRun) {
    delay(50);
    return;
  }

  lastRun = thisRun;

  if (detectOnClap()) {
    digitalHigh(LED_BUILTIN);
    digitalHigh(PIN_OC);
    resetTs();
    delay(50);
  } else if (detectOffClap()) {
    digitalLow(LED_BUILTIN);
    digitalLow(PIN_OC);
    resetTs();
    delay(50);
  }
}
