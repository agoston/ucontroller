#include <Arduino.h>
#include <NeoPixelBus.h>

// uses GPIO3 (for DMA)
NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(60);

RgbColor colors[2];
uint8_t cind = 0;

void setup() {
  strip.Begin();
  strip.Show();

  colors[0] = RgbColor(128, 0, 0);
  colors[1] = RgbColor(128, 128, 0);
}

void loop() {

  for (int i = 0; i < 60; i++) {
    strip.SetPixelColor(i, colors[cind]);
  }
  strip.Show();
  cind = (cind + 1) & 1;
  delay(100);
}
