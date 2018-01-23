// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>

// uses GPIO2 (hardwired)
NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(60);

// drawing board:
// X... ...X
// .... ....
// .... ....
// .... ....
// .... ....
// .... ....
// .... ....
// X... ...X

void setup() {
  strip.Begin();
  strip.Show();
}

// TODO: spiraling ledmatrix fill
// TODO: color waves
// TODO: background

uint8_t

void loop() {
  // not to be re-used. format is GRB (like above, NeoGrbFeature suggests)
  uint8_t *p = strip.Pixels();



  for (int i = 0; i < 60; i++) {
    strip.SetPixelColor(i, colors[cind]);
  }
  strip.Show();

  delay(500);
}
