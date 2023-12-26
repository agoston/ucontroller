// #define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <features/display.h>
#include <features/log.h>
#include <features/ntpclient.h>
#include <features/temperature.h>

#include "secret.h"

#define BUTTON_ON_D4
#include <features/button.h>

// RX/TX: also usable, GPIO3/GPIO1; used in Serial.print()/read() & flashing
// D0 is clean
// D1: I2C SCL pin
// D2: I2C SDA pin
// D3+D4 is pullup
// D5+D6+D7 is clean (=serial, but normally unused)
// D8 is pulldown
// A0 is clean (analog, but also works digital)

// D3 has  an integrated 3.3V 12Kohm pullup on the d1 lite, which works perfectly with ds18b20
Temperature temperature(D3);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the button lights it up.
Button button(D4);
Display display(D5, D6);

NtpClient ntpClient(TZ_AMSTERDAM);

Feature* features[]{&temperature, &display, &ntpClient, &button};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
    delay(50);
    Serial.begin(9600);
#endif

    // builtin led connected to pullup, so its states are inverted
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    pinMode(D3, INPUT);

    WiFi.hostname("ESP-robi");
    WiFi.mode(WIFI_STA);
    WiFi.begin(NTP_SSID, NTP_PW);
    WiFi.setAutoReconnect(true);

    LOG("Waiting for wireless\n")

    // dhcp starts now in background (unless static IP)
    while (!WiFi.isConnected()) {
        delay(50);
    }

    LOGP("Got IP: %s\n", WiFi.localIP().toString().c_str())

    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->setup();
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->loop();

    ntpClient.refresh();
    unsigned long now = millis();

    uint8_t hours = ntpClient.hour();
    uint8_t mins = ntpClient.minute();

    // display update takes cca. 3ms per segment, roughly 15ms overall with overhead
    if (button.buttonPressedOrTtl(now)) {
        display.temp(temperature.temperature());
    } else {
        display.brightness(hours, mins);
        display.time(hours, mins);
    }

    delay(100);
}
