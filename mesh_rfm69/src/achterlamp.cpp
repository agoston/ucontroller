// #define DEV
#define m_self m_achterlamp

#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>
#include "mesh.h"

// #include "LowPower.h"

#define RELAY_PIN 2

void mesh_init() {
  pinMode(RELAY_PIN, OUTPUT);
}

void mesh_receive(uint8_t sender, Message *in, uint8_t len) {
  if (in->type == t_relay_req) {
    LOGP("relay: %d", in->payload.relay);
    digitalWrite(RELAY_PIN, in->payload.relay == 0 ? LOW : HIGH);
  } else {
    LOGP("incorrect data type %d", in->type);
  }
}

void loop() {
  if (radio.receiveDone()) {
    LOGP("Sender: %d, Datalen: %d", radio.SENDERID, radio.DATALEN);
    mesh_receive(radio.SENDERID, (Message *)(&radio.DATA), radio.DATALEN);
    if (radio.ACKRequested()) radio.sendACK();
    // delay(500);
  }
  // LowPower.powerDown(SLEEP_1S, ADC_OFF, BOD_OFF);
}
