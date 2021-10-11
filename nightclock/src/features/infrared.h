#pragma once

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

   public:
    Infrared(uint8_t pin) : irrecv(pin){};

    void setup() {
        // enable input pullup on provided pin
        irrecv.enableIRIn(true);
    }

    void loop() {
        if (irrecv.decode(&results)) {
            // the remote uses the NEC protocol
            LOGP("type: %d, value: %uld, address: %ud, command: %ud", results.decode_type, results.value, results.address, results.command);

            // FIXME: add support for chinese remote values

            irrecv.resume();  // Receive the next value
        }
    }
};
