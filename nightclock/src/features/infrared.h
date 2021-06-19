#pragma once

#include <IRrecv.h>
#include <IRremoteESP8266.h>
#include <IRutils.h>

#include "feature.h"
#include "log.h"

class Infrared : public Feature {
   private:
    IRrecv irrecv;
    decode_results results;

   public:
    Infrared(uint8_t pin) : irrecv(pin){};

    void setup() {
        irrecv.enableIRIn();
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
