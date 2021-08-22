#pragma once

#include <Arduino.h>
#include <AsyncMqttClient.h>
#include <ESP8266WiFi.h>

#include "feature.h"
#include "log.h"

class MqttClient : public Feature {
   private:
    AsyncMqttClient mqttClient;
    const char *host;
    uint16_t port;

   public:
    MqttClient(const char* host, uint16_t port) : host(host), port(port) {}

    uint16_t publish(const char *topic, const char *payload) {
        // qos=0 --> fire & forget
        return mqttClient.publish(topic, 0, true, payload);
    }

    void setup() {
        mqttClient.setServer(host, port);
    }

    void loop() {
        // try reconnect if connection to mqtt server was lost
        if (WiFi.isConnected()) mqttClient.connect();
    }
};
