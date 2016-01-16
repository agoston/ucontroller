#include <NewPing.h>
#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>

const byte PIN_MOTOR[4] = {5, 6, 7, 8}; // 2 pins per motor; A is PWM speed, B is direction
#define PIN_LED 3     // pulses, so has to support PWM/analogWrite()

#define DEBUG(input)   Serial.print(input)
#define DEBUGln(input) Serial.println(input)
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.print(buf);

// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

uint8_t nodeId = 241;
uint8_t networkId = 117;
char input;
char buf[40];
unsigned long lastTick = 0;

void setup() {
  Serial.begin(115200);

  for (int i = 0; i < sizeof(PIN_MOTOR); i++) pinMode(PIN_MOTOR[i], OUTPUT);
  pinMode(PIN_LED, OUTPUT);

  drive(0, 0);
  drive(1, 0);

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

  uint_fast16_t elapsed = tick();

  // calculate led brightness for next tick
  byte brightness = 255;

  if (input == 't') {
    DEBUGln("Serial test...");
  } else {
    // 1024ms up, then 1024ms down; so last 10 bits of tick mark brightness, while 11th bit marks direction up or down
    brightness = (byte)(lastTick>>2);
    if ((lastTick >> 10 & 1) != 0) brightness = ~brightness;
    LOG("%u - %u\n", elapsed, brightness);
  }
  
  analogWrite(PIN_LED, brightness);
}

/************************ L9110 */
void drive(byte motor, int_fast16_t speed) {
  digitalWrite(PIN_MOTOR[motor<<1], abs(speed));
  digitalWrite(PIN_MOTOR[(motor<<1)+1], speed < 0 ? LOW : HIGH);
}

/************************ TICK */
uint_fast16_t tick() {
  LowPower.powerDown(SLEEP_30MS, ADC_OFF, BOD_OFF);
  unsigned long newTick = millis();
  uint_fast16_t elapsed = newTick - lastTick;
  lastTick = newTick;
  return elapsed;
}


