#pragma once

#include "feature.h"
#include "log.h"
#include <TM1637Display.h>

class Display : public Feature {
    private:
    TM1637Display timeDisplay;

    public:
    Display(uint8_t pinClk, uint8_t pinDIO) : timeDisplay(pinClk, pinDIO) {};

    void setup() {
        timeDisplay.setBrightness(7);
    }

    void loop() {
    }

    void time(uint8_t hours, uint8_t mins) {
        LOGP("Time: %d:%d\n", hours, mins);

        uint8_t data[] = {
            timeDisplay.encodeDigit(hours / 10),
            timeDisplay.encodeDigit(hours % 10),
            timeDisplay.encodeDigit(mins / 10),
            timeDisplay.encodeDigit(mins % 10)
        };
        timeDisplay.setSegments(data);
    }

    void brightness(uint8_t hours, uint8_t mins) {
        if (hours >= 23 || hours < 7) {
            timeDisplay.setBrightness(0);
        } else if (hours >= 22 || hours < 8) {
            timeDisplay.setBrightness(1);
        } else if (hours >= 21 || hours < 9) {
            timeDisplay.setBrightness(2);
        } else {
            timeDisplay.setBrightness(5);
        }
    }

    void temp(float tempC) {
        uint8_t tempInt = (uint8_t)tempC;
        uint8_t tempFrac = (uint8_t)((tempC - tempInt)*100);
        
        time(tempInt, tempFrac); // haha
    }
};
