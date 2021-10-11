#pragma once
#include <Arduino.h>

// FIXME: not used/tested yet

// represents one pixel
class LedPixel {
   protected:
    // the actual RGB values, 8.8 fixed point
    uint16_t r = 0, g = 0, b = 0;

   public:
    LedPixel(uint8_t r, uint8_t g, uint8_t b) : r(r << 8), g(g << 8), b(b << 8) {}

    uint8_t getR() { return r >> 8; };
    uint8_t getG() { return g >> 8; };
    uint8_t getB() { return b >> 8; };

    void setR(uint8_t newr) { r = newr << 8; }
    void setG(uint8_t newg) { g = newg << 8; }
    void setB(uint8_t newb) { b = newb << 8; }
};

// represents one pixel that can transition over time
class AnimPixel : public LedPixel {
   protected:
    // the requested RGB values
    uint8_t reqr, reqg, reqb;
    // the previous target RGB values
    uint8_t oldr = 0, oldg = 0, oldb = 0;
    uint16_t durationMs;
    uint16_t progressMs;

   public:
    AnimPixel(uint8_t r, uint8_t g, uint8_t b) : LedPixel(r, g, b) {}

    bool update(uint16_t elapsed) {
        progressMs += elapsed;
        if (progressMs >= durationMs) {
            setR(reqr); setG(reqg); setB(reqb);
            return true;
        }

        uint8_t progress = ((uint32_t)progressMs<<8) / durationMs;

        r = ((int16_t)reqr - (int16_t)oldr) * progress;
        g = ((int16_t)reqg - (int16_t)oldg) * progress;
        b = ((int16_t)reqb - (int16_t)oldb) * progress;
        return false;
    }

    void target(uint16_t durationMs, uint8_t reqr, uint8_t reqg, uint8_t reqb) {
        this->reqr = reqr;
        this->reqg = reqg;
        this->reqb = reqb;
        this->durationMs = durationMs;
        this->progressMs = 0;
    }

    // TODO: just for future reference wrt random
    uint16_t randomDelta(uint8_t req, uint8_t reqFactor) {
        // FIXME: if reqFactor is power of two, this could be a bit shifting
        return req + (RANDOM_REG32 % reqFactor) - (reqFactor >> 1);
    }
};
