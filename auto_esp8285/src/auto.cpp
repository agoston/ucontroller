// car has 2 motors: one in the back, driving the rear axle, and one in the front,
// turning the front wheels. The back one is much more powerful.

#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include "secret.h"
#include "log.h"
#include "common.h"

WiFiUDP udp;
Joystick joystick;
unsigned long lastRun = 0;

#define AIN1 D5
#define AIN2 D6
#define PWMA D7

#define BIN1 D0
#define BIN2 D2
#define PWMB D1

#define STBY D8

//----------------------------------------------------------------------------------------------------------------
void setup() {
  #ifdef DEV
  	delay(50);
  	Serial.begin(9600);
  #endif

  lastRun = millis();

  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMA, OUTPUT);
  pinMode(BIN1, OUTPUT);
  pinMode(BIN2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(STBY, OUTPUT);

  // FIXME: add deep sleep + power saving via STBY
  digitalWrite(STBY, HIGH);

  boolean result = WiFi.softAP(WIFI_SSID, WIFI_PW);
  if (!result) LOG("softAP failed")
  else LOG("softAP on");

  udp.begin(AUTO_PORT);
}

uint8_t m1Speed = 0;
int8_t m1Dir = 0;

uint8_t m2Speed = 0;
int8_t m2Dir = 0;
uint8_t m2ttl = 0;

//----------------------------------------------------------------------------------------------------------------
void newDirection(int8_t dir) {
  if (m1Dir == dir) return;

  LOGP("direction: %d", dir);

  if (dir > 0) {
    digitalWrite(AIN1, LOW);
    digitalWrite(AIN2, HIGH);
    m1Dir = 1;

  } else if (dir < 0) {
    digitalWrite(AIN1, HIGH);
    digitalWrite(AIN2, LOW);
    m1Dir = -1;

  } else {
    // motor out; coasting
    digitalWrite(AIN1, HIGH);
    digitalWrite(AIN2, HIGH);
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
    if (diffSpeed > 31) {
      uint8_t diffSpeedFr = diffSpeed >> 3;
      for (uint8_t i = 1; i < 8; i++) {
        newSpeed(m1Speed + (diffSpeedFr*i));
        // might still be too fast, depending on surface. a wheel rotation sensor or a speed sensor would be awesome.
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
void turn(int8_t dir) {
  if (m2Dir == dir) return;

  LOGP("turn: %d", dir);

// careful here; should not overload motor.
  if (dir > 0) {
    digitalWrite(AIN1, LOW);
    digitalWrite(AIN2, HIGH);
    analogWrite(PWMB, PWMRANGE);
    m2Dir = 1;
    m2ttl = 200;

  } else if (dir < 0) {
    digitalWrite(AIN1, HIGH);
    digitalWrite(AIN2, LOW);
    analogWrite(PWMB, PWMRANGE);
    m2Dir = -1;
    m2ttl = 200;

  } else {
    // motor out; coasting
    digitalWrite(AIN1, HIGH);
    digitalWrite(AIN2, HIGH);
    analogWrite(PWMB, 0);
    m2Dir = 0;
    m2ttl = 0;
  }
}

void m2TtlLapse(uint16_t elapsed) {
  if (m2ttl && m2Dir) {
    if (m2ttl > elapsed) {
      m2ttl -= elapsed;
    } else {
      // stop turning
      m2ttl = 0;
      analogWrite(PWMB, PWMRANGE>>3);
    }
  }
}

//----------------------------------------------------------------------------------------------------------------
boolean receive() {
  int cb = udp.parsePacket();
  if (!cb) return false;

  LOGP("packet received, length=%d", cb);

  // We've received a packet, read the data from it
  if (udp.read((unsigned char *)&joystick, sizeof(joystick)) != sizeof(joystick)) return false;

  LOG("state updated");
  return true;
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  uint16_t elapsed = millis() - lastRun;

  m2TtlLapse(elapsed);

  if (receive()) {
    
  }


  // LOG("run");
  // changeSpeedTo(150);
  // delay(1000);
  // LOG("brake");
  // changeSpeedTo(0);
  // delay(1000);
  // LOG("back");
  // changeSpeedTo(-200);
  // delay(1000);
  // LOG("brake");
  // changeSpeedTo(0);
  // delay(1000);
}
