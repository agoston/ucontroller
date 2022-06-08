#pragma once

#include "feature.h"

// crappy library pollutes global variables into default namespace via 'using namspace ezt' :(
#define EZTIME_EZT_NAMESPACE
#include <ezTime.h>

#define TZ_AMSTERDAM "CET-1CEST,M3.5.0/2,M10.5.0/3"

class NtpClient : public Feature {
   private:
    Timezone timezone;
    tmElements_t tm;

   public:
    // UTC time
    NtpClient() : timezone(true) {}

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
        // NTP client event handler heartbeat.
        // this can take up 1500ms if there's an NTP update necessary (and it times out)
        ezt::events();
    }

    // this is separated so that the month()/day()/... can be called individually without overhead. is relatively cheap.
    void refresh() {
        time_t now = ezt::now();
        ezt::breakTime(now, tm);
    }

    uint8_t month() { return tm.Month; }
    uint8_t day() { return tm.Day; }
    uint8_t hour() { return tm.Hour; }
    uint8_t minute() { return tm.Minute; }
    uint8_t second() { return tm.Second; }
};
