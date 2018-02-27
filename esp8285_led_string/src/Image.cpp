#include "Image.h"

void Image::initImg(char *asciiArt) {
  img = asciiArt;
}

void Image::initColors(uint8_t num, char *symbols, uint8_t *values) {
  this->num_symbols = num;
  this->symbols = symbols;
  this->values = values;
}

//----------------------------------------------------------------------------------------------------------------
char *Image::reverse(char *s, uint16_t len) {
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
void Image::translatePhysicalLayout() {
  for (uint16_t i = 1; i < ROWS; i+=2) {
    reverse(img + i*COLUMNS, COLUMNS);
  }
}

void Image::initPixels() {
  AnimPixel *ap = pixels;

  for (int i = 0; i < COLUMNS * ROWS; i++) {
    for (int j = 0; j < num_symbols; j++) {
      if (symbols[j] != img[i]) continue;

      ap->init(values[j*4], values[j*4+1], values[j*4+2], values[j*4+3]);
      ap++;
    }
  }
}
