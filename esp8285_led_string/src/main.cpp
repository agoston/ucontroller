#define DEV

// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "secret.h"
#include "log.h"
#include "AnimPixel.h"
#include "Image.h"

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

Image image;

// minecraft ledmatrix is missing its corners
bool deadPixel(uint16_t index) {
  switch (index) {
    case 0:
    case 7:
    case 56:
    case 63:
    return true;
  }
  return false;
}

//----------------------------------------------------------------------------------------------------------------
void updateBitmap(const char *payload) {
  LOG("Updating bitmap");
  image.initBitmap((uint8_t *)payload);
}

//----------------------------------------------------------------------------------------------------------------
void updateAsciiArt(const char *payload) {
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

  char img[COLUMNS*ROWS];

  // read image
  for (int i = 0; line && i < ROWS; i++, line = strchr(line, '\n') + 1) {
    // sanity check
    char *nextLine = strchr(line, '\n');
    if (!nextLine || nextLine - line != COLUMNS) {
      LOGP("malformed imgdef: %s", line);
      return;
    }

    strncpy(img + i * COLUMNS, line, COLUMNS);
  }

  image.initAsciiArt(img, symIndex, &symbols[0], &values[0][0]);
}

//----------------------------------------------------------------------------------------------------------------
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

  // relax a bit, strip.Show() is sending crap
  delay(50);
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (int i = 0; i < LEDS; i++) {
    AnimPixel *ap = image.pixel(i);
    ap->step();

    // ap[i].writeGrb(p + i*3);
    // TODO: no clue why direct changing pixels won't work, this is ugly
    strip.SetPixelColor(i, RgbColor(ap->getR(), ap->getG(), ap->getB()));
  }

  strip.Show();
  // LOGP("tick: %d. %d (%d) -- minr: %d, randr: %d, newr: %d", ap[0].tick, ap[0].r, (ap[0].r)>>8, ap[0].minr, ap[0].randr, ap[0].newr);

  // TODO: deep sleep
  delay(ANIM_MS);

  if (!(tickUpdate--)) {
    tickUpdate = ANIM_TICK * 5;
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

    // FIXME: this is kludgy
    if (string.length() == 192) updateBitmap(string.c_str());
    else updateAsciiArt(string.c_str());

    http.end();
    // successful update time
    tickUpdate = ANIM_TICK * 60;
  }
}
