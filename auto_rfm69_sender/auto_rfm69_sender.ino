//#define DEV

#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>

#include "agoston.h"

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

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

// this one gotta be 128 bits long
#define ENCRYPTKEY      "1;59IUa\"sNL2EA2M"

RFM69 radio;

uint8_t nodeId = 241;
uint8_t networkId = 117;
unsigned long lastTick;

/************************ INIT */
void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
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

	if (radio.receiveDone()) {
//		LOG(radio.SENDERID);
//		for (byte i = 0; i < radio.DATALEN; i++)
//			LOG((char) radio.DATA[i]);
//
//		if (radio.DATALEN == 3) {
//
//		}
	}

// TODO: ACK
//	if (radio.ACKRequested()) {
//		radio.sendACK();
//		LOG(" - ACK sent.");
//	}

// TODO: send
//	sprintf(sendBuf, "F:%d H:%d P:%s", weatherShield_SI7021.getFahrenheitHundredths(), weatherShield_SI7021.getHumidityPercent(), Pstr);
//	byte sendLen = strlen(sendBuf);
//	radio.send(GATEWAYID, sendBuf, sendLen);

//	char buff[10];
//	sprintf(buff,
//			STATUS == STATUS_CLOSED ? "CLOSED" :
//			STATUS == STATUS_CLOSING ? "CLOSING" :
//			STATUS == STATUS_OPENING ? "OPENING" :
//			STATUS == STATUS_OPEN ? "OPEN" : "UNKNOWN");
//	byte len = strlen(buff);
//	radio.sendWithRetry(GATEWAYID, buff, len);
}

/************************ TICK */
uint_fast16_t tick() {
	LowPower.powerDown(SLEEP_30MS, ADC_OFF, BOD_OFF);
	unsigned long newTick = millis();
	uint_fast16_t elapsed = newTick - lastTick;
	lastTick = newTick;
	return elapsed;
}

