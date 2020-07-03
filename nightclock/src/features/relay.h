#ifndef __FEATURES_RELAY_H
#define __FEATURES_RELAY_H

#include <Arduino.h>
#include "feature.h"
#include "log.h"

class Relay : public Feature {
    private:
    uint8_t relayPin;

    public:
    Relay(uint8_t relayPin) : relayPin(relayPin) {};

    void setup() {
        digitalWrite(relayPin, LOW);
        pinMode(relayPin, OUTPUT);
    }

    void loop() {
    }

    void on() {
        digitalWrite(relayPin, HIGH);
    }

    void off() {
        digitalWrite(relayPin, LOW);
    }
};

#endif
