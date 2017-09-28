#define DEV
#define m_self m_seagoat

#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>
#include "mesh.h"

uint8_t serialbuf[16];
uint8_t serialidx = 0;

void mesh_init() {}

void runCommand(uint8_t *buf, uint8_t len) {
  LOG((char*)buf);

  if (!memcmp(buf, "relay", 5) &&
    buf[5] == ' ' && buf[6] >= '0' && buf[6] <= '9' &&
    buf[7] == ' ' && buf[8] >= '0' && buf[8] <= '9') {

      Message message;
      message.type = t_relay_req;
      message.payload.relay = buf[8] == '0' ? 0 : 1;

      if (!radio.sendWithRetry(buf[6] - '0', &message, sizeof(message), 20, 200)) {
        LOG("E T");
        return;
      }

  } else if (!memcmp(buf, "temp", 4) &&
    buf[4] == ' ' && buf[5] >= '0' && buf[5] <= '9') {

      Message message;
      message.type = t_temp_req;

      if (!radio.sendWithRetry(buf[5] - '0', &message, sizeof(message), 20, 200)) {
        LOG("E T");
        return;
      }

      // response comes in ACK packet
      Message *response = (Message *)(&radio.DATA);
      if (response->type != t_temp_res) {
        LOG("E R");
        return;
      }

      // LOGP("R %4.2f", response->payload.temp);

  } else {
    LOG("E");
    return;
  }
  LOG(".");
}

void loop() {
  // runCommand("relay 1 1", 0);
  // delay(2000);
  // runCommand("relay 1 0", 0);
  // delay (2000);
  // if (1==1) return;

  if (Serial.available()) {
    uint8_t input = Serial.read();
    if (input == ';') {
      serialbuf[serialidx] = 0;
      runCommand(serialbuf, serialidx);
      serialidx = 0;
    } else {
      serialbuf[serialidx] = input;
      serialidx = (serialidx + 1) & 0xf;
    }
  }
}
