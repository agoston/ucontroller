#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <TM1637Display.h>
#include <WiFiUdp.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// crappy library pollutes global variables into default namespace via 'using namspace ezt' :(
#define EZTIME_EZT_NAMESPACE
#include <ezTime.h>

#include "common.h"
#include "log.h"
#include "events.h"
#include "secret.h"

// D1 & D2 are 'clean', direct connections on the d1 lite
TM1637Display timeDisplay(D1, D2);

// D3 & D4 have an integrated 3.3V 12Kohm pullup on the d1 lite, quite handy now :)
OneWire oneWire(D3);
DallasTemperature sensors(&oneWire);
int16_t tempDelayMs;
float tempLast = 22;
#define TEMP_REFRESH_MSEC 5000

WiFiUDP udp;
Packet packet;

Timezone timezone;

Events events(4);

const uint8_t REMOTES[] = {R_PETI, R_ROBI, R_LENA};

// Button on D4 to display temperature instead
volatile bool buttonPressed = false;
unsigned long buttonPressTtl = 0;

//----------------------------------------------------------------------------------------------------------------
void handleTemp();
void requestTemp() {
  // takes a few ms
  LOG("Request temperatures")
  sensors.requestTemperatures();
  events.add(handleTemp, millis() + tempDelayMs);
}

void handleTemp() {
  // takes a few ms
  float tempC = sensors.getTempCByIndex(0);
  LOGP("Temp: %f", tempC);

  if (tempC != DEVICE_DISCONNECTED_C) tempLast = tempC;

  events.add(requestTemp, millis() + TEMP_REFRESH_MSEC);
}

//----------------------------------------------------------------------------------------------------------------
void handleButton() {
  if (digitalRead(D4) == HIGH) {
    LOG("ButtonPress: false");
    buttonPressed = false;
    buttonPressTtl = millis() + 3000;
  } else {
    LOG("ButtonPress: true");
    buttonPressed = true;
  }
}

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

  // see https://github.com/ropg/ezTime; avoids an extra network lookup
  // timezone.Location("Europe/Amsterdam");
  timezone.setPosix("CET-1CEST,M3.4.0/2,M10.4.0/3");
  ezt::setServer("0.europe.pool.ntp.org");

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

  // DS18B20 temp. sensor. default resolution is already below .1 degrees, which is fine
  sensors.begin();
  sensors.setWaitForConversion(true);
  // depending on resolution, it takes longer to determine temperature
  tempDelayMs = sensors.millisToWaitForConversion(sensors.getResolution());
  // kick off event handler here too
  requestTemp();

  // button on D4 (has external pullup for some reason on d1 mini lite)
  pinMode(D4, INPUT);
  attachInterrupt(D4, handleButton, CHANGE);
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

void displayTemp(float tempC) {
  uint8_t tempInt = (uint8_t)tempC;
  uint8_t tempFrac = (uint8_t)((tempC - tempInt)*100);
  // haha
  displayTime(tempInt, tempFrac);
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
  unsigned long now = millis();

  // NTP client event handler heartbeat.
  // this can take up 1500ms if there's an NTP update necessary (and it times out)
  ezt::events();

  // our own event handler heartbeat
  events.run(now);

  uint8_t hours = timezone.hour();
  uint8_t mins = timezone.minute();
  uint8_t secs = timezone.second();

  LOGP("Time: %d:%d:%d", hours, mins, secs);

  // this takes cca. 3ms per segment, roughly 15ms overall with overhead
  if (buttonPressed || (buttonPressTtl > now)) {
    displayTemp(tempLast);
  } else {
    displayTime(hours, mins);
  }

  // FIXME: deep sleep?
  delay(500);
}
