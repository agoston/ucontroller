#ifndef __IMAGE_H
#define __IMAGE_H

#include <Arduino.h>
#include "AnimPixel.h"

extern const uint8_t LEDS;
extern const uint8_t COLUMNS;
extern const uint8_t ROWS;
extern bool deadPixel(uint16_t index);

class Image {
public:
  Image();
  ~Image();

  void initAsciiArt(char *img, uint8_t num_symbols, char *symbols, uint8_t *values);
  void initBitmap(uint8_t *bitmap);

  uint16_t translatePhysicalLayout(uint16_t index);

  AnimPixel *pixel(uint16_t pixel) {return pixels + pixel;}

protected:
  AnimPixel *pixels;
};

#endif
