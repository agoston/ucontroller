#define DEV

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

#define m_self m_achterlamp
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
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(115200);
#endif

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

void mesh_receive(uint8_t sender, void *data, uint8_t len) {
	uint8_t *buf = (uint8_t *)data;
	if (buf[0] == 0) {
		Message *in = (Message *) (buf+1);
		digitalWrite(LED_BUILTIN, in->relayOn);
	} else {
		#ifdef DEV
		Serial.println("incorrect data type %d");
		#endif
	}
}

void loop() {
	if (radio.receiveDone()) {
    LOG("Sender: %u, Datalen: %u", radio.SENDERID, radio.DATALEN);
		mesh_receive(radio.SENDERID, radio.DATA, radio.DATALEN);
  }

  delay(50);
}
