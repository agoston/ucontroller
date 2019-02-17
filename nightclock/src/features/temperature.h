#ifndef __FEATURES_TEMPERATURE_H
#define __FEATURES_TEMPERATURE_H

#include "feature.h"
#include <OneWire.h>
#include <DallasTemperature.h>

class Temperature : public Feature {
    private:
    OneWire oneWire;
    DallasTemperature sensors;
    int16_t tempDelayMs;
    float tempLast = 22;
    uint16_t tempRefreshMs;
    unsigned long ttlRequestTemp = 0;
    unsigned long ttlHandleTemp = 0;

    public:
    Temperature(uint8_t pin, uint16_t tempRefreshMs = 5000) : oneWire(pin), sensors(&oneWire), tempRefreshMs(tempRefreshMs) {};

    void setup() {
        // DS18B20 temp. sensor. default resolution is already below .1 degrees, which is fine
        sensors.begin();
        sensors.setWaitForConversion(true);
        // depending on resolution, it takes longer to determine temperature
        tempDelayMs = sensors.millisToWaitForConversion(sensors.getResolution());

        // init scheduler
        requestTemp();
    }

    void loop() {
        unsigned long now = millis();
        if (ttlRequestTemp < now) requestTemp();
        if (ttlHandleTemp < now) handleTemp();
    }

    // ds18b20 works rather slow (up to 750ms per measurement for maximum precision).
    // here we request measurement, ds18b20 goes on the measures, puts result in its tiny buffer called 'scratchpad'
    void requestTemp() {
        // takes a few ms
        LOG("Request temperatures")
        sensors.requestTemperatures();
        unsigned long now = millis();
        ttlHandleTemp = now + tempDelayMs;
        ttlRequestTemp = now + tempRefreshMs;
    }

    // when required timespan passed, we read the latch to grab the measurement from the scratchpad
    void handleTemp() {
        // takes a few ms
        float tempC = sensors.getTempCByIndex(0);
        LOGP("Temp: %f", tempC);

        if (tempC != DEVICE_DISCONNECTED_C) tempLast = tempC;
    }

    float temperature() {return tempLast;}
};

#endif
