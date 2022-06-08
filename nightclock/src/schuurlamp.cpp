#define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>

#include <features/log.h>
#include <features/ntpclient.h>
#include <features/relay.h>
#include <features/daylightschedule.h>

#include "secret.h"

// relay on D5/GPIO14 (shared with SPI and JTAG pins!)
Relay relay(D5);
// sync time from NTP
NtpClient ntpClient(TZ_AMSTERDAM);
DaylightSchedule daylightSchedule(&ntpClient, &AMSTERDAM[0], [](bool on) {
    LOGP("relay %d", on)
    relay.set(on);
});

Feature *features[]{&relay, &ntpClient, &daylightSchedule};

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
    WiFi.hostname("ESP-schuurlamp");
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

    // FIXME: when starting up, turn on/off depending on schedule (e.g. now when starting up, it's always off, even during night)
    // FIXME: make a manual override (http server? or maybe a switch too, or both)
    delay(15000);
}
