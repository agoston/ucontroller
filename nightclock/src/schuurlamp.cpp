#define DEV

#include <Arduino.h>

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>

#include <features/log.h>
#include <features/mesh.h>
#include <features/ntpclient.h>
#include <features/relay.h>

#include "secret.h"

// relay
Relay relay(D1);
// sync time from NTP
NtpClient ntpClient;
// send/receive UDP packets
Mesh mesh(HEAD_PORT);

Feature *features[]{&relay, &ntpClient, &mesh};

WiFiClient tcpClient;
HTTPClient httpClient;


//----------------------------------------------------------------------------------------------------------------
void setup() {
#ifdef DEV
  delay(50);
  Serial.begin(9600);
#endif

  // since there is a single radio in esp8266, when connecting to an remote AP,
  // it will change the wifi channel for the clients of this AP too. clients of
  // this AP can follow that, but e.g. tcp connections might get interrupted.
  WiFi.mode(WIFI_STA);

  // upstream internet access for NTP sync
  WiFi.begin(NTP_SSID, NTP_PW);

  LOGP("VCC: %d", ESP.getVcc())

  for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->setup();
}

void fetchSchedule(uint8_t month, uint8_t day, uint8_t hours, uint8_t mins) {
  if (httpClient.begin(tcpClient, BASEURL "/schuurlamp/schedule")) {
    // start connection and send HTTP header
    int httpCode = httpClient.GET();

    // httpCode will be negative on error
    if (httpCode >= 200 && httpCode < 400) {
      while (httpClient.connected()) {
        // format: 0110 08:44 - 16:51
        String line = tcpClient.readStringUntil('\n');
        if (line.isEmpty()) break;
        if (line.length() != 18) continue;

        String date = line.substring(0, 4);
        if (date == "****" || (date.substring(0, 2).toInt() == month && date.substring(2, 4).toInt() == day)) {
          // this line applies today, schedule
          uint8_t beginHour = line.substring(5,7).toInt();
          uint8_t beginMin = line.substring(8,10).toInt();
          uint8_t endHour = line.substring(13,15).toInt();
          uint8_t endMin = line.substring(16,18).toInt();
          
          os_timer_setfn(&onTimer, &trampolineOn, &relay);
          os_timer_arm(&onTimer, 1000, false);

          os_timer_setfn(&offTimer, &trampolineOn, &relay);
          os_timer_arm(&offTimer, 1000, false);


        }
      }
    } else {
      Serial.printf("[HTTP] GET... failed, error: %s\n", httpClient.errorToString(httpCode).c_str());
    }

    httpClient.end();
  }
}

void trampolineOn(void *relay) {
  ((Relay*)relay)->on();
}

void trampolineOff(void *relay) {
  ((Relay*)relay)->off();
}

//----------------------------------------------------------------------------------------------------------------
void loop() {
  for (uint16_t i = 0; i < sizeof(features) / sizeof(features[0]); i++) features[i]->loop();


  // can't use deep sleep here, as it would turn off the modem, which defeats
  // the purpose of a udp server. however, the esp-arduino lib does an actual
  // yield() on delay(), so consumption is kept to a minimum.
  delay(250);
  
  // ESP.deepSleep() wow
}
