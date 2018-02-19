// #define DEV

// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "secret.h"
#include "log.h"

const uint8_t SYMBOLS = 20;
const uint8_t ROWS = 8;
const uint8_t COLUMNS = 8;
const uint8_t LEDS = 60;

const uint8_t ANIM_MS = 125;
const uint8_t ANIM_TICK = 8;
const uint8_t ANIM_TICK_SHIFT = 3;

uint16_t tickUpdate = 8;

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

  // FIXME: refactor (copypaste from init+tick)
  void reinit(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t maxDelta) {
    minr = max(0, pr - maxDelta);
    ming = max(0, pg - maxDelta);
    minb = max(0, pb - maxDelta);
    uint8_t maxr = min(255, pr + maxDelta);
    uint8_t maxg = min(255, pg + maxDelta);
    uint8_t maxb = min(255, pb + maxDelta);
    randr = maxr - minr;
    randg = maxg - ming;
    randb = maxb - minb;

    newr = minr + random(randr);
    newg = ming + random(randg);
    newb = minb + random(randb);

    dr = ((newr<<8) - r) >> ANIM_TICK_SHIFT;
    dg = ((newg<<8) - g) >> ANIM_TICK_SHIFT;
    db = ((newb<<8) - b) >> ANIM_TICK_SHIFT;

    tick = ANIM_TICK;
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
void update(const char *payload, uint16_t columns, uint16_t rows, AnimPixel *ap) {
  const char *line = payload;

  char symbols[SYMBOLS];
  uint8_t values[SYMBOLS][4];
  uint8_t symIndex = 0;

  char ch;
  uint16_t r, g, b, delta;

  // read color spec
  for (; line; line = strchr(line, '\n') + 1) {
    int matched = sscanf(line, "%c %hu %hu %hu %hu", &ch, &r, &g, &b, &delta);

    if (matched < 5) break;

    LOGP("%d %c %d %d %d %d", symIndex, ch, r, g, b, delta);
    symbols[symIndex] = ch;
    values[symIndex][0] = r;
    values[symIndex][1] = g;
    values[symIndex][2] = b;
    values[symIndex][3] = delta;
    symIndex++;
  }

  // jump over empty line
  line = strchr(line, '\n') + 1;

  // read image
  for (int i = 0; line && i < rows; i++, line = strchr(line, '\n') + 1) {
    // sanity check
    char *nextLine = strchr(line, '\n');
    if (!nextLine || nextLine - line != columns) {
      LOGP("malformed imgdef: %s", line);
      return;
    }

    strncpy(img + i * columns, line, columns);
  }

  translatePhysicalLayout(columns, rows, img);

  LOG(img);

  // FIXME: refactor creating AnimPixel[]
  for (int i = 0; i < columns * rows; i++) {
    for (int j = 0; j < symIndex; j++) {
      if (symbols[j] != img[i]) continue;

      ap->reinit(values[j][0], values[j][1], values[j][2], values[j][3]);
      ap++;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------
AnimPixel *ap;

void setup() {
  strip.Begin();
  for (int i = 0; i < LEDS; i++) strip.SetPixelColor(i, RgbColor(0, 0, 0));
  strip.Show();

  #ifdef DEV
  	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
  	Serial.begin(9600);
  #endif

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PW);
  WiFi.setAutoReconnect(true);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    LOG(".");
  }

  LOGP("WiFi connected, IP address: %s", WiFi.localIP().toString().c_str());

  translatePhysicalLayout(COLUMNS, ROWS, img);
  ap = translatePixel(COLUMNS, ROWS, LEDS, img);

  // relax a bit, strip.Show() is sending crap
  delay(50);
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (int i = 0; i < LEDS; i++) {
    ap[i].step();
    // ap[i].writeGrb(p + i*3);
    // TODO: no clue why direct changing pixels won't work, this is ugly
    strip.SetPixelColor(i, RgbColor(ap[i].r>>8,ap[i].g>>8,ap[i].b>>8));
  }

  strip.Show();
  // LOGP("tick: %d. %d (%d) -- minr: %d, randr: %d, newr: %d", ap[0].tick, ap[0].r, (ap[0].r)>>8, ap[0].minr, ap[0].randr, ap[0].newr);

  // TODO: deep sleep
  delay(ANIM_MS);

  if (!(tickUpdate--)) {
    HTTPClient http;
    http.begin("http://seagoat.xs4all.nl/esp/led");
    int httpCode = http.GET();

    if (httpCode != HTTP_CODE_OK) {
      LOGP("HTTP GET: %s\n", http.errorToString(httpCode).c_str());
      http.end();
      return;
    }

    String string = http.getString();
    if (string.length() < 25) {
      LOGP("Input length %d too small", string.length());
      LOG(string.c_str())
      http.end();
      return;
    }

    update(string.c_str(), COLUMNS, ROWS, ap);

    http.end();
    tickUpdate = ANIM_TICK * 60;
  }
}
