//#define DEV
#ifdef DEV
#include <SPI.h>
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.println(buf);

char input;
char buf[80];
#else
#define LOG(format, args...)
#endif

// every 15 mins, turn optocoupler on 2 times for .5 sec each (like somebody hitting the up button twice)
// used atmega328 with burned regulator, connected via usb power adapter, and use the grounding wire of the same socket as the input for optocoupler
// optocoupler output should be a dime connected with a wire, taped onto the up sensor
// optocoupler connects to NC on HIGH and NO on LOW
// fuzzy warm nights FTW

#include <LowPower.h>

// pin for optocoupler
#define PIN_OC  7
// how much sleep time between touches
#define SLEEP_SEC 900
// how many touches per occasion
#define NUMBER_TOUCHES 2

// set to high value so that it's easy to test during installation via a simple reset
int cycles = SLEEP_SEC;

void setup() {
#ifdef DEV
  delay(50);  // bootloader listens for firmware update, should not get garbage, wait a bit
  Serial.begin(9600);
#endif
  pinMode(PIN_OC, OUTPUT);
  digitalWrite(PIN_OC, HIGH);
  digitalWrite(LED_BUILTIN, LOW);
}

void loop() {
  // would not actually need this, but fun to play with
  LowPower.idle(SLEEP_8S, ADC_OFF, TIMER2_OFF, TIMER1_OFF, TIMER0_OFF, SPI_OFF, USART0_OFF, TWI_OFF);
  cycles++;
  
  if (cycles > SLEEP_SEC/8) {
    cycles = 0;
    for (byte i = 0; i < NUMBER_TOUCHES*2; i++) {
      digitalWrite(PIN_OC, i & 1);
      digitalWrite(LED_BUILTIN, ~i & 1);
      delay(500);
    }
  } else {
    // status flick
    digitalWrite(LED_BUILTIN, HIGH);
    delay(50);
    digitalWrite(LED_BUILTIN, LOW);
  }
}
