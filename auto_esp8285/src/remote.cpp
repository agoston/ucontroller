#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "secret.h"
#include "log.h"
#include "common.h"

IPAddress auto_IP(192,168,4,1);
WiFiUDP udp;
Joystick joystick;

//----------------------------------------------------------------------------------------------------------------
void setup() {
  #ifdef DEV
  	delay(50);
  	Serial.begin(9600);
  #endif

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PW);
  WiFi.setAutoReconnect(true);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    LOG(".");
  }

  LOGP("WiFi connected, IP address: %s", WiFi.localIP().toString().c_str());

// these pins have no extra shit on them on the wemos d1_mini_lite, like a led or an 12k external pullup resistor
  pinMode(D1, INPUT_PULLUP);
  pinMode(D2, INPUT_PULLUP);
  pinMode(D5, INPUT_PULLUP);
  pinMode(D6, INPUT_PULLUP);
}

//----------------------------------------------------------------------------------------------------------------
void send() {
  udp.beginPacket(auto_IP, AUTO_PORT);
  udp.write((uint8_t *)&joystick, sizeof(joystick));
  udp.endPacket();
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  memset(&joystick, 0, sizeof(Joystick));

  if (digitalRead(D1) == LOW) {
    LOG("D1 ")
    joystick.joyX = 255;
  }

  if (digitalRead(D2) == LOW) {
    LOG("D2 ")
    joystick.joyX = -255;
  }

  if (digitalRead(D5) == LOW) {
    LOG("D5 ")
    joystick.joyY = -255;
  }

  if (digitalRead(D6) == LOW) {
    LOG("D6 ")
    joystick.joyY = 255;
  }

  LOG("\n");
  send();

  // FIXME: deep sleep
  // FIXME: no send if no state changed
  // FIXME: add heartbeat
  delay(25);
}
