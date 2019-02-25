#ifndef __FEATURES_MESH_H
#define __FEATURES_MESH_H

#include <Arduino.h>
#include "feature.h"

const uint16_t REMOTE_PORT = 1080;
const uint16_t HEAD_PORT = 1080;

typedef struct __attribute__((packed)) {
  uint8_t from;
  uint8_t type;
  union {
    float temp;
  } payload;
} Packet;

#define R_HEAD 1
#define R_PETI 2
#define R_ROBI 3
#define R_LENA 4

class Mesh : public Feature {
  private:
  WiFiUDP udp;
  Packet packet;
  uint16_t port;

  public:
  Mesh(uint16_t port) : port(port) {};

  void setup() {
      udp.begin(HEAD_PORT);
  }

  void loop() {
  }

  boolean receiveUdp() {
    int cb = udp.parsePacket();
    if (!cb) return false;

    LOGP("packet received, length=%d", cb);

    // We've received a packet, read the data from it
    if (udp.read((unsigned char *)&packet, sizeof(packet)) != sizeof(packet)) return false;
    // extra bytes at end of packet are discarded silently

    return true;
  }

  Packet *getPacket() {return &packet;}

};

#endif
