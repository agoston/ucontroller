#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <TM1637Display.h>
#include <WiFiUdp.h>
#include <ezTime.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#include "common.h"
#include "log.h"
#include "secret.h"

TM1637Display timeDisplay(D1, D2);
WiFiUDP udp;
Packet packet;
Timezone timezone;

unsigned long lastRun = 0;

const uint8_t REMOTES[] = {R_PETI, R_ROBI, R_LENA};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

  // see https://github.com/ropg/ezTime; avoids an extra network lookup
  // timezone.Location("Europe/Amsterdam");
  timezone.setPosix("CET-1CEST,M3.4.0/2,M10.4.0/3");
  setServer("0.europe.pool.ntp.org");

  lastRun = millis();

  // since there is a single radio in esp8266, when connecting to an remote AP,
  // it will change the wifi channel for the clients of this AP too. clients of
  // this AP can follow that, but e.g. tcp connections might get interrupted.
  WiFi.mode(WIFI_AP_STA);

  // disable SSID broadcast
  boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW, 1, 1, 4);
  if (!result)
    LOG("softAP failed")
  else
    LOG("softAP on");

  // upstream internet access for NTP sync
  WiFi.begin(NTP_SSID, NTP_PW);

  udp.begin(HEAD_PORT);

  // FIXME: dim for night
  timeDisplay.setBrightness(0x0f);
}

//----------------------------------------------------------------------------------------------------------------
void displayTime(uint8_t hours, uint8_t mins) {
  uint8_t data[] = {
    timeDisplay.encodeDigit(hours / 10),
    timeDisplay.encodeDigit(hours % 10),
    timeDisplay.encodeDigit(mins / 10),
    timeDisplay.encodeDigit(mins % 10)
  };
  timeDisplay.setSegments(data);
}

//----------------------------------------------------------------------------------------------------------------
boolean receive() {
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
  events();

  uint8_t hours = timezone.hour();
  uint8_t mins = timezone.minute();
  uint8_t secs = timezone.second();

  LOGP("%d:%d:%d", hours, mins, secs);
  displayTime(hours, mins);
  delay(400);
}