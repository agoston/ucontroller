// #define DEV

// TODO: move into esp lib
#ifdef DEV
#define LOG(format) Serial.println(format);
#define LOGP(format, args...) snprintf(LOG_BUF,sizeof(LOG_BUF),format,args);Serial.println(LOG_BUF);
char LOG_BUF[80];
#else
#define LOG(format)
#define LOGP(format, args...)
#endif

// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "secret.h"

const uint8_t ROWS = 8;
const uint8_t COLUMNS = 8;
const uint8_t LEDS = 60;

const uint8_t ANIM_MS = 125;
const uint8_t ANIM_TICK = 8;
const uint8_t ANIM_TICK_SHIFT = 3;

// uses GPIO2 (hardwired)
// NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(LEDS);
NeoPixelBus<NeoGrbFeature, NeoEsp8266UartWs2813Method> strip(LEDS, 2);

//----------------------------------------------------------------------------------------------------------------
// TODO: make class of this
// TODO: add minecraft importer
char *img = (char*)"XyyyyyyX"
                   "y......y"
                   "y.y..y.y"
                   "y......y"
                   "y.y..y.y"
                   "y..yy..y"
                   "y......y"
                   "XyyyyyyX";

char *reverse(char *s, uint16_t len) {
  char *e = s + len - 1;
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
void translatePhysicalLayout(uint16_t columns, uint16_t rows, char *img) {
  for (uint16_t i = 1; i < rows; i+=2) {
    reverse(img + i*COLUMNS, COLUMNS);
  }
}

//----------------------------------------------------------------------------------------------------------------
class AnimPixel {
public:
  uint16_t r, g, b;
  int16_t dr, dg, db;
  uint8_t minr, ming, minb;
  uint8_t randr, randg, randb;
  uint8_t newr, newg, newb;
  uint8_t tick;

  void step() {
    if (tick == 0) {
      // reset values (or else fixed point rounding error would accumulate)
      r = newr << 8;
      g = newg << 8;
      b = newb << 8;

      newr = minr + random(randr);
      newg = ming + random(randg);
      newb = minb + random(randb);

      dr = ((newr<<8) - r) >> ANIM_TICK_SHIFT;
      dg = ((newg<<8) - g) >> ANIM_TICK_SHIFT;
      db = ((newb<<8) - b) >> ANIM_TICK_SHIFT;

      tick = ANIM_TICK;
    }

    tick--;
    r += dr;
    g += dg;
    b += db;
  }

  void init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta) {
    r = pr<<8;
    g = pg<<8;
    b = pb<<8;

    minr = max(0, pr - maxDelta);
    ming = max(0, pg - maxDelta);
    minb = max(0, pb - maxDelta);
    uint8_t maxr = min(255, pr + maxDelta);
    uint8_t maxg = min(255, pg + maxDelta);
    uint8_t maxb = min(255, pb + maxDelta);
    randr = maxr - minr;
    randg = maxg - ming;
    randb = maxb - minb;

    tick = 0;
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
      case 'y': ap->init(32, 32, 0, 4); break;

      default:
      case '.': ap->init(0, 0, 0, 0); break;
    }

    ap++;
  }

  return res;
}

//----------------------------------------------------------------------------------------------------------------
void update() {
  HTTPClient http;
  http.begin("http://seagoat.xs4all.nl/led");
  int httpCode = http.GET();

  if (httpCode > 0) {
    if (httpCode == HTTP_CODE_OK) {
      const char *payload = http.getString().c_str();

      char ch;
      uint16_t r, g, b, delta;

// todo: iterate
      int matched = sscanf(payload, "%c %hu %hu %hu %hu", &ch, &r, &g, &b, &delta);
      if (matched == 5) {
        // todo: color spec
      } else if (matched == 0) {
        // todo: read img
      }


    }
  } else {
    LOGP("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  }

  http.end();
}

//----------------------------------------------------------------------------------------------------------------
AnimPixel *ap;

void setup() {
  #ifdef DEV
  	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
  	Serial.begin(9600);
  #endif

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PW);
  WiFi.setAutoReconnect(true);

  strip.Begin();
  strip.Show();

  // relax a bit, strip.Show() is sending crap
  delay(100);

  translatePhysicalLayout(COLUMNS, ROWS, img);
  ap = translatePixel(COLUMNS, ROWS, LEDS, img);
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (int i = 0; i < LEDS; i++) {
    ap[i].step();
    // ap[i].writeGrb(p + i*3);
    strip.SetPixelColor(i, RgbColor(ap[i].r>>8,ap[i].g>>8,ap[i].b>>8));
  }

  strip.Show();
  LOGP("tick: %d. %d (%d) -- minr: %d, randr: %d, newr: %d", ap[0].tick, ap[0].r, (ap[0].r)>>8, ap[0].minr, ap[0].randr, ap[0].newr);

  delay(ANIM_MS);
}
