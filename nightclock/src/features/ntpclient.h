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

    // europe/amsterdam: "CET-1CEST,M3.5.0/2,M10.5.0/3"
    NtpClient(const String posix) {
        // see https://github.com/ropg/ezTime; avoids an extra network lookup if we use posix string of a location instead of location name
        // timezone.Location("Europe/Amsterdam");
        timezone.setPosix(posix);
    }

    void setup() {
        ezt::setServer("0.europe.pool.ntp.org");
    }

    void loop() {
        // LOG("ntpclient loop\n")
        // NTP client event handler heartbeat.
        // this can take up 1500ms if there's an NTP update necessary (and it times out)
        ezt::events();
    }

    uint8_t month() { return timezone.month(); }
    uint8_t day() { return timezone.day(); }

    uint8_t hour() { return timezone.hour(); }
    uint8_t minute() { return timezone.minute(); }
    uint8_t second() { return timezone.second(); }
};

#endif
