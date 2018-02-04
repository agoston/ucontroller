// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>

const uint8_t ROWS = 8;
const uint8_t COLUMNS = 8;
const uint8_t LEDS = 60;

const uint8_t ANIM_MS = 125;
const uint8_t ANIM_TICK = 8;
const uint8_t ANIM_TICK_SHIFT = 3;

// uses GPIO2 (hardwired)
NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(LEDS);

//----------------------------------------------------------------------------------------------------------------
// TODO: make class of this
// TODO: add minecraft importer
const char *img = "XyyyyyyX"
                  "y......y"
                  "y.y..y.y"
                  "y......y"
                  "y.y..y.y"
                  "y..yy..y"
                  "y......y"
                  "XyyyyyyX";

char *reverse(char *s, uint16_t len) {
  char *e = s + len;
  char temp;
  while (s < e) {
    temp = *s;
    *s = *e;
    *e = temp;
    s++;
    e--;
  }
}

// img is row-contigious, while led strip is connected in snake pattern
void translatePhysicalLayout(uint16_t columns, uint16_t rows, const char *orig_img) {
  // bad baad agoston
  char *img = (char*) orig_img;

  for (uint16_t i = 1; i < rows; i+=2) {
    reverse(img + i*COLUMNS, COLUMNS);
  }
}

//----------------------------------------------------------------------------------------------------------------
class AnimPixel {
  uint16_t r, g, b;
  int16_t dr, dg, db;
  uint8_t minr, ming, minb;
  uint8_t randr, randg, randb;
  uint8_t tick;

public:
  void step() {
    if (tick >= ANIM_TICK) {
      uint8_t newr = minr + random(randr);
      uint8_t newg = ming + random(randg);
      uint8_t newb = minb + random(randb);

      dr = (newr - r) << (8-ANIM_TICK_SHIFT);
      dg = (newg - g) << (8-ANIM_TICK_SHIFT);
      db = (newb - b) << (8-ANIM_TICK_SHIFT);
      tick = 0;
    } else {
      tick++;
    }

    r += dr;
    g += dg;
    b += db;
  }

  void init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta) {
    r = pr;
    g = pg;
    b = pb;

    uint8_t minr = max(0, r - maxDelta);
    uint8_t ming = max(0, g - maxDelta);
    uint8_t minb = max(0, b - maxDelta);
    uint8_t maxr = min(255, r + maxDelta);
    uint8_t maxg = min(255, g + maxDelta);
    uint8_t maxb = min(255, b + maxDelta);
    randr = maxr - minr;
    randg = maxg - ming;
    randb = maxb - minb;

    tick = 255;
  }

  void writeGrb(uint8_t *p) {
    *(p++) = g >> 8;
    *(p++) = r >> 8;
    *(p++) = b >> 8;
  }
};

AnimPixel *translatePixel(uint16_t columns, uint16_t rows, uint16_t leds, const char *img) {
  AnimPixel *res = new AnimPixel[leds];

  AnimPixel *ap = res;
  for (int i = 0; i < columns * rows; i++) {
    char pixel = img[i];
    if (pixel == 'X') continue;

    switch (pixel) {
      case 'y': ap->init(192, 192, 0, 64); break;

      default:
      case '.': ap->init(0, 0, 0, 20); break;
    }

    ap++;
  }

  return res;
}

//----------------------------------------------------------------------------------------------------------------
AnimPixel *ap;

void setup() {
  strip.Begin();
  strip.Show();

  // relax a bit, strip.Show() is sending crap
  delay(100);

  translatePhysicalLayout(COLUMNS, ROWS, img);
  ap = translatePixel(COLUMNS, ROWS, LEDS, img);
}

//----------------------------------------------------------------------------------------------------------------

void loop() {
  // not to be re-used. format is GRB (like above, NeoGrbFeature suggests)
  uint8_t *p = strip.Pixels();

  for (int i = 0; i < LEDS; i++) {
    ap[i].step();
    ap[i].writeGrb(p + i*3);
  }

  strip.Show();

  delay(250);
}
