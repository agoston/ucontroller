#pragma once
#include <Arduino.h>
#include <NeoPixelBus.h>

#include "feature.h"

// The ESP8266 requires hardware support to be able to reliably send the data stream.
//  Due to this and the restrictions on which pins are used by each hardware peripheral, only I/O pins GPIO1, GPIO2, and GPIO3 can be used.
//  The Pin argument is ignored and can be omitted.
//  The DMA methods will use GPIO3 (RX).
//  The UART1 methods will use GPIO2 (D4)
//  The UART0 methods will use GPIO1 (TX).

class LedString : public Feature {
   protected:
    uint8_t numleds;

    // opting to use GPIO3 (rx pin), as it was the least intrusive. that means no sending serial data to esp during debug/monitor though! esp can still send.
    NeoPixelBus<NeoGrbFeature, NeoWs2813Method> strip;

   public:
    LedString(uint8_t numleds) : numleds(numleds), strip(numleds) {}

    void setup() {
        // begin() clears pixels to 0
        strip.Begin();
        strip.Show();
    }

    void loop() {
    }

    void setAll(RgbColor color) {
        for (int i = 0; i < numleds; i++) strip.SetPixelColor(i, color);
        strip.Show();
    }
};
