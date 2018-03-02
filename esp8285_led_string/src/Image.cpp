#include "Image.h"

// #define DEVH
#include "log.h"

Image::Image() {
  pixels = new AnimPixel[LEDS];
}

Image::~Image() {
  delete[] pixels;
}

void Image::initBitmap(uint8_t *bitmap) {
  uint16_t strip = 0;

  for (uint16_t i = 0; i < COLUMNS * ROWS; i++) {
    if (deadPixel(i)) continue;

    uint16_t ti = translatePhysicalLayout(i);
    LOGP("translate %d to %d", i, ti);
    uint8_t *p = bitmap + (ti*3);
    pixels[strip].init_factor(p[0], p[1], p[2], 0.1);
    LOGP("%d. %ld %x %x %x", i, p - bitmap, p[0], p[1], p[2]);

    if (strip++ >= LEDS) return;
  }
}

void Image::initAsciiArt(char *img, uint8_t num_symbols, char *symbols, uint8_t *values) {
  AnimPixel *ap = pixels;

  for (uint16_t i = 0; i < COLUMNS * ROWS; i++) {
    if (deadPixel(i)) continue;

    uint16_t ti = translatePhysicalLayout(i);
    for (uint16_t j = 0; j < num_symbols; j++) {
      if (symbols[j] == img[ti]) {
        ap->init(values[j*4], values[j*4+1], values[j*4+2], values[j*4+3]);
        ap++;
        if (ap - pixels >= LEDS) return;
        break;
      }
    }
  }
}

// convert row-continous indexing to snake pattern
uint16_t Image::translatePhysicalLayout(uint16_t index) {
  uint16_t row = index / COLUMNS;
  // even rows are directly mapped
  if (!(row & 1)) return index;

  uint16_t rowIndex = row * COLUMNS;
  uint16_t column = index - rowIndex;
  return rowIndex + COLUMNS - column - 1;
}
