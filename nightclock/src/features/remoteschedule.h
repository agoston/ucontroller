#ifndef __FEATURES_REMOTESCHEDULE_H
#define __FEATURES_REMOTESCHEDULE_H

#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>

#include "log.h"
#include "schedule.h"

class SwitchingCallback {
   public:
    void (*offCallback)(void *);
    void (*onCallback)(void *);
    void *arg;

    SwitchingCallback(void (*offCallback)(void *), void (*onCallback)(void *), void *arg) : offCallback(offCallback), onCallback(onCallback), arg(arg) {}
};

class RemoteSchedule : public Feature {
   private:
    HTTPClient *httpClient;
    WiFiClient *tcpClient;
    const char *baseUrl;
    Schedule *schedule;
    SwitchingCallback *switchingCallback;

    // millis() begins from 0
    long lastFetchMs = -86400000;

   public:
    RemoteSchedule(Schedule *schedule, WiFiClient *tcpClient, HTTPClient *httpClient, const char *baseUrl, SwitchingCallback *switchingCallback) {
        this->tcpClient = tcpClient;
        this->httpClient = httpClient;
        this->baseUrl = baseUrl;
        this->schedule = schedule;
        this->switchingCallback = switchingCallback;
    }

    Schedule *fetchSchedule() {
        Schedule *ret = NULL;
        if (httpClient->begin(*tcpClient, baseUrl)) {
            // start connection and send HTTP header
            int httpCode = httpClient->GET();

            // httpCode will be negative on error
            if (httpCode >= 200 && httpCode < 400) {
                ret = new Schedule(schedule);

                while (httpClient->connected()) {
                    // format: 0110 08:44 - 16:51
                    String line = tcpClient->readStringUntil('\n');
                    if (line.isEmpty()) break;
                    if (line.length() != 18) continue;

                    String date = line.substring(0, 4);
                    uint8_t month = date.substring(0, 2).toInt();
                    uint8_t day = date.substring(2, 4).toInt();
                    uint8_t beginHour = line.substring(5, 7).toInt();
                    uint8_t beginMin = line.substring(8, 10).toInt();
                    uint8_t endHour = line.substring(13, 15).toInt();
                    uint8_t endMin = line.substring(16, 18).toInt();

                    // the file downloaded for Europe/Amsterdam long ago contains sunrise - sunset pairs
                    ret->schedule(month, day, beginHour, beginMin, switchingCallback->offCallback, switchingCallback->arg);
                    ret->schedule(month, day, endHour, endMin, switchingCallback->onCallback, switchingCallback->arg);
                }

            } else {
                LOGP("HTTP status code %d\n", httpCode);
            }

            httpClient->end();
        }

        return ret;
    }

    void setup() {}

    void loop() {
        unsigned long now = millis();

        // refresh schedule every 24 hours
        if (now - lastFetchMs > 86400000) {
            if (Schedule *fresh = fetchSchedule()) {
                LOGP("Read %d scheduled entries\n", fresh->size())

                // let poor operator know we're good to go!
                // for (int i = 0; i < 4; i++) {
                //     digitalWrite(LED_BUILTIN, LOW);
                //     delay(100);
                //     digitalWrite(LED_BUILTIN, HIGH);
                //     delay(100);
                // }

                schedule->stealFrom(fresh);
                delete fresh;

                lastFetchMs = now;
            }
        } else {
            LOG("skip reading schedule\n")
        }
    }
};

#endif
