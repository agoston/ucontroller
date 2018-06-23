#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "secret.h"
#include "log.h"
#include "common.h"

WiFiUDP udp;
Joystick joystick;

//----------------------------------------------------------------------------------------------------------------
void setup() {
  #ifdef DEV
  	delay(50);
  	Serial.begin(9600);
  #endif

  boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW);
  if (!result) LOG("softAP failed");

  udp.begin(AUTO_PORT);
}

//----------------------------------------------------------------------------------------------------------------
void loop() {

  int cb = udp.parsePacket();
  if (!cb) {
    // FIXME: deep sleep
    delay(5);
    return;
  }

  LOGP("packet received, length=%d", cb);

  // We've received a packet, read the data from it
  if (udp.read((unsigned char *)&joystick, sizeof(joystick)) != sizeof(joystick)) {
    // FIXME: deep sleep
    delay(5);
    return;
  }

}
