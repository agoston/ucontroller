#define DEV

#define SERVER
#define m_self m_seagoat

// #define CLIENT
// #define m_self m_achterlamp
// #define ACHTERLAMP

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
	LOG((char*)buf);
	if (!memcmp(buf, "relay", 5) && buf[6] == '1') {
		Message message;
		message.type = 0;
		message.payload.relay1 = buf[8] == '0' ? 0 : 1;

		if (!radio.sendWithRetry(m_achterlamp, &message, sizeof(message), 20, 200)) {
			LOG("E T");
		}

	} else {
		LOG("E");
		return;
	}
	LOG(".");
}

void loop() {
  // runCommand("relay 1 1", 0);
	// delay(2000);
	// runCommand("relay 1 0", 0);
	// delay (2000);
	// if (1==1) return;

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
}
#endif

//############################################################################
#ifdef ACHTERLAMP
// #include "LowPower.h"

#define RELAY_PIN 2

void mesh_init() {
	pinMode(RELAY_PIN, OUTPUT);
}

void mesh_receive(uint8_t sender, Message *in, uint8_t len) {
	if (in->type == 0) {
		LOGP("relay1: %d", in->payload.relay1);
		digitalWrite(RELAY_PIN, in->payload.relay1 == 0 ? LOW : HIGH);
	} else {
		LOGP("incorrect data type %d", in->type);
	}
}

void loop() {
	if (radio.receiveDone()) {
    LOGP("Sender: %d, Datalen: %d", radio.SENDERID, radio.DATALEN);
		mesh_receive(radio.SENDERID, (Message *)(&radio.DATA), radio.DATALEN);
		if (radio.ACKRequested()) radio.sendACK();
		// delay(500);
  }
	// LowPower.powerDown(SLEEP_1S, ADC_OFF, BOD_OFF);
}
#endif

/************************************************************** INIT */
void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(57600);
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

// H version stands for High power.
// C version is pin compatible with RFM12.
// RFM69 uses SPI so the connections are :
//
// Arduino RFM69
// 10 <-------------------> NSS
// 11 <-------------------> MOSI
// 12 <-------------------> MISO
// 13 <-------------------> SCK
// DI00 <-------------------> 2
// GND <-------------------> GND
// 3.3V
// ANA : antenna
//
// NSS, MOSI and SCK are inputs so you need to adapt level if you use 5V arduino
