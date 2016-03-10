//#define DEV

#ifdef DEV
#include <SPI.h>
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.println(buf);

char input;
char buf[80];
#else
#define LOG(format, args...)
#endif

#define portOfPin(P)  (((P)>=0&&(P)<8)?&PORTD:(((P)>7&&(P)<14)?&PORTB:&PORTC))
#define ddrOfPin(P) (((P)>=0&&(P)<8)?&DDRD:(((P)>7&&(P)<14)?&DDRB:&DDRC))
#define pinOfPin(P) (((P)>=0&&(P)<8)?&PIND:(((P)>7&&(P)<14)?&PINB:&PINC))
#define pinIndex(P) ((uint8_t)(P>13?P-14:P&7))
#define pinMask(P) ((uint8_t)(1<<pinIndex(P)))

#define pinAsInput(P) *(ddrOfPin(P))&=~pinMask(P)
#define pinAsInputPullUp(P) *(ddrOfPin(P))&=~pinMask(P);digitalHigh(P)
#define pinAsOutput(P) *(ddrOfPin(P))|=pinMask(P)
#define digitalLow(P) *(portOfPin(P))&=~pinMask(P)
#define digitalHigh(P) *(portOfPin(P))|=pinMask(P)
#define isHigh(P)((*(pinOfPin(P))& pinMask(P))>0)
#define isLow(P)((*(pinOfPin(P))& pinMask(P))==0)
#define digitalState(P)((uint8_t)isHigh(P))

// pin for optocoupler
#define PIN_OC  7
// pin of sound sensor
#define PIN_SND 2

// power of 2
#define NUMTS 64
volatile unsigned long ts[NUMTS];
volatile int its;

void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(9600);
#endif
  pinAsOutput(LED_BUILTIN);
  digitalLow(LED_BUILTIN);

  pinMode(PIN_SND, INPUT);
  memset((void*)ts, 0, sizeof(ts));
  its = 0;

  attachInterrupt(digitalPinToInterrupt(PIN_SND), recordNoise, RISING);
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 200ul) return;
  its = (its+1) & (NUMTS-1);
  ts[its] = time;
}

boolean detectClap(int &it, int ms, int e) {
  unsigned long current = ts[it];
  it = (it-1) & (NUMTS-1);
  unsigned long prev = ts[it];

  LOG("Clap: %d. %lu, %lu", it, current, prev);

  unsigned long diff = current - prev;
  if (diff > (1ul<<15)) return false;
  
  if (abs((int)diff - ms) <= e) return true;
  return false;
}

boolean detectOnClap() {
  int it = its;
  return detectClap(it, 250, 50) && detectClap(it, 250, 50);
}

boolean detectOffClap() {
  int it = its;
  return detectClap(it, 500, 50);
}

void loop() {
  if (detectOnClap()) {
    digitalHigh(LED_BUILTIN);
  } else if (detectOffClap()) {
    digitalLow(LED_BUILTIN);
  }
  
  delay(50);
}
