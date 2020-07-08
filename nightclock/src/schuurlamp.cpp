#define DEV

#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <features/log.h>
#include <features/ntpclient.h>
#include <features/relay.h>
#include <features/schedule.h>

#include "secret.h"

// relay
Relay relay(D0);
// sync time from NTP
NtpClient ntpClient;
// scheduling
Schedule schedule(&ntpClient);

Feature *features[]{&relay, &ntpClient, &schedule};

WiFiClient tcpClient;
HTTPClient httpClient;

uint8_t lastFetchMonth = 0;
uint8_t lastFetchDay = 0;

//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
    delay(50);
    Serial.begin(9600);
#endif

    // upstream internet access for NTP sync
    WiFi.mode(WIFI_STA);
    WiFi.begin(NTP_SSID, NTP_PW);
    LOG("Waiting for wireless")

    // dhcp starts now in background (unless static IP)
    while (WiFi.status() != WL_CONNECTED) {
        delay(50);
    }
    LOGP("Got IP: %s", WiFi.localIP().toString().c_str())

    // enter into light sleep between DTIM updates, ~1mA consumption
    WiFi.setSleepMode(WIFI_LIGHT_SLEEP);

    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->setup();
}

void trampolineOn(void *relay) {
    ((Relay *)relay)->on();
}

void trampolineOff(void *relay) {
    ((Relay *)relay)->off();
}

Schedule *fetchSchedule() {
    Schedule *ret = NULL;
    if (httpClient.begin(tcpClient, BASEURL "/schuurlamp/schedule")) {
        // start connection and send HTTP header
        int httpCode = httpClient.GET();

        // httpCode will be negative on error
        if (httpCode >= 200 && httpCode < 400) {
            ret = new Schedule(&ntpClient);

            while (httpClient.connected()) {
                // format: 0110 08:44 - 16:51
                String line = tcpClient.readStringUntil('\n');
                if (line.isEmpty()) break;
                if (line.length() != 18) continue;

                String date = line.substring(0, 4);
                uint8_t month = date.substring(0, 2).toInt();
                uint8_t day = date.substring(2, 4).toInt();
                uint8_t beginHour = line.substring(5, 7).toInt();
                uint8_t beginMin = line.substring(8, 10).toInt();
                uint8_t endHour = line.substring(13, 15).toInt();
                uint8_t endMin = line.substring(16, 18).toInt();

                ret->schedule(month, day, beginHour, beginMin, &trampolineOn, &relay);
                ret->schedule(month, day, endHour, endMin, &trampolineOff, &relay);
            }
        } else {
            LOGP("HTTP status code %d", httpCode);
        }

        httpClient.end();
    }

    return ret;
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->loop();

    LOGP("TIME: %d:%d:%d", ntpClient.hour(), ntpClient.minute(), ntpClient.second())

    // re-fetch schedule once a day
    if (lastFetchMonth != ntpClient.month() || lastFetchDay != ntpClient.day()) {
        // fetchSchedule();
        // if (Schedule *fresh = fetchSchedule()) {
        //     schedule = fresh;
            // lastFetchMonth = ntpClient.month();
            // lastFetchDay = ntpClient.day();
        // }
    }

    delay(1500);
    // delay(15000);
}
