#include <SPI.h>
#include <RFM69.h>

#define CLOCK_MS 20   // 50Hz
#define PIN_LED 3     // pulses, so has to support PWM/analogWrite()

#define DEBUG(input)   Serial.print(input)
#define DEBUGln(input) Serial.println(input)
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.print(buf);

// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

int nodeId = 241;
int networkId = 117;
unsigned long lastTick = 0;
unsigned int lastSleep = 0;
char input;
char buf[40];

void setup() {
  Serial.begin(9600);
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

//  if (radio.receiveDone()) {
//
//    DEBUG("   [RX_RSSI:");DEBUG(radio.RSSI);DEBUG("]");
//    if (radio.ACKRequested()) {
//      radio.sendACK();
//      DEBUG(" - ACK sent.");
//    }
//
//  }

  // tick
  unsigned long newTick = millis();
  unsigned int needSleep = min(CLOCK_MS, CLOCK_MS - (newTick - lastTick - lastSleep));
//  DEBUGln(needSleep);
  delay(needSleep);
  lastTick = newTick;
  lastSleep = needSleep;

  // calculate led brightness for next tick
  byte brightness = 255;

  if (input == 't') {
    DEBUGln("Serial test...");
  } else {
    // 1024ms up, then 1024ms down; so last 10 bits of tick mark brightness, while 11th bit marks direction up or down
    brightness = (byte)(newTick>>2);
    if ((newTick >> 10 & 1) != 0) brightness = ~brightness;
    LOG("%u - %u\n", needSleep, brightness);
  }
  
  analogWrite(PIN_LED, brightness);
}
