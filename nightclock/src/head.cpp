#define DEV

#include <Arduino.h>

// FIXME: check if we could extract sending/receiving over wifi also into a features/mesh.h
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>

#include "secret.h"

#include <features/log.h>
#include <features/mesh.h>
#include <features/ntpclient.h>
#include <features/display.h>
#include <features/temperature.h>
#include <features/button.h>

// D1 & D2 are 'clean', direct connections on the d1 lite
Display display(D1, D2);
// D3 has  an integrated 3.3V 12Kohm pullup on the d1 lite, which works perfectly with ds18b20
Temperature temperature(D3);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the buttin lights it up.
#define BUTTON_ON_D4
Button button(D4);
// sync time from NTP
NtpClient ntpClient;

Feature features[] {display, temperature, button, ntpClient};

WiFiUDP udp;
Packet packet;

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

  // since there is a single radio in esp8266, when connecting to an remote AP,
  // it will change the wifi channel for the clients of this AP too. clients of
  // this AP can follow that, but e.g. tcp connections might get interrupted.
  WiFi.mode(WIFI_AP_STA);

  // disable SSID broadcast
  boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW, 1, 1, 4);
  if (!result) {
    LOG("softAP failed")
  } else {
    LOG("softAP on");
  }

  // upstream internet access for NTP sync
  WiFi.begin(NTP_SSID, NTP_PW);

  udp.begin(HEAD_PORT);

  for (uint16_t i = 0; i < sizeof(features)/sizeof(features[0]); i++) features[i].setup();
}

//----------------------------------------------------------------------------------------------------------------
boolean receiveUdp() {
  int cb = udp.parsePacket();
  if (!cb) return false;

  LOGP("packet received, length=%d", cb);

  // We've received a packet, read the data from it
  if (udp.read((unsigned char *)&packet, sizeof(packet)) != sizeof(packet))
    return false;
  // extra bytes at end of packet are discarded silently

  return true;
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (uint16_t i = 0; i < sizeof(features)/sizeof(features[0]); i++) features[i].loop();

  unsigned long now = millis();

  uint8_t hours = ntpClient.hour();
  uint8_t mins = ntpClient.minute();
  uint8_t secs = ntpClient.second();

  LOGP("Time: %d:%d:%d", hours, mins, secs);

  // this takes cca. 3ms per segment, roughly 15ms overall with overhead
  if (button.buttonPressedOrTtl(now)) {
    display.temp(temperature.temperature());
  } else {
    display.time(hours, mins);
  }

  // FIXME: deep sleep?
  delay(500);
}
