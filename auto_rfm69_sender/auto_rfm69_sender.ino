#define DEV

//#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>

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

#define PIN_JOYX 0
#define PIN_JOYY 1
#define PIN_JOYSW 2

RFM69 radio;

uint8_t senderId = 1;
uint8_t carId = 10;
uint8_t networkId = 117;
unsigned long lastTick;

/************************ INIT */
void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(115200);
#endif

	// FIXME: Hard Reset the RFM module
//	pinMode(RFM69_RST, OUTPUT);
//	digitalWrite(RFM69_RST, HIGH);
//	delay(100);
//	digitalWrite(RFM69_RST, LOW);
//	delay(100);

	// rfm69
	radio.initialize(RF69_433MHZ, senderId, networkId);
	radio.setHighPower();	// NB, this is not optional, despite the name
	radio.setPowerLevel(5);	// FIXME: set power lever enough for 10-20 meters with clear LoS
	radio.encrypt(null);
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

    int x = analogRead(PIN_JOYX);
    int y = analogRead(PIN_JOYY);
    int sw = analogRead(PIN_JOYSW);
    LOG("%d %d %d", x, y, sw);
    delay(250);


	// read joystick state

	// compare joystick state

	// send if changed
	//radio.send(carId, buf, buflen);

	// FIXME: after X hundred ms, send it anyway -- to make sure car won't power down, thinking remote went idle
	// FIXME: after no change in joystick for 30s, start powering down for 15s and no radio (power-save mode)

	// power down
//	LowPower.powerDown(SLEEP_15MS, ADC_OFF, BOD_OFF);
	// FIXME: also power down rfm69
}

/************************ TICK */
uint_fast16_t tick() {
	unsigned long newTick = millis();
	uint_fast16_t elapsed = newTick - lastTick;
	lastTick = newTick;
	return elapsed;
}

//if (radio.receiveDone()) {
//		LOG(radio.SENDERID);
//		for (byte i = 0; i < radio.DATALEN; i++)
//			LOG((char) radio.DATA[i]);
//
//		if (radio.DATALEN == 3) {
//
//		}
//}

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
