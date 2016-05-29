//#define DEV
#include <agoston.h>
#include <LowPower.h>

#define PIN_PIEZO 2
#define PIN_LIGHT 7

void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(115200);
#endif
}

#define HZ_C6 1046
#define HZ_CH6 1108
#define HZ_D6 1174
#define HZ_DH6 1244
#define HZ_E6 1318
#define HZ_F6 1396
#define HZ_FH6 1479
#define HZ_G6 1567
#define HZ_GH6 1661
#define HZ_A6 1760
#define HZ_AH6 1864
#define HZ_B6 1975

#define HZ_C7 2093
#define HZ_CH7 2217
#define HZ_D7 2439
#define HZ_DH7 2489
#define HZ_E7 2637
#define HZ_F7 2793
#define HZ_FH7 2959
#define HZ_G7 3135
#define HZ_GH7 3322
#define HZ_A7 3520
#define HZ_AH7 3729
#define HZ_B7 3951

#define OCTAVE_DOWN 0.943874
#define OCTAVE_UP 1.0594630

//uint16_t melody[] = { 262, 196, 196, 220, 196, 0, 247, 262 };
uint16_t melody[] = { HZ_A6, HZ_C7, HZ_A6, HZ_C7, HZ_E7, HZ_E7 };
uint16_t duration[] = {400, 400, 400, 400, 800, 800 };

boolean prev_light = false;

void loop() {
#ifdef DEV
	if (Serial.available()) {
		input = Serial.read();
	} else {
		input = 0;
	}

	if (input == 't') {
		LOG("Serial test...", 0);
	}
#endif

	int light = analogRead(PIN_LIGHT);

	LOG("light: %d", light);

	boolean curr_light = (light > 200);

	if (curr_light) {
		digitalHigh(LED_BUILTIN);

		if (prev_light) {
			delay(200);	// for the led blink to be noticable
		} else {
			for (uint8_t i = 0; i < sizeof(melody) / 2; i++) {
				tone(PIN_PIEZO, melody[i]*OCTAVE_DOWN*OCTAVE_DOWN*OCTAVE_DOWN);
				delay(duration[i]);
				noTone(PIN_PIEZO);
				delay(duration[i]/8);
			}
		}

		digitalLow(LED_BUILTIN);
	}

	prev_light = curr_light;

//	LowPower.powerDown(SLEEP_30MS, ADC_OFF, BOD_OFF);
	delay(50);
}
