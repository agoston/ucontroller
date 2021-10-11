#pragma once
#include <Arduino.h>
#include <NeoPixelBus.h>

#include "feature.h"

//The ESP8266 requires hardware support to be able to reliably send the data stream.
// Due to this and the restrictions on which pins are used by each hardware peripheral, only I/O pins GPIO1, GPIO2, and GPIO3 can be used.
// The Pin argument is ignored and can be omitted.
// The DMA methods will use GPIO3.
// The UART1 methods will use GPIO2.
// The UART0 methods will use GPIO1.

class LedString : public Feature {
   protected:
    uint8_t numleds;

    // opting to use GPIO3 (rx pin), as it was the least intrusive. that means no sending serial data to esp during debug/monitor though! esp can still send.
    NeoPixelBus<NeoGrbFeature, NeoWs2813Method> strip;

   public:
    LedString(uint8_t numleds) : numleds(numleds), strip(numleds) {}

    void setup() {
        strip.Begin();
        setAll(0, 0, 0);
        strip.Show();
    }

    void loop() {
    }

    void setAll(uint8_t r, uint8_t g, uint8_t b) {
        for (int i = 0; i < numleds; i++) strip.SetPixelColor(i, RgbColor(0, 0, 0));
    }
};
