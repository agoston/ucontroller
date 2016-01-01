#include <SPI.h>
#include <RFM69.h>

#define CLOCK_MS 10   // 100Hz
#define PIN_LED 9     // pulses, so has to support PWM/analogWrite()

#define DEBUG(input)   Serial.print(input)
#define DEBUGln(input) Serial.println(input)

// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

int nodeId = 241;
int networkId = 117;
unsigned long lastTick = 0;
char input;

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

  }

  // tick
  unsigned long newTick = millis();
  int needSleep = CLOCK_MS - (newTick - lastTick);
  if (needSleep > 0) delay(min(needSleep, CLOCK_MS)); // handle millis() overflow
  lastTick = newTick;

  // calculate led brightness for next tick
  byte brightness = 255;

  if (input == 't') {
    DEBUGln("Serial test...");
  } else {
    // 1024ms up, then 1024ms down; so last 10 bits of tick mark brightness, while 11th bit marks direction up or down
    byte brightness = (newTick && 1023)>>2;
    if (newTick & 1024 > 0) brightness = 255 - brightness;
  }
  
  analogWrite(PIN_LED, brightness);
}

