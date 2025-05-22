#include "AnimPixel.h"

void AnimPixel::step() {
  if (tick == 0) {
    dr = ((newr<<8) - r) >> ANIM_TICK_SHIFT;
    dg = ((newg<<8) - g) >> ANIM_TICK_SHIFT;
    db = ((newb<<8) - b) >> ANIM_TICK_SHIFT;

    newr = minr + random(randr);
    newg = ming + random(randg);
    newb = minb + random(randb);

    tick = ANIM_TICK;
  }

  tick--;
  r += dr;
  g += dg;
  b += db;
}

void AnimPixel::init_factor(uint8_t pr, uint8_t pg, uint8_t pb, float factor) {
  newr = pr;
  newg = pg;
  newb = pb;

  minr = pr * (1-factor);
  ming = pg * (1-factor);
  minb = pb * (1-factor);
  uint8_t maxr = min((uint16_t)255, (uint16_t)(pr * (1+factor)));
  uint8_t maxg = min((uint16_t)255, (uint16_t)(pg * (1+factor)));
  uint8_t maxb = min((uint16_t)255, (uint16_t)(pb * (1+factor)));
  randr = maxr - minr;
  randg = maxg - ming;
  randb = maxb - minb;
}

void AnimPixel::init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta) {
  newr = pr;
  newg = pg;
  newb = pb;

  minr = max(0, (int)pr - maxDelta);
  ming = max(0, (int)pg - maxDelta);
  minb = max(0, (int)pb - maxDelta);
  uint8_t maxr = min(255, (int)pr + maxDelta);
  uint8_t maxg = min(255, (int)pg + maxDelta);
  uint8_t maxb = min(255, (int)pb + maxDelta);
  randr = maxr - minr;
  randg = maxg - ming;
  randb = maxb - minb;
}
