#pragma once

#include <Arduino.h>
#include <AsyncMqttClient.h>
#include <ESP8266WiFi.h>

#include <list>

#include "feature.h"
#include "secret.h"
#include "log.h"

class MqttClient : public Feature {
   private:
    AsyncMqttClient mqttClient;
    const char *me;
    std::list<const char *> subscriptions;

   public:
    MqttClient(const char *me) : me(me) {}

    uint16_t publish(const char *topic, const char *payload) {
        // qos=0 --> fire & forget
        return mqttClient.publish(topic, 0, true, payload);
    }

    // !! has to subscribe in setup() !!
    void subscribe(const char *topic) {
        subscriptions.push_back(topic);
    }

    // !! all messagehandlers get all subscriptions' messages, need to filter inside callback !!
    void messageHander(AsyncMqttClientInternals::OnMessageUserCallback callback) {
        mqttClient.onMessage(callback);
    }

    void setup() {
        mqttClient.setServer(MQTT_HOST, MQTT_PORT);
        mqttClient.setCredentials(MQTT_USER, MQTT_PW);
        mqttClient.onConnect([&] (bool x) {
            for (auto const& sub : subscriptions) {
                LOGP("subscribing to %s\n", sub);
                mqttClient.subscribe(sub, 1);
            }

            // send HELLO, to allow remote re-configure us
            mqttClient.publish("hello", 1, false, me);
        });
    }

    void loop() {
        // try reconnect if connection to mqtt server was lost. onConnect() handler re-subscribes subscriptions as well. 
        if (WiFi.isConnected()) mqttClient.connect();
    }
};
