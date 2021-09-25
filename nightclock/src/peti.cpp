#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
// #include <NeoPixelBus.h>
#include <features/display.h>
#include <features/log.h>
#include <features/ntpclient.h>
// #include <features/humidity.h>
// #include <features/voc.h>
// #include <features/mqtt.h>

#include "secret.h"

// #define BUTTON_ON_D4
// #include <features/button.h>

// D1: I2C SCL pin
// D2: I2C SDA pin
// D3+D4 is pullup
// D8 is pulldown
// D0 is clean
// D4+D5+D6 is clean (=serial, but normally unused)
// A0 is clean (analog, but also works digital)

// TODO: these use I2C, so pins are D1+D2, hardwired!
// VOC voc;
// Humidity humidity;

// TODO: led string; uses GPIO2 (hardwired)
// NeoPixelBus<NeoGrbFeature, NeoEsp8266UartWs2813Method> strip(LEDS, 2);

Display display(D5, D6);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the buttin lights it up.
// Button button(D4);
// sync time from NTP
NtpClient ntpClient("CET-1CEST,M3.5.0/2,M10.5.0/3");
// TODO: MQTT client
// MqttClient mqttClient(MQTT_HOST, MQTT_PORT);

Feature *features[]{&display, &ntpClient};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
    delay(50);
    Serial.begin(9600);
#endif

    // builtin led connected to pullup, so its states are inverted
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    WiFi.hostname("ESP-peti");
    WiFi.mode(WIFI_STA);
    // enter into light sleep between DTIM updates, ~1mA consumption
    WiFi.setSleepMode(WIFI_LIGHT_SLEEP);
    WiFi.begin(NTP_SSID, NTP_PW);

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

    unsigned long now = millis();

    uint8_t hours = ntpClient.hour();
    uint8_t mins = ntpClient.minute();
    uint8_t secs = ntpClient.second();

    LOGP("Time: %d:%d:%d\n", hours, mins, secs);

    // this takes cca. 3ms per segment, roughly 15ms overall with overhead
    // if (button.buttonPressedOrTtl(now)) {
    //     display.temp(98.76);
    // } else {
        display.brightness(hours, mins);
        display.time(hours, mins);
    // }

    // can't use deep sleep here, as it would turn off the modem, which defeats the purpose of a udp server.
    // however, the esp-arduino lib does an actual yield() on delay(), so consumption is kept to a minimum.
    delay(250);
}
