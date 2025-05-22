#ifndef __ANIMPIXEL_H
#define __ANIMPIXEL_H

#include <Arduino.h>

extern const uint8_t ANIM_MS;
extern const uint8_t ANIM_TICK;
extern const uint8_t ANIM_TICK_SHIFT;

class AnimPixel {
public:

  void step();
  void init_factor(uint8_t pr, uint8_t pg, uint8_t pb, float factor);
  void init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta);

  uint8_t getR() {return r>>8;};
  uint8_t getG() {return g>>8;};
  uint8_t getB() {return b>>8;};

protected:
  uint16_t r = 0, g = 0, b = 0;
  int16_t dr = 0, dg = 0, db = 0;
  uint8_t minr = 0, ming = 0, minb = 0;
  uint8_t randr = 0, randg = 0, randb = 0;
  uint8_t newr = 0, newg = 0, newb = 0;
  uint8_t tick = 0;
};

#endif
