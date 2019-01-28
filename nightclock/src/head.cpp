#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "common.h"
#include "log.h"
#include "secret.h"

#include <coredecls.h>  // settimeofday_cb()
#include <sys/time.h>   // struct timeval
#include <time.h>       // time() ctime()

WiFiUDP udp;
Packet packet;
unsigned long lastRun = 0;

const uint8_t REMOTES[] = {R_PETI, R_ROBI, R_LENA};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

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

  // FIXME: reinitialize this, depending on skew, esp8266 timer is not dependable
  configTime(3600, 3600, "0.europe.pool.ntp.org");

}

//----------------------------------------------------------------------------------------------------------------
boolean receive() {
  int cb = udp.parsePacket();
  if (!cb) return false;

  LOGP("packet received, length=%d", cb);

  // We've received a packet, read the data from it
  if (udp.read((unsigned char *)&packet, sizeof(packet)) != sizeof(packet)) return false;
  // extra bytes at end of packet are discarded silently

  return true;
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  timeval tv;
  gettimeofday(&tv, NULL);

  // show
}