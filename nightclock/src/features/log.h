#ifndef __FEATURES_LOG_H
#define __FEATURES_LOG_H

#if defined(DEVHTTP)
    #define DEVHTTPBASEURL BASEURL "/" DEVHTTP "/"
    #include <Arduino.h>
    #include <ESP8266HTTPClient.h>
    #include <ESP8266WiFi.h>
    #include <WiFiClient.h>

    class Log {
        WiFiClient tcpClient;
        HTTPClient httpClient;
        char buf[256];
        char *logline;

        public:
        Log() {
            strcpy(buf, DEVHTTPBASEURL);
            logline = buf + sizeof(DEVHTTPBASEURL);
        }

        void log(char *format, va_list args) {
            sprintf(logline, format, args);
            httpClient.begin(tcpClient, buf);
            httpClient.GET();

        }
    };

#elif defined(DEV)
    #define LOG(format) Serial.print(format);
    #define LOGP(format, args...) Serial.printf(format, args);
#else
    #define LOG(format)
    #define LOGP(format, args...)
#endif

#endif
