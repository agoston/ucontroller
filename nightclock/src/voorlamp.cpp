// #define DEVHTTP "voorlamp"
// #define DEV

#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <features/daylightschedule.h>
#include <features/log.h>
#include <features/ntpclient.h>
#include <features/relay.h>

#include "secret.h"

#define BUTTON_ON_D4
#include <features/button.h>

WiFiClient tcpClient;
HTTPClient httpClient;

// relay on D5/GPIO14 (shared with SPI and JTAG pins!)
Relay relay(D5);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the builtin led, so pressing the button lights it up.
Button button(D4);
// sync time from NTP
NtpClient ntpClient(TZ_AMSTERDAM);
DaylightSchedule daylightSchedule(&ntpClient, &AMSTERDAM[0], [](bool on) {
    LOGP("relay %d", on)
    relay.set(on);
});

Feature *features[]{&relay, &ntpClient, &daylightSchedule, &button};

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
    delay(50);
    Serial.begin(9600);
#endif

    // builtin led connected to pullup, so its states are inverted
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    // upstream internet access for NTP sync
    WiFi.hostname("ESP-voorlamp");
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

    if (button.wasButtonPress()) {
        relay.toggle();
    }

    delay(1000);
}
