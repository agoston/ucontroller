#ifndef __FEATURES_SCHEDULE_H
#define __FEATURES_SCHEDULE_H

#include <Arduino.h>

#include "feature.h"
#include "log.h"
#include "ntpclient.h"

class ScheduledTime {
   public:
    ScheduledTime *next = NULL;
    uint8_t month;
    uint8_t day;
    uint8_t hours;
    uint8_t minutes;
    void (*callback)(void *);
    void *arg;

    ScheduledTime(uint8_t month, uint8_t day, uint8_t hours, uint8_t minutes, void (*callback)(void *), void *arg) : month(month), day(day), hours(hours), minutes(minutes), callback(callback), arg(arg){};

    bool operator<(const ScheduledTime &foo) const {
        if (month != foo.month) return month < foo.month;
        if (day != foo.day) return day < foo.day;
        if (hours != foo.hours) return hours < foo.hours;
        if (minutes != foo.minutes) return minutes < foo.minutes;
        return false;
    }
};

/* FIXME: add support for embedded schedule (for lamp on/off), e.g.
mydata data[] = { { "Archimedes", 2.12 }, 
                  { "Vitruvius", 4.49 } } ;
*/
class Schedule : public Feature {
   private:
    NtpClient *ntpClient;
    ScheduledTime *root = NULL;

   public:
    Schedule(NtpClient *ntpClient) : ntpClient(ntpClient){};
    Schedule(const Schedule *const other) : ntpClient(other->ntpClient){};
    virtual ~Schedule() { cleanup(); }

    void cleanup() {
        for (ScheduledTime *t = root; t;) {
            ScheduledTime *n = t->next;
            delete t;
            t = n;
        }
        root = NULL;
    }

    void stealFrom(Schedule *other) {
        if (this == other) return;

        cleanup();
        root = other->root;
        other->root = NULL;
    }

    int size() {
        int ret = 0;
        for (ScheduledTime *t = root; t; t = t->next) ret++;
        return ret;
    }

    void setup() {
    }

    void schedule(uint8_t month, uint8_t day, uint8_t hours, uint8_t mins, void (*callback)(void *), void *arg) {
        ScheduledTime *scheduledTime = new ScheduledTime(month, day, hours, mins, callback, arg);

        // pfff this is some ugly ass ad-hoc one-way sorted linked list
        ScheduledTime *next = root, *act = NULL;
        do {
            if (!next) {  // insert to end
                if (!act) {
                    root = scheduledTime;
                } else {
                    act->next = scheduledTime;
                }
                return;
            }

            if (*next < *scheduledTime) {
                act = next;
                next = next->next;
                continue;
            }

            // this is the place to insert
            scheduledTime->next = next;
            if (!act) {
                root = scheduledTime;
            } else {
                act->next = scheduledTime;
            }
            return;
        } while (true);
    }

    void loop() {
        if (!root) return;

        uint8_t month = ntpClient->month();
        uint8_t day = ntpClient->day();
        uint8_t hours = ntpClient->hour();
        uint8_t minutes = ntpClient->minute();

        // find today (leaving past entries in, so that even if schedule server falls out, this keeps working for up to a year)
        for (ScheduledTime *s = root, **pNext = &root; s; pNext = &(s->next), s = s->next) {
            if (month != s->month || day != s->day) continue;

            // found today; run through the daily program in order (so that when powercycling the unit, it would assume its expected state)
            if (hours < s->hours || (hours == s->hours && minutes < s->minutes)) return;

            // match! run
            s->callback(s->arg);

            // delete from linked list, so it won't run again
            *pNext = s->next;
            delete s;
            return;
        }
    }
};

#endif
