#include <SPI.h>
#include <RFM69.h>

#define CLOCK_MS 10   // 100Hz
#define PIN_LED 9

// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

int nodeId = 241;
int networkId = 117;
unsigned long lastTick = 0;

void setup() {
  pinMode(PIN_LED, OUTPUT);
  radio.initialize(RF69_433MHZ, nodeId, networkId);
  // don't need that kind of power just yet...
  //radio.setHighPower();
  radio.encrypt(ENCRYPTKEY);
  lastTick = millis();
}

// the loop routine runs over and over again forever:
void loop() {
  if (Serial.available()) {
    input = Serial.read();
  } else {
    input = 0;
  }

//  radio.sendWithRetry(GATEWAYID, "RING", 4);

  if (radio.receiveDone()) {

    DEBUG("   [RX_RSSI:");DEBUG(radio.RSSI);DEBUG("]");
    if (radio.ACKRequested()) {
      radio.sendACK();
      DEBUG(" - ACK sent.");
    }

    if (ring)
    {
      //if other relay is ON we must temporarily turn it off while we pulse the RING relay, to avoid any rail collapse and reset
      if (disableStatus) digitalWrite(DISABLE_RELAY, 0);
      pulseRelay();
      if (disableStatus) digitalWrite(DISABLE_RELAY, 1);
      radio.sendWithRetry(GATEWAYID, "RING OK", 4);
      ring = false;
    }

    if (disable)
    {
      digitalWrite(DISABLE_RELAY, disableStatus); //disable it
      sprintf(buff, "BELL:%d", disableStatus ? 0 : 1);
      radio.sendWithRetry(GATEWAYID, buff, 6);
      disable=false;
    }

    DEBUGln();
  }

  unsigned long newTick = millis();
  int needSleep = newTick - lastTick;
  if (needSleep > 0) delay(needSleep);
  lastTick = newTick;

  byte brightness = 255;

  if (input == 't') {
    DEBUGln("Serial test...");
  } else {
    byte brightness = (newTick && 1023)>>2;
    if (newTick & 1024 > 0) brightness = 255 - brightness;
  }
  
  analogWrite(PIN_LED, brightness);
}

