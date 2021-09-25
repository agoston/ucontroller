#pragma once
#include <Arduino.h>
#include <NeoPixelBus.h>

#include "ledpixel.h"

class LedString {
   protected:
    uint8_t numleds;
    // uses GPIO2 (hardwired)
    // NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(LEDS);
    NeoPixelBus<NeoGrbFeature, NeoEsp8266UartWs2813Method> strip(LEDS, 2);
   public:
    LedString(uint8_t numleds) : numleds(numleds) {}

    void setAll(uint8_t r, uint8_t g, uint8_t b) {
    }
};
