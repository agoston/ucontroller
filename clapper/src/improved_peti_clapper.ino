#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>

#define DEV
#define m_self m_peti
#include "mesh.h"

#define REQUIRESALARMS false
#define REQUIRESNEW false
#include <DallasTemperature.h>

#define RELAY_PIN 5
#define SND_PIN 2
#define TEMP_PIN 7

// power of 2
#define NUMTS 16
volatile unsigned long ts[NUMTS];
volatile uint8_t its;

float lastSentTemp = 0;

unsigned long lastClap = 0;
unsigned long lastTemp = 0;

OneWire oneWire(TEMP_PIN);
DallasTemperature temperature(&oneWire);

static const uint16_t TOGGLE_CLAP[] = {400, 100, 400, 100};
uint8_t relayState = HIGH;  // NB, default state of this relay

void resetTs() {
  noInterrupts();
  memset((void*)ts, 0, sizeof(ts));
  its = 0;
  interrupts();
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 100ul) return;
  its = (its+1) & (NUMTS-1);
  ts[its] = time;
}

void mesh_init() {
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(SND_PIN, INPUT);

  digitalWrite(RELAY_PIN, relayState);

  resetTs();
  attachInterrupt(digitalPinToInterrupt(SND_PIN), recordNoise, RISING);

  temperature.setResolution(10);  // 0.25°C
  temperature.begin();
}

void mesh_receive(uint8_t sender, Message *in, uint8_t len) {
  if (in->type == t_temp_req) {
    temperature.requestTemperatures();
    float temp = temperature.getTempCByIndex(0);
    if (abs(lastSentTemp - temp) < 0.1) return;

    lastSentTemp = temp;

    Message message;
    message.type = t_temp_res;
    message.payload.temp = temp;

    radio.sendACK(&message, sizeof(message));

  } else if (in->type == t_relay_req) {
      LOGP("relay: %d", in->payload.relay);
      relayState = in->payload.relay == 0 ? LOW : HIGH;
      digitalWrite(RELAY_PIN, relayState);

  } else {
    LOGP("incorrect data type %d", in->type);
  }
}

boolean detectClap(int it, const uint16_t *claps, uint8_t numclaps) {
  for (uint8_t i = 0; i < numclaps; i++) {
    unsigned long current = ts[it];
    if (current == 0) return false;

    it = (it-1) & (NUMTS-1);
    unsigned long prev = ts[it];

    long diff = current - prev;

    LOGP("%d. %d/%d %ld, %ld", it, i, numclaps, current, diff);

    if (diff >= (1l<<15)) return false;

    long reqDiff = claps[i<<1];
    long reqError = claps[(i<<1)+1];
    if (abs(diff - reqDiff) > reqError) return false;
  }
  return true;
}

void loop() {
  // if there was no new input since last run, skip
  int it = its;
  unsigned long thisRun = ts[it];
  if (lastClap != thisRun) {
    lastClap = thisRun;
    if (detectClap(it, TOGGLE_CLAP, sizeof(TOGGLE_CLAP)/sizeof(TOGGLE_CLAP[0])/2)) {
      relayState = !relayState;
      digitalWrite(RELAY_PIN, relayState);
      resetTs();
    }
  }

  if (radio.receiveDone()) {
    LOGP("Sender: %d, Datalen: %d", radio.SENDERID, radio.DATALEN);
    mesh_receive(radio.SENDERID, (Message *)(&radio.DATA), radio.DATALEN);
    if (radio.ACKRequested()) radio.sendACK();
  }
}
