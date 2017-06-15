#define DEV

//#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

#define PIN_JOYX 0
#define PIN_JOYY 1
#define PIN_JOYSW 2

#define NSS_PIN 10
#define IRQ_PIN 3

#define PIN_JOYX 0
#define PIN_JOYY 1
#define PIN_JOYSW 2

#define JOY_XY_SENSITIVITY 8
// on my current crappy joy, the friggin' switch jumps randomly between 600-1000, and pressing results in no measureable difference
// maybe on higher voltage? it was made for 5V, although that should not matter for a switch
#define JOY_SWITCH_SENSITIVITY 1000

typedef struct {
	int joyX = 0;
	int joyY = 0;
	int joySW = 0;
} Joystick;

RFM69 radio(NSS_PIN, IRQ_PIN, true, digitalPinToInterrupt(IRQ_PIN));
Joystick last;

uint8_t senderId = 1;
uint8_t carId = 10;
uint8_t networkId = 117;

uint8_t rf69buf[RF69_MAX_DATA_LEN];

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
//  radio.setHighPower();	// NB, this is not optional, despite the name
	radio.setPowerLevel(5);	// FIXME: set power lever enough for 10-20 meters with clear LoS
//  radio.encrypt(null);
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
		LOG("Serial test... %d", LED_BUILTIN);
	}
#endif

	// read joystick state
	Joystick next;
	next.joyX = analogRead(PIN_JOYX);
	next.joyY = analogRead(PIN_JOYY);
	next.joySW = analogRead(PIN_JOYSW);
	LOG("%d %d %d", next.joyX, next.joyY, next.joySW);

	// compare & send joystick state
	if (abs(last.joyX - next.joyX) > JOY_XY_SENSITIVITY
			|| abs(last.joyY - next.joyY) > JOY_XY_SENSITIVITY
			|| abs(last.joySW - next.joySW) > JOY_SWITCH_SENSITIVITY) {

		// TODO: calibrate adaptively based on min-max values

		rf69buf[0] = 0; // transmission id
		memcpy(&(rf69buf[1]), &next, sizeof(Joystick));

		radio.send(carId, rf69buf, sizeof(Joystick) + 1);
		last = next;
#ifdef DEV
		LOG("sent", 0);
#endif
	}

#ifdef DEV
	LOG("beat %ld", millis());
#endif
	digitalHigh(LED_BUILTIN);
	delay(200);
	digitalLow(LED_BUILTIN);

	delay(300);
}

// FIXME: after X hundred ms, send it anyway -- to make sure car won't power down, thinking remote went idle
// FIXME: after no change in joystick for 30s, start powering down for 15s and no radio (power-save mode)

// power down
//	LowPower.powerDown(SLEEP_15MS, ADC_OFF, BOD_OFF);
// FIXME: also power down rfm69

/************************ TICK */

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
