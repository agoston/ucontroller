#ifndef __IMAGE_H
#define __IMAGE_H

#include <Arduino.h>
#include "AnimPixel.h"

extern const uint8_t LEDS;
extern const uint8_t COLUMNS;
extern const uint8_t ROWS;

class Image {
public:
  Image();
  ~Image();

  void initImg(char *asciiArt);
  void initColors(uint8_t num, char *symbols, uint8_t *values);

  void translatePhysicalLayout();
  void initPixels();

  AnimPixel *pixel(uint16_t pixel) {return pixels + pixel;}

protected:
  char *img;
  uint8_t num_symbols;
  char *symbols;
  uint8_t *values;
  AnimPixel *pixels;

  char *reverse(char *s, uint16_t len);
};

#endif
