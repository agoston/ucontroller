#ifndef __FEATURES_DISPLAY_H
#define __FEATURES_DISPLAY_H

#include "feature.h"
#include "log.h"
#include <TM1637Display.h>

class Display : public Feature {
    private:
    TM1637Display timeDisplay;

    public:
    Display(uint8_t pinClk, uint8_t pinDIO) : timeDisplay(pinClk, pinDIO) {};

    void setup() {
    }

    void loop() {
    }

    void time(uint8_t hours, uint8_t mins) {
        uint8_t data[] = {
            timeDisplay.encodeDigit(hours / 10),
            timeDisplay.encodeDigit(hours % 10),
            timeDisplay.encodeDigit(mins / 10),
            timeDisplay.encodeDigit(mins % 10)
        };
        timeDisplay.setSegments(data);

        if (hours >= 23 || hours < 7) {
            timeDisplay.setBrightness(2);
        } else if (hours >= 22 || hours < 8) {
            timeDisplay.setBrightness(4);
        } else {
            timeDisplay.setBrightness(7);
        }
    }

    void temp(float tempC) {
        uint8_t tempInt = (uint8_t)tempC;
        uint8_t tempFrac = (uint8_t)((tempC - tempInt)*100);
        
        time(tempInt, tempFrac); // haha
    }
};

#endif
