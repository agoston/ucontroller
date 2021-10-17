// #define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <features/display.h>
#include <features/log.h>
#include <features/ntpclient.h>
// #include <features/humidity.h>
// #include <features/voc.h>
// #include <features/mqtt.h>
#include <features/infrared.h>
#include <features/ledstring.h>

#include "secret.h"

// led string on full power can draw over 1A, spare that poor USB 
#ifdef DEV
#define NUMLEDS 3
#else
#define NUMLEDS 60
#endif

// #define BUTTON_ON_D4
// #include <features/button.h>

// RX/TX: also usable, GPIO3/GPIO1; used in Serial.print()/read() & flashing
// D0 is clean
// D1: I2C SCL pin
// D2: I2C SDA pin
// D3+D4 is pullup
// D5+D6+D7 is clean (=serial, but normally unused)
// D8 is pulldown
// A0 is clean (analog, but also works digital)

// CCS811 + HDC1080; these use I2C, so pins are D1+D2, hardwired!
// "The ESP8266 doens’t have hardware I2C pins, but it can be implemented in software. So you can use any GPIOs as I2C. Usually, the following GPIOs are used as I2C pins: GPIO5: SCL, GPIO4: SDA"
// VOC voc;
// Humidity humidity;

// uses the RX pin, hardwired; uses DMA to send data. when enabled, can't send serial to esp, only esp can send debug log via serial.
LedString ledstring(NUMLEDS);

// infrared needs pullup
Infrared infrared(D3);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the buttin lights it up.
// Button button(D4);
Display display(D5, D6);

// sync time from NTP
NtpClient ntpClient;
// TODO: MQTT client
// MqttClient mqttClient(MQTT_HOST, MQTT_PORT);

Feature *features[]{&display, &ntpClient, &infrared, &ledstring};

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
RgbColor color = RgbColor(128, 0, 0);
uint8_t power = 128;

void setColor(RgbColor newColor) {
    color = newColor;
    ledstring.setAll(color.Dim(power));
}

void setPower(int16_t delta) {
    int16_t newPower = (int16_t)power + delta;
    if (newPower < 0) newPower = 0;
    if (newPower > 255) newPower = 255;
    power = (uint8_t) newPower;
    setColor(color);
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->loop();

    // unsigned long now = millis();

    uint8_t hours = ntpClient.hour();
    uint8_t mins = ntpClient.minute();
    // uint8_t secs = ntpClient.second();

    // LOGP("Time: %d:%d:%d\n", hours, mins, secs);

    if (infrared.buttonPressed()) {
        switch (infrared.lastButtonPress()) {
            case Remote::ON: LOG("ON\n"); setColor(color); break;
            case Remote::OFF: LOG("OFF\n"); ledstring.setAll(RgbColor(0, 0, 0)); break;
            case Remote::DIM_DOWN: LOG("DIM_DOWN\n"); setPower(-16); break;
            case Remote::DIM_UP: LOG("DIM_UP\n"); setPower(16); break;

            case Remote::RED: setColor(RgbColor(255, 0, 0)); break;  
            case Remote::GREEN: setColor(RgbColor(0, 255, 0)); break;   
            case Remote::BLUE: setColor(RgbColor(0, 0, 255)); break;    
            case Remote::WHITE: setColor(RgbColor(255, 255, 255)); break;

            case Remote::RED_ORANGE: setColor(RgbColor(255, 69, 0)); break; 
            case Remote::GREEN_SEAGREEN: setColor(RgbColor(170, 240, 209)); break;  
            case Remote::BLUE_PURPLE: setColor(RgbColor(106, 90, 205)); break;  
            
            case Remote::ORANGE: setColor(RgbColor(255, 150, 0)); break;    
            case Remote::SEAGREEN: setColor(RgbColor(127, 255, 212)); break;
            case Remote::PURPLE: setColor(RgbColor(255, 0, 255)); break;    

            case Remote::ORANGE_YELLOW: setColor(RgbColor(255, 191, 0)); break; 
            case Remote::SEAGREEN_CYAN: setColor(RgbColor(64, 224, 208)); break;    
            case Remote::PURPLE_PINK: setColor(RgbColor(223, 115, 255)); break;

            case Remote::YELLOW: setColor(RgbColor(255, 255, 0)); break;    
            case Remote::CYAN: setColor(RgbColor(0, 255, 255)); break;      
            case Remote::PINK: setColor(RgbColor(255, 105, 180)); break;    
        }
    }

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
