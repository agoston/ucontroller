#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#include "secret.h"

#include <features/log.h>
#include <features/events.h>
#include <features/mesh.h>
#include <features/ntpclient.h>
#include <features/display.h>

// D1 & D2 are 'clean', direct connections on the d1 lite
Display display(D1, D2);

// D3 & D4 have an integrated 3.3V 12Kohm pullup on the d1 lite, quite handy now :)
OneWire oneWire(D3);
DallasTemperature sensors(&oneWire);
int16_t tempDelayMs;
float tempLast = 22;
#define TEMP_REFRESH_MSEC 5000

WiFiUDP udp;
Packet packet;

NtpClient ntpClient;

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

  // our own event handler heartbeat
  events.run(now);

  uint8_t hours = ntpClient.hour();
  uint8_t mins = ntpClient.minute();
  uint8_t secs = ntpClient.second();

  LOGP("Time: %d:%d:%d", hours, mins, secs);

  // this takes cca. 3ms per segment, roughly 15ms overall with overhead
  if (buttonPressed || (buttonPressTtl > now)) {
    display.temp(tempLast);
  } else {
    display.time(hours, mins);
  }

  // FIXME: deep sleep?
  delay(500);
}
