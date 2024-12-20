// #define DEV

#include <Arduino.h>
#include <features/log.h>
#include <features/mqtt.h>

#define MQTT_TOPIC "robi/fan/pwm"

// RX/TX: also usable, GPIO3/GPIO1; used in Serial.print()/read() & flashing
// D0 is clean
// D1: I2C SCL pin
// D2: I2C SDA pin
// D3+D4 is pullup
// D5+D6+D7 is clean (=serial, but normally unused)
// D8 is pulldown
// A0 is clean (analog, but also works digital)
// any pin is PWM (pwm is soft on esp8266)

// arctic p14 pwm pst has static pressure of 2.2-2.4 mmh2o until cca. 40 m^3/h, with a sharp breakdown after that

MqttClient mqttClient(MQTT_HOST, MQTT_PORT);

Feature* features[]{&mqttClient};

void mqttHandler(char* topic, char* payload, AsyncMqttClientMessageProperties properties, size_t len, size_t index, size_t total) {
    LOGP("MQTT: %s %s\n", topic, payload)
    if (strcmp(topic, MQTT_TOPIC)) return;

    int mr, mg, mb, mpower;
    sscanf(payload, "%d %d %d %d", &mr, &mg, &mb, &mpower);

    LOGP("Color: %d %d %d %d\n", mr, mg, mb, mpower)

    // power = mpower;
    // setColor(RgbColor(mr, mg, mb));
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
    WiFi.begin(WIFI_SSID, WIFI_PW);
    WiFi.setAutoReconnect(true);

    mqttClient.subscribe(MQTT_TOPIC);
    mqttClient.messageHander(mqttHandler);

    LOG("Waiting for wireless\n")

    // dhcp starts now in background (unless static IP)
    while (!WiFi.isConnected()) {
        delay(50);
    }

    LOGP("Got IP: %s\n", WiFi.localIP().toString().c_str())

    for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->setup();

    // standard PWM for case fans
    // esp8266 default softPWM is 1KHz.
    analogWriteFreq(25000);
}

//----------------------------------------------------------------------------------------------------------------
uint8 fan_pwm = 0;

void loop() {
    // esp8266 softPWM has range 0-255.
    fan_pwm += 1;
    analogWrite(D1, fan_pwm);
    analogWrite(LED_BUILTIN, 255-fan_pwm);
    delay(100);
}
