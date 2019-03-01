#ifndef __FEATURES_BUTTON_H
#define __FEATURES_BUTTON_H

#include "feature.h"
#include "log.h"
#include <Arduino.h>

class Button : public Feature {
    private:
    uint8_t pin;
    uint16_t pressTtl;
    
    // these are changed from the ISR
    volatile bool isrButtonPressed = false;
    volatile unsigned long isrButtonPressTtl = 0;

    public:
    Button(uint8_t pin, uint16_t pressTtl = 3000) : pin(pin), pressTtl(pressTtl) {};

    void setup();
    void loop() {};

    void handleButton() {
        if (digitalRead(pin) == HIGH) {
            LOGP("ButtonRelease %d\n", pin);
            isrButtonPressed = false;
            isrButtonPressTtl = millis() + pressTtl;
        } else {
            LOGP("ButtonPress %d\n", pin);
            isrButtonPressed = true;
        }
    }

    bool buttonPressed() {
        return isrButtonPressed;
    }

    bool buttonPressedOrTtl(unsigned long now) {
        return isrButtonPressed || now < isrButtonPressTtl;
    }
};

// need a trampoline for attachInterrupt(); it expects function pointer without class reference
// I've only did d0-d8 here as that's how many data pins there are on the  d1 lite
namespace FeaturesButton {
#ifdef BUTTON_ON_D0
Button *button_d0 = NULL;
void handle_button_d0() {if (button_d0) button_d0->handleButton();}
#endif
#ifdef BUTTON_ON_D1
Button *button_d1 = NULL;
void handle_button_d1() {if (button_d1) button_d1->handleButton();}
#endif
#ifdef BUTTON_ON_D2
Button *button_d2 = NULL;
void handle_button_d2() {if (button_d2) button_d2->handleButton();}
#endif
#ifdef BUTTON_ON_D3
Button *button_d3 = NULL;
void handle_button_d3() {if (button_d3) button_d3->handleButton();}
#endif
#ifdef BUTTON_ON_D4
Button *button_d4 = NULL;
void handle_button_d4() {if (button_d4) button_d4->handleButton();}
#endif
#ifdef BUTTON_ON_D5
Button *button_d5 = NULL;
void handle_button_d5() {if (button_d5) button_d5->handleButton();}
#endif
#ifdef BUTTON_ON_D6
Button *button_d6 = NULL;
void handle_button_d6() {if (button_d6) button_d6->handleButton();}
#endif
#ifdef BUTTON_ON_D7
Button *button_d7 = NULL;
void handle_button_d7() {if (button_d7) button_d7->handleButton();}
#endif
#ifdef BUTTON_ON_D8
Button *button_d8 = NULL;
void handle_button_d8() {if (button_d8) button_d8->handleButton();}
#endif

typedef void (*VoidFunction)();

VoidFunction trampoline(uint8_t pin, Button *button) {
    switch (pin) {
#ifdef BUTTON_ON_D0        
        case D0: button_d0 = button; return handle_button_d0;
#endif
#ifdef BUTTON_ON_D1
        case D1: button_d1 = button; return handle_button_d1;
#endif
#ifdef BUTTON_ON_D2
        case D2: button_d2 = button; return handle_button_d2;
#endif
#ifdef BUTTON_ON_D3
        case D3: button_d3 = button; return handle_button_d3;
#endif
#ifdef BUTTON_ON_D4
        case D4: button_d4 = button; return handle_button_d4;
#endif
#ifdef BUTTON_ON_D5
        case D5: button_d5 = button; return handle_button_d5;
#endif
#ifdef BUTTON_ON_D6
        case D6: button_d6 = button; return handle_button_d6;
#endif
#ifdef BUTTON_ON_D7
        case D7: button_d7 = button; return handle_button_d7;
#endif
#ifdef BUTTON_ON_D8
        case D8: button_d8 = button; return handle_button_d8;
#endif
        default: 
            LOG("ERR: pin undefined for trampoline\n");
            return NULL;
    }
}
}   // end namespace

void Button::setup() {
    pinMode(pin, INPUT);
    attachInterrupt(digitalPinToInterrupt(pin), FeaturesButton::trampoline(pin, this), CHANGE);
}

#endif
