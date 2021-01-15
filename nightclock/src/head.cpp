// #define DEV

#include <Arduino.h>

#include <ESP8266WiFi.h>

#include "secret.h"

#include <features/log.h>
#include <features/mesh.h>
#include <features/ntpclient.h>
#include <features/display.h>
#include <features/temperature.h>

#define BUTTON_ON_D4
#include <features/button.h>

// D1 & D2 are 'clean', direct connections on the d1 lite
Display display(D1, D2);
// D3 has  an integrated 3.3V 12Kohm pullup on the d1 lite, which works perfectly with ds18b20
Temperature temperature(D3);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the buttin lights it up.
Button button(D4);
// sync time from NTP
NtpClient ntpClient("CET-1CEST,M3.5.0/2,M10.5.0/3");
// send/receive UDP packets
Mesh mesh(HEAD_PORT);

Feature *features[] {&display, &temperature, &button, &ntpClient, &mesh};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

  WiFi.hostname("ESP-head");
  // since there is a single radio in esp8266, when connecting to an remote AP,
  // it will change the wifi channel for the clients of this AP too. clients of
  // this AP can follow that, but e.g. tcp connections might get interrupted.
  WiFi.mode(WIFI_AP_STA);

  // disable SSID broadcast
  boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW, 1, 1, 4);
  if (!result) {
    LOG("softAP failed\n")
  } else {
    LOG("softAP on\n");
  }

  // upstream internet access for NTP sync
  WiFi.begin(NTP_SSID, NTP_PW);

  for (uint16_t i = 0; i < sizeof(features)/sizeof(features[0]); i++) features[i]->setup();
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (uint16_t i = 0; i < sizeof(features)/sizeof(features[0]); i++) features[i]->loop();

  unsigned long now = millis();

  uint8_t hours = ntpClient.hour();
  uint8_t mins = ntpClient.minute();
  uint8_t secs = ntpClient.second();

  LOGP("Time: %d:%d:%d\n", hours, mins, secs);

  // this takes cca. 3ms per segment, roughly 15ms overall with overhead
  if (button.buttonPressedOrTtl(now)) {
    display.temp(temperature.temperature());
  } else {
    display.brightness(hours, mins);
    display.time(hours, mins);
  }

  // can't use deep sleep here, as it would turn off the modem, which defeats the purpose of a udp server.
  // however, the esp-arduino lib does an actual yield() on delay(), so consumption is kept to a minimum.
  delay(250);
}
