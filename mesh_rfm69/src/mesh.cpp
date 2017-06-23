#define DEV

#define SERVER
#define m_self m_seagoat

// #define CLIENT
// #define m_self m_achterlamp
// #define ACHTERLAMP

#include <Arduino.h>
#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

#define NSS_PIN 10
#define IRQ_PIN 3
#define RFM69_RST 8

RFM69 radio(NSS_PIN, IRQ_PIN, true, digitalPinToInterrupt(IRQ_PIN));

const uint8_t networkId = 117;
const uint8_t m_seagoat = 1;
const uint8_t m_achterlamp = 2;

typedef struct __attribute__((packed)) {
	uint8_t type;
	union {
		uint8_t relay1;
	} payload;
} Message;

//############################################################################
#ifdef SERVER
uint8_t serialbuf[16];
uint8_t serialidx = 0;

void mesh_init() {}

void runCommand(uint8_t *buf, uint8_t len) {
	LOG((char*)buf, 0);
	if (!memcmp(buf, "relay", 5) && buf[6] == '1') {
		Message message;
		message.type = 0;
		message.payload.relay1 = buf[8] == '0' ? 0 : 1;

		radio.sendWithRetry(m_achterlamp, &message, sizeof(message), 10, 100);

	} else {
		LOG("E", 0);
		return;
	}
	LOG(".", 0);
}

void loop() {
	if (Serial.available()) {
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

	// just for good measure, for now
	if (radio.ACKRequested()) radio.sendACK();
}
#endif

//############################################################################
#ifdef ACHTERLAMP

#define RELAY_PIN 9

void mesh_init() {
	pinMode(RELAY_PIN, OUTPUT);
}

void mesh_receive(uint8_t sender, Message *in, uint8_t len) {
	if (in->type == 0) {
		LOG("relay1: %d", in->payload.relay1);
		digitalWrite(RELAY_PIN, in->payload.relay1);
	} else {
		LOG("incorrect data type %d", in->type);
	}
}

void loop() {
	if (radio.receiveDone()) {
    LOG("Sender: %u, Datalen: %u", radio.SENDERID, radio.DATALEN);
		mesh_receive(radio.SENDERID, (Message *)(&radio.DATA), radio.DATALEN);
  }

	if (radio.ACKRequested()) radio.sendACK();

	delay(50);
}
#endif

/************************************************************** INIT */
void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(115200);
#endif

	mesh_init();

	// FIXME: Hard Reset the RFM module -- seemingly unnecessary
	// pinMode(RFM69_RST, OUTPUT);
	// digitalWrite(RFM69_RST, HIGH);
	// delay(100);
	// digitalWrite(RFM69_RST, LOW);
	// delay(100);

	// rfm69
	radio.initialize(RF69_433MHZ, m_self, networkId);
  radio.setHighPower();
	radio.setPowerLevel(5);
  radio.encrypt(null);
}
