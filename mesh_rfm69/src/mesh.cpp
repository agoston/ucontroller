#define DEV

// #define SERVER
// #define m_self m_seagoat

#define CLIENT
#define PETI
#define m_self m_peti

// #define ACHTERLAMP
// #define m_self m_achterlamp

// FIXME: lack of configuration management forces use of ifdef :( blergh

#include <SPI.h>
#include <RFM69.h>
#include <agoston.h>
#include "secret.h"

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

#define NSS_PIN 10
#define IRQ_PIN 3

RFM69 radio(NSS_PIN, IRQ_PIN, true, digitalPinToInterrupt(IRQ_PIN));

const uint8_t networkId = 117;
const uint8_t m_seagoat = 1;
const uint8_t m_achterlamp = 2;
const uint8_t m_peti = 3;
const uint8_t m_robi = 4;

typedef struct __attribute__((packed)) {
	uint8_t type;
	union {
		uint8_t relay;
		float temp;
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
		message.payload.relay = buf[8] == '0' ? 0 : 1;

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
		LOGP("relay: %d", in->payload.relay);
		digitalWrite(RELAY_PIN, in->payload.relay == 0 ? LOW : HIGH);
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

//############################################################################
#ifdef PETI
#define REQUIRESALARMS false
#define REQUIRESNEW false
#include <DallasTemperature.h>

#define RELAY_PIN 5
#define SND_PIN 2
#define TEMP_PIN 7

// power of 2
#define NUMTS 16
volatile unsigned long ts[NUMTS];
volatile int its;

float lastSentTemp = 0;

unsigned long lastClap = 0;
unsigned long lastTemp = 0;

OneWire oneWire(TEMP_PIN);
DallasTemperature temperature(&oneWire);

void resetTs() {
	noInterrupts();
  memset((void*)ts, 0, sizeof(ts));
  its = 0;
	interrupts();
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 100ul) return;
  its = (its+1) & (NUMTS-1);
  ts[its] = time;
}

void mesh_init() {
	pinMode(RELAY_PIN, OUTPUT);
  pinMode(SND_PIN, INPUT);

  resetTs();
  attachInterrupt(digitalPinToInterrupt(SND_PIN), recordNoise, RISING);

	temperature.setResolution(10);	// 0.25°C
	temperature.begin();
}

void mesh_receive(uint8_t sender, Message *in, uint8_t len) {
	if (in->type == 1) {
		temperature.requestTemperatures();
		float temp = temperature.getTempCByIndex(0);
		if (lastSentTemp - temp < 0.1) return;

		lastSentTemp = temp;

		Message message;
		message.type = 0;
		message.payload.relay1 = buf[8] == '0' ? 0 : 1;

		if (!radio.sendWithRetry(m_achterlamp, &message, sizeof(message), 20, 200)) {
			LOG("E T");
		}

	} else {
		LOGP("incorrect data type %d", in->type);
	}
}

boolean detectClap(int &it, int ms, int e) {
  unsigned long current = ts[it];
  it = (it-1) & (NUMTS-1);
  unsigned long prev = ts[it];

  LOGP("Clap: %d. %lu, %lu", it, current, prev);

  unsigned long diff = current - prev;
  if (diff >= (1ul<<15)) return false;

  if (abs((int)diff - ms) <= e) return true;
  return false;
}

boolean detectOnClap(int it) {
  return detectClap(it, 250, 75) && detectClap(it, 250, 75);
}

boolean detectOffClap(int it) {
  return detectClap(it, 500, 100);
}

void loop() {
	// if there was no new input since last run, skip
	int it = its;
	unsigned long thisRun = ts[it];
	if (lastClap == thisRun) return;

	lastClap = thisRun;

	if (detectOnClap(it)) {
		// digitalHigh(LED_BUILTIN);
		// digitalHigh(PIN_OC);
		resetTs();
	} else if (detectOffClap(it)) {
		// digitalLow(LED_BUILTIN);
		// digitalLow(PIN_OC);
		resetTs();
	}

	if (radio.receiveDone()) {
    LOGP("Sender: %d, Datalen: %d", radio.SENDERID, radio.DATALEN);
		mesh_receive(radio.SENDERID, (Message *)(&radio.DATA), radio.DATALEN);
		if (radio.ACKRequested()) radio.sendACK();
  }
}
#endif

/************************************************************** INIT */
void setup() {
#ifdef DEV
	Serial.begin(57600);	// for some reason, platformio fails on higher bitrates
#endif

	mesh_init();

	radio.initialize(RF69_433MHZ, m_self, networkId);
  radio.setHighPower();
	radio.setPowerLevel(31);
	radio.encrypt(ENCRYPT_KEY);
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
// DI00 <-------------------> 3
// GND <-------------------> GND
// 3.3V
// ANA : antenna
//
// NSS, MOSI and SCK are inputs so you need to adapt level if you use 5V arduino
