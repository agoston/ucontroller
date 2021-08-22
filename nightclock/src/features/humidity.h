#pragma once

#include <Wire.h>
#include <ClosedCube_HDC1080.h>

#include "feature.h"

// for HDC1080 humidity and temperature sensor
class Humidity : public Feature {
   private:
    ClosedCube_HDC1080 hdc1080;
    unsigned long lastReadMs = 0;
    uint16_t tempRefreshMs;

    double lastTemp, lastHumidity;

   public:
    Humidity(uint16_t tempRefreshMs = 5000) : tempRefreshMs(tempRefreshMs) {};

    void setup() {
        // TI hardwired address of hdc1080
        hdc1080.begin(0x40);
        // default measurement accuracy is 14 bit; 11 bit takes ~3ms, 14 bit ~6ms according to TI documentation

        // heatup; should clean the humidity sensor (apparently it gets 'cloudy' after a while)
        // let's only do this while running in production
        #ifndef DEV
        hdc1080.heatUp(5);
        #endif
    }

    void loop() {
        unsigned long now = millis();
        if (now - lastReadMs > tempRefreshMs) {
            lastReadMs = now;

            // FIXME: these are kinda stupid, it writes the request, delays 9ms, then reads the result. could be async, but no need right now, 9ms is fine
            lastHumidity = hdc1080.readHumidity();
            lastTemp = hdc1080.readTemperature();
        }
    }
};
