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
  	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
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
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
}

void send() {
  udp.beginPacket(auto_IP, AUTO_PORT);
  udp.write((uint8_t *)&joystick, sizeof(joystick));
  udp.endPacket();
}
