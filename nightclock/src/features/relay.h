#pragma once

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

    void set(bool _on) {
        if (_on) on();
        else off();
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
