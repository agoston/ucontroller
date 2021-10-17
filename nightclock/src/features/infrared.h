#pragma once

#define IR_ENABLE_DEFAULT false
#define DECODE_NEC true

#include <IRrecv.h>
#include <IRremoteESP8266.h>
#include <IRutils.h>

#include "feature.h"
#include "log.h"

// for the VS1838b's
// pinout as seen from front (left-middle-right): data, ground, vcc (2.7-5.5V)
// data pin has to be pull-up! or disable pull-up on irrecv.enableIRIn()

class Infrared : public Feature {
   private:
    IRrecv irrecv;
    decode_results results;
    uint32_t lastButton = 0;

   public:
    Infrared(uint8_t pin) : irrecv(pin){};

    void setup() {
        // enable input pullup on provided pin
        irrecv.enableIRIn(true);
        // irrecv.setTolerance(50);
    }

    void loop() {
        if (irrecv.decode(&results)) {
            // the remote uses the NEC protocol
            LOGP("type: %d, value: %llu, address: %u, command: %u\n", results.decode_type, results.value, results.address, results.command);
            if (results.decode_type == decode_type_t::NEC) lastButton = results.command;
            irrecv.resume();  // Receive the next value
        }
    }

    bool buttonPressed() {
        return lastButton;
    }

    // also clear
    uint32_t lastButtonPress() {
        uint32_t result = lastButton;
        lastButton = 0;
        return result;
    }
};

/* cheap chinese 'magic lighting': type NEC
commands list (position represented as ascii-art):
 5  4  6  7
 9  8 10 11
13 12 14 15
21 20 22 23
25 24 26 27
17 16 18 19
*/
enum Remote {
    DIM_UP = 5,
    DIM_DOWN = 4,
    OFF = 6,
    ON = 7,

    RED = 9,
    GREEN = 8,
    BLUE = 10,
    WHITE = 11,

    RED_ORANGE = 13,
    GREEN_SEAGREEN = 12,
    BLUE_PURPLE = 14,
    FLASH = 15,

    ORANGE = 21,
    SEAGREEN = 20,
    PURPLE = 22,
    STROBE = 23,

    ORANGE_YELLOW = 25,
    SEAGREEN_CYAN = 24,
    PURPLE_PINK = 26,
    FADE = 27,

    YELLOW = 17,
    CYAN = 16,
    PINK = 18,
    SMOOTH = 19
};
