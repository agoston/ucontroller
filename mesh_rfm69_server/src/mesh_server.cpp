//#include <LowPower.h>
#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

#define NSS_PIN 10
#define IRQ_PIN 3

RFM69 radio(NSS_PIN, IRQ_PIN, true, digitalPinToInterrupt(IRQ_PIN));

#define m_self m_seagoat
const uint8_t networkId = 117;
const uint8_t m_seagoat = 1;
const uint8_t m_achterlamp = 2;

uint8_t serialbuf[16];
uint8_t serialidx = 0;

typedef struct {
	byte relayOn = 0;
} Message;

/************************ INIT */
void setup() {
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(115200);

	// FIXME: Hard Reset the RFM module -- seemingly unnecessary
	//	pinMode(RFM69_RST, OUTPUT);
	//	digitalWrite(RFM69_RST, HIGH);
	//	delay(100);
	//	digitalWrite(RFM69_RST, LOW);
	//	delay(100);

	// rfm69
	radio.initialize(RF69_433MHZ, m_self, networkId);
  radio.setHighPower();
	// radio.setPowerLevel(5);
  radio.encrypt(null);
}

/************************ LOOP */
uint8_t remoteLed = 0;

void mesh_send(uint8_t to, void *data, uint8_t len) {
	uint8_t buf[len+1];
	buf[0] = 0;
	memcpy(&(buf[1]), data, len);
	radio.send(to, buf, len + 1);
}

void toggle() {
	remoteLed = !remoteLed;

	Message message;
	message.relayOn = remoteLed;

	mesh_send(m_achterlamp, &message, sizeof(message));
}

void runCommand(uint8_t *buf, uint8_t len) {
	Serial.println((char *) buf);
	if (!memcmp(buf, "t", len)) {
		toggle();
	} else {
		Serial.println('E');
		return;
	}
	Serial.println('.');
}



void loop() {
	while (Serial.available()) {
		uint8_t input = Serial.read();
		if (input == ';') {
			serialbuf[serialidx] = 0;
			runCommand(serialbuf, serialidx);
			serialidx = 0;
		} else {
			serialbuf[serialidx] = input;
			serialidx = (serialidx + 1) & 0xf;
		}
	}
	//
	// digitalHigh(LED_BUILTIN);
	// delay(200);
	// digitalLow(LED_BUILTIN);
	// delay(300);
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
