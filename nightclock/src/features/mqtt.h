#pragma once

#include <Arduino.h>
#include <AsyncMqttClient.h>
#include <ESP8266WiFi.h>
#include <Ticker.h>

#include "feature.h"

class MqttClient : public Feature {
   private:
    AsyncMqttClient mqttClient;

    void onWifiConnect(const WiFiEventStationModeGotIP& event) {
        mqttClient.connect();
    }

void onMqttDisconnect(AsyncMqttClientDisconnectReason reason) {
  Serial.println("Disconnected from MQTT.");

  if (WiFi.isConnected()) {
    mqttReconnectTimer.once(2, connectToMqtt);
  }
}

    void onWifiDisconnect(const WiFiEventStationModeDisconnected& event) {
        Serial.println("Disconnected from Wi-Fi.");
        mqttReconnectTimer.detach();  // ensure we don't reconnect to MQTT while reconnecting to Wi-Fi
        wifiReconnectTimer.once(2, connectToWifi);
    }

    void connectToMqtt() {
        Serial.println("Connecting to MQTT...");
    }

   public:
    MqttClient(const String posix) {
    }

    void setup() {
        mqttClient.onConnect(onMqttConnect);
        mqttClient.onDisconnect(onMqttDisconnect);
        mqttClient.setServer(MQTT_HOST, MQTT_PORT);
        mqttClient.connect();

        WiFi.onStationModeGotIP(onWifiConnect);
        wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);
        connectToWifi();
    }

    void loop() {
    }
};
