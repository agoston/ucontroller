// #define DEV

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <features/display.h>
#include <features/log.h>
#include <features/ntpclient.h>
#include <features/humidity.h>
#include <features/voc.h>
#include <features/infrared.h>
#include <features/ledstring.h>
#include <features/mqtt.h>

#include <map>

#include "secret.h"

// the 1m led string on full power can draw 18W on 5V, spare that poor USB
#ifdef DEV
#define NUMLEDS 3
#else
#define NUMLEDS 60
#endif

#define MQTT_COLOR_TOPIC "ESP-peti-color"

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

// TODO: remoteschedule/mqtt - based blinking (or add speaker? haha) to mark bathtime, morning alarm, etc...

// CCS811 + HDC1080; these use I2C, so pins are D1 (=SCL) +D2 (=SDA), hardwired!
// "The ESP8266 doens’t have hardware I2C pins, but it can be implemented in software. So you can use any GPIOs as I2C. Usually, the following GPIOs are used as I2C pins: GPIO5: SCL, GPIO4: SDA"
VOC voc;
Humidity humidity;

// uses the RX pin, hardwired; uses DMA to send data. when enabled, can't send serial to esp, only esp can send debug log via serial.
LedString ledstring(NUMLEDS);

// infrared needs pullup
Infrared infrared(D3);
// D4 has an integrated 3.3V 12Kohm pullup on the d1 lite. it also is connected to the buildin led, so pressing the buttin lights it up.
Button button(D4);
Display display(D5, D6);

NtpClient ntpClient(TZ_AMSTERDAM);
MqttClient mqttClient(MQTT_HOST, MQTT_PORT);

Feature* features[]{&display, &ntpClient, &infrared, &ledstring, &mqttClient, &button, &voc, &humidity};

uint loopCounter = 0;

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
    power = (uint8_t)newPower;
    setColor(color);
}

void mqttHandler(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
    LOGP("MQTT: %s %s\n", topic, payload)
    if (strcmp(topic, MQTT_COLOR_TOPIC)) return;

    int mr, mg, mb, mpower;
    sscanf(payload, "%d %d %d %d", &mr, &mg, &mb, &mpower);

    LOGP("Color: %d %d %d %d\n", mr, mg, mb, mpower)

    power = mpower;
    setColor(RgbColor(mr, mg, mb));
}

std::map<Remote, RgbColor> remoteColors = {
    {RED, RgbColor(255, 0, 0)},
    {GREEN, RgbColor(0, 255, 0)},
    {BLUE, RgbColor(0, 0, 255)},
    {WHITE, RgbColor(255, 255, 255)},
    {RED_ORANGE, RgbColor(255, 69, 0)},
    {GREEN_SEAGREEN, RgbColor(170, 240, 209)},
    {BLUE_PURPLE, RgbColor(106, 90, 205)},
    {ORANGE, RgbColor(255, 150, 0)},
    {SEAGREEN, RgbColor(127, 255, 212)},
    {PURPLE, RgbColor(255, 0, 255)},
    {ORANGE_YELLOW, RgbColor(255, 191, 0)},
    {SEAGREEN_CYAN, RgbColor(64, 224, 208)},
    {PURPLE_PINK, RgbColor(223, 115, 255)},
    {YELLOW, RgbColor(255, 255, 0)},
    {CYAN, RgbColor(0, 255, 255)},
    {PINK, RgbColor(255, 105, 180)}};

void processButton(Remote button) {
    switch (button) {
        case Remote::ON: LOG("ON\n"); setColor(color); break;
        case Remote::OFF: LOG("OFF\n"); ledstring.setAll(RgbColor(0, 0, 0)); break;
        case Remote::DIM_DOWN: LOG("DIM_DOWN\n"); setPower(-16); break;
        case Remote::DIM_UP: LOG("DIM_UP\n"); setPower(16); break;
        case Remote::FLASH: if (color.R < 248) setColor(RgbColor(color.R+8, color.G, color.B)); break;
        case Remote::STROBE: if (color.G < 248) setColor(RgbColor(color.R, color.G+8, color.B)); break;
        case Remote::FADE: if (color.B < 248) setColor(RgbColor(color.R, color.G, color.B+8)); break;
        case Remote::SMOOTH: setColor(RgbColor(0, 0, 0)); break;
        default:
            auto color = remoteColors.find(button);
            if (color != remoteColors.end()) setColor(color->second);
    }
}

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
    WiFi.begin(NTP_SSID, NTP_PW);
    WiFi.setAutoReconnect(true);

    mqttClient.subscribe(MQTT_COLOR_TOPIC);
    mqttClient.messageHander(mqttHandler);

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

    if (infrared.buttonPressed()) processButton(infrared.lastButtonPress());

    if (!(loopCounter & 15)) {
        ntpClient.refresh();
        uint8_t hours = ntpClient.hour();
        uint8_t mins = ntpClient.minute();

        // this takes cca. 3ms per segment, roughly 15ms overall with overhead
        // if (button.buttonPressedOrTtl(now)) {
        //     display.temp(98.76);
        // } else {
        display.brightness(hours, mins);
        display.time(hours, mins);
        // }
    }

    // can't use deep sleep here, as it would turn off the modem, which defeats the purpose of a udp server.
    // however, the esp-arduino lib does an actual yield() on delay(), so consumption is kept to a minimum.
    delay(100);
    loopCounter++;
}
