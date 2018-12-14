
#include "secret.h"

// TODO: also make rfm69 sleep
// TODO: wireless programming support (-> remember to hide encrypt keys!)
// TODO: use RFM69_ATC to conserve battery

#define NSS_PIN 10
#define IRQ_PIN 3

RFM69 radio(NSS_PIN, IRQ_PIN, true, digitalPinToInterrupt(IRQ_PIN));

// network addresses
const uint8_t networkId = 117;
const uint8_t m_seagoat = 1;
const uint8_t m_achterlamp = 2;
const uint8_t m_peti = 3;
const uint8_t m_robi = 4;

// message types
const uint8_t t_relay_req = 0;
const uint8_t t_temp_req = 1;
const uint8_t t_temp_res = 2;

typedef struct __attribute__((packed)) {
  uint8_t type;
  union {
    uint8_t relay;
    float temp;
  } payload;
} Message;
void mesh_init();

/************************************************************** INIT */
void setup() {
#ifdef DEV
  Serial.begin(9600);  // for some reason, platformio fails on higher bitrates
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
