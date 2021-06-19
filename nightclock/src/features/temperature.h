#pragma once

#include <DallasTemperature.h>
#include <OneWire.h>

#include "feature.h"

// for ds18b20 temperature sensor
class Temperature : public Feature {
   private:
    OneWire oneWire;
    DallasTemperature sensors;
    float tempLast = 0;

    uint16_t tempRefreshMs;
    unsigned long nextRefreshMs = 0;

    int16_t requestDelayMs;
    unsigned long requestDoneMs = 0;

   public:
    Temperature(uint8_t pin, uint16_t tempRefreshMs = 5000) : oneWire(pin), sensors(&oneWire), tempRefreshMs(tempRefreshMs){};

    void setup() {
        // DS18B20 temp. sensor. default resolution is already below .1 degrees, which is fine
        sensors.begin();
        sensors.setWaitForConversion(false);
        // depending on resolution, it takes longer to determine temperature
        requestDelayMs = sensors.millisToWaitForConversion(sensors.getResolution());
    }

    void loop() {
        unsigned long now = millis();

        // ds18b20 works rather slow (up to 750ms per measurement for maximum precision).
        // so we first check if an async result is ready, then request a new async measurement
        // ds18b20 goes on to do the measurements and puts result in its tiny buffer called 'scratchpad'
        handleTempRequestResult(now);
        requestTemp(now);
    }

    void requestTemp(unsigned long now) {
        if (now < nextRefreshMs) return;
        // bail out if a request is already running
        if (requestDoneMs) return;

        // takes a few ms
        LOG("Request temperatures\n")
        sensors.requestTemperatures();

        now = millis();
        nextRefreshMs = now + tempRefreshMs;
        requestDoneMs = now + requestDelayMs;
    }

    void handleTempRequestResult(unsigned long now) {
        if (!requestDoneMs || now < requestDoneMs) return;

        requestDoneMs = 0;
        // takes a few ms
        float tempC = sensors.getTempCByIndex(0);
        LOGP("Temp: %f\n", tempC);

        if (tempC != DEVICE_DISCONNECTED_C) tempLast = tempC;
    }

    float temperature() { return tempLast; }
};
