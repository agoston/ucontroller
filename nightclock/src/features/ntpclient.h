#ifndef __FEATURES_NTP_H
#define __FEATURES_NTP_H

#include "feature.h"

// crappy library pollutes global variables into default namespace via 'using namspace ezt' :(
#define EZTIME_EZT_NAMESPACE
#include <ezTime.h>

class NtpClient : public Feature {
    private:
    Timezone timezone;

    public:
    NtpClient() {}

    void setup() {
        // LOG("ntpclient setup\n")

        // see https://github.com/ropg/ezTime; avoids an extra network lookup
        // timezone.Location("Europe/Amsterdam");
        timezone.setPosix("CET-1CEST,M3.4.0/2,M10.4.0/3");
        ezt::setServer("0.europe.pool.ntp.org");
    }

    void loop() {
        // LOG("ntpclient loop\n")
        // NTP client event handler heartbeat.
        // this can take up 1500ms if there's an NTP update necessary (and it times out)
        ezt::events();
    }

    uint8_t hour() {return timezone.hour();} 
    uint8_t minute() {return timezone.minute();} 
    uint8_t second() {return timezone.second();} 
};

#endif
