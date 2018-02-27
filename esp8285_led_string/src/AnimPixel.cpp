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

void AnimPixel::init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta) {
  newr = pr;
  newg = pg;
  newb = pb;

  minr = max(0, pr - maxDelta);
  ming = max(0, pg - maxDelta);
  minb = max(0, pb - maxDelta);
  uint8_t maxr = min(255, pr + maxDelta);
  uint8_t maxg = min(255, pg + maxDelta);
  uint8_t maxb = min(255, pb + maxDelta);
  randr = maxr - minr;
  randg = maxg - ming;
  randb = maxb - minb;
}
