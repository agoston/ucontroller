#ifndef __FEATURES_RELAY_H
#define __FEATURES_RELAY_H

#include <Arduino.h>

#include "feature.h"
#include "log.h"

class Relay : public Feature {
   private:
    uint8_t relayPin;
    uint8_t state;

   public:
    Relay(uint8_t relayPin) : relayPin(relayPin){};

    void setup() {
        off();
        pinMode(relayPin, OUTPUT);
    }

    void loop() {
    }

    void on() {
        digitalWrite(relayPin, HIGH);
        state = HIGH;
    }

    void off() {
        digitalWrite(relayPin, LOW);
        state = LOW;
    }

    void toggle() {
        if (state == HIGH)
            off();
        else
            on();
    }
};

void trampolineRelayOn(void *relay) {
    ((Relay *)relay)->on();
}

void trampolineRelayOff(void *relay) {
    ((Relay *)relay)->off();
}

#endif
