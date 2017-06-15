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

uint8_t senderId = 1;
uint8_t carId = 10;
uint8_t networkId = 117;
unsigned long lastTick;

uint8_t rf69buf[RF69_MAX_DATA_LEN];

/************************ INIT */
void setup() {
#ifdef DEV
  delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(115200);
#endif

  // FIXME: Hard Reset the RFM module
  //  pinMode(RFM69_RST, OUTPUT);
  //  digitalWrite(RFM69_RST, HIGH);
  //  delay(100);
  //  digitalWrite(RFM69_RST, LOW);
  //  delay(100);

  // rfm69
  radio.initialize(RF69_433MHZ, carId, networkId);
  //  radio.setHighPower(); // NB, this is not optional, despite the name
  radio.setPowerLevel(5); // FIXME: set power lever enough for 10-20 meters with clear LoS
  //  radio.encrypt(null);
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
    LOG("Serial test... %d", LED_BUILTIN);
  }
#endif

  if (radio.receiveDone()) {
    LOG("Sender: %u, Datalen: %u", radio.SENDERID, radio.DATALEN);
    digitalHigh(LED_BUILTIN);
  }

  delay(50);
  digitalLow(LED_BUILTIN);

  // read joystick state
  //  int x = analogRead(PIN_JOYX);
  //  int y = analogRead(PIN_JOYY);
  //  int sw = analogRead(PIN_JOYSW);
  //  LOG("%d %d %d", x, y, sw);
  //  delay(250);
  //

  // compare joystick state

  // send if changed

  // FIXME: after X hundred ms, send it anyway -- to make sure car won't power down, thinking remote went idle
  // FIXME: after no change in joystick for 30s, start powering down for 15s and no radio (power-save mode)

  // power down
  //  LowPower.powerDown(SLEEP_15MS, ADC_OFF, BOD_OFF);
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
//    LOG(radio.SENDERID);
//    for (byte i = 0; i < radio.DATALEN; i++)
//      LOG((char) radio.DATA[i]);
//
//    if (radio.DATALEN == 3) {
//
//    }
//}

// TODO: ACK
//  if (radio.ACKRequested()) {
//    radio.sendACK();
//    LOG(" - ACK sent.");
//  }

// TODO: send
//  sprintf(sendBuf, "F:%d H:%d P:%s", weatherShield_SI7021.getFahrenheitHundredths(), weatherShield_SI7021.getHumidityPercent(), Pstr);
//  byte sendLen = strlen(sendBuf);
//  radio.send(GATEWAYID, sendBuf, sendLen);

//  char buff[10];
//  sprintf(buff,
//      STATUS == STATUS_CLOSED ? "CLOSED" :
//      STATUS == STATUS_CLOSING ? "CLOSING" :
//      STATUS == STATUS_OPENING ? "OPENING" :
//      STATUS == STATUS_OPEN ? "OPEN" : "UNKNOWN");
//  byte len = strlen(buff);
//  radio.sendWithRetry(GATEWAYID, buff, len);
