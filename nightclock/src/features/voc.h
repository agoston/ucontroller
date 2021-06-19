#pragma once

#include "Adafruit_CCS811.h"
#include "feature.h"
#include "log.h"

class VOC : public Feature {
   private:
    Adafruit_CCS811 ccs;

   public:
    VOC() : ccs(){};

    void setup() {
        if (!ccs.begin()) {
            LOGP("Failed to start sensor! Please check your wiring.");
        }
    }

    uint16_t getTVOC() {
        return ccs.getTVOC();
    }

    uint16_t geteCO2() {
        return ccs.geteCO2();
    }

    void read() {
        if (!ccs.readData()) {
            LOGP("VOC: %d", ccs.getTVOC());
        } else {
            LOG("CCS ERROR!");
        }
    }

    void loop() {
    }
};
