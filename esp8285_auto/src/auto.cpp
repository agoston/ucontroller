#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "secret.h"
#include "log.h"
#include "common.h"

WiFiUDP udp;
Joystick joystick;

#define AIN1 D5
// #define BIN1 D2
#define AIN2 D6
// #define BIN2 D4
#define PWMA D7
// #define PWMB D6
#define STBY D8

//----------------------------------------------------------------------------------------------------------------
void setup() {
  #ifdef DEV
  	delay(50);
  	Serial.begin(9600);
  #endif

  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMA, OUTPUT);
  pinMode(STBY, OUTPUT);

  digitalWrite(STBY, LOW);

  // boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW);
  // if (!result) LOG("softAP failed")
  // else LOG("softAP on");
  //
  // udp.begin(AUTO_PORT);
}

uint8_t m1Speed = 0;
int8_t m1Dir = 0;
unsigned long m1Coasting = 0;

//----------------------------------------------------------------------------------------------------------------
void newDirection(int8_t dir) {
  if (m1Dir == dir) return;

  LOGP("direction: %d", dir);

  if (dir > 0) {
    digitalWrite(AIN1, LOW);
    digitalWrite(AIN2, HIGH);
    if (m1Dir == 0) digitalWrite(STBY, HIGH);
    m1Dir = 1;
    if (m1Coasting != 0) m1Coasting = 0;

  } else if (dir < 0) {
    digitalWrite(AIN1, HIGH);
    digitalWrite(AIN2, LOW);
    if (m1Dir == 0) digitalWrite(STBY, HIGH);
    m1Dir = -1;
    if (m1Coasting != 0) m1Coasting = 0;

  } else {
    // motor out; coasting
    // digitalWrite(AIN1, HIGH);
    // digitalWrite(AIN2, HIGH);
    digitalWrite(STBY, LOW);
    m1Coasting = millis();
    m1Dir = 0;
  }
}

void forwardBump() {
  // stuck wheels need some power to begin rolling (have some initial resistance)
  LOG("bump");
  analogWrite(PWMA, PWMRANGE);
  delay(10);
}

void newSpeed(uint8_t speed) {
  LOGP("speed: %d", speed);
  // #define PWMRANGE 1023 :|
  analogWrite(PWMA, speed<<2);
  m1Speed = speed;
}

//----------------------------------------------------------------------------------------------------------------
void changeSpeedTo(int16_t speed) {
  int8_t dir = 0;
  if (speed > 0) dir = 1;
  else if (speed < 0) dir = -1;

  if (dir != m1Dir) {
    // turn off motor before switching direction
    newSpeed(0);
    newDirection(dir);
  }

  uint8_t absSpeed = abs(speed);
  if (m1Speed < absSpeed) {
    if (m1Speed == 0) forwardBump();
    // need slow rampup?
    uint8_t diffSpeed = absSpeed - m1Speed;
    if (diffSpeed > 50) {
      uint8_t diffSpeedFr = diffSpeed >> 3;
      for (uint8_t i = 1; i < 8; i++) {
        newSpeed(m1Speed + (diffSpeedFr*i));
        delay(diffSpeedFr);
      }
      // the last, 8th step includes the accumulated fractions
    }
    newSpeed(absSpeed);

  } else if (m1Speed > absSpeed) {
    // simply lower speed, there is less chance of drifting here, and even if yes, it's expected
    // in other words: ABS functionality is not included
    newSpeed(absSpeed);
  }
}

//----------------------------------------------------------------------------------------------------------------
void loop() {

  // int cb = udp.parsePacket();
  // if (!cb) {
  //   // FIXME: deep sleep
  //   delay(5);
  //   return;
  // }
  //
  // LOGP("packet received, length=%d", cb);
  //
  // // We've received a packet, read the data from it
  // if (udp.read((unsigned char *)&joystick, sizeof(joystick)) != sizeof(joystick)) {
  //   // FIXME: deep sleep
  //   delay(5);
  //   return;
  // }

  LOG("run");
  changeSpeedTo(150);
  delay(1000);
  LOG("brake");
  changeSpeedTo(0);
  delay(1000);
  LOG("back");
  changeSpeedTo(-200);
  delay(1000);
  LOG("brake");
  changeSpeedTo(0);
  delay(1000);
}
