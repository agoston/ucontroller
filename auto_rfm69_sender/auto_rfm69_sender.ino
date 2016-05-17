// this means 3-4 KB (!!!)
//#define DEV

#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>

/*
Breadboard pin assignments:

D11 = D2
D10 = D3 (PWM)
D09 = D4
D08 = D5 (PWM)
D07 = D6 (PWM)
D06 = D7
D05 = D8
D04 = D9 (PWM)
D03 = D10 (PWM)
D02 = D11 (PWM)
D01 = D12
*/

#ifdef DEV
#include <SPI.h>
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.println(buf);

char input;
char buf[80];
#else
#define LOG(format, args...)
#endif


// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

uint8_t nodeId = 241;
uint8_t networkId = 117;
unsigned long lastTick;



/************************ INIT */
void setup() {
#ifdef DEV
  delay(50);  // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(115200);
#endif

  radio.initialize(RF69_433MHZ, nodeId, networkId);
  // don't need that kind of power just yet...
  //radio.setHighPower();
  radio.encrypt(ENCRYPTKEY);
  lastTick = millis();
}

/************************ LOOP */

void loop() {
#ifdef DEV
  if (Serial.available()) {
    input = Serial.read();
  } else {
    input = 0;
  }

  if (input == 't') {
    LOG("Serial test...", 0);
  }
#endif

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

}

/************************ TICK */
uint_fast16_t tick() {
  LowPower.powerDown(SLEEP_30MS, ADC_OFF, BOD_OFF);
  unsigned long newTick = millis();
  uint_fast16_t elapsed = newTick - lastTick;
  lastTick = newTick;
  return elapsed;
}

