#ifndef __FEATURES_DISPLAY_H
#define __FEATURES_DISPLAY_H

#include "feature.h"
#include <TM1637Display.h>

class Display : public Feature {
    private:
    TM1637Display timeDisplay;

    public:
    Display(uint8_t pinClk, uint8_t pinDIO) : timeDisplay(pinClk, pinDIO) {};

    void setup() {
        // FIXME: dim for night
        timeDisplay.setBrightness(0x0f);
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
    }

    void temp(float tempC) {
        uint8_t tempInt = (uint8_t)tempC;
        uint8_t tempFrac = (uint8_t)((tempC - tempInt)*100);
        
        time(tempInt, tempFrac); // haha
    }
};

#endif
