#define DEV

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
volatile u16 its;

void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(9600);
#endif
	pinMode(PIN_SND, INPUT);
  memset((void*)ts, NUMTS, sizeof(long));
  its = 0;

  attachInterrupt(digitalPinToInterrupt(PIN_SND), recordNoise, RISING);
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 50) return;
  ts[its++] = time;
  its &= NUMTS-1;
}

boolean detectClap(u16 &it, u16 ms, u16 e) {
  unsigned long current = ts[it];
  it = (it-1) & (NUMTS-1);
  unsigned long prev = ts[it];

  LOG("Clap: %d. %uld, %uld", it, current, prev);

  int diff = current - prev;
  if (abs(diff - ms) <= e) return true;
  return false;
}

boolean detectOffClap() {
  u16 it = its;

  if (detectClap(it, 250, 150) && detectClap(it, 250, 150) && detectClap(it, 250, 150)) {
    return true;
  }
  return false;
}

void loop() {
	// would not actually need this, but fun to play with
//	LowPower.idle(SLEEP_500MS, ADC_OFF, TIMER2_OFF, TIMER1_OFF, TIMER0_OFF, SPI_OFF, USART0_OFF, TWI_OFF);

  if (detectOffClap()) {
    digitalHigh(LED_BUILTIN);
    delay(50);
    digitalLow(LED_BUILTIN);
  } else {
    delay(50);
  }

}
