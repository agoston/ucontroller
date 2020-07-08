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

    bool operator<(const ScheduledTime &foo) const { return month < foo.month || day < foo.day || hours < foo.hours || minutes < foo.minutes; }
};

class Schedule : public Feature {
   private:
    NtpClient *ntpClient;
    ScheduledTime *root = NULL;

   public:
    Schedule(NtpClient *ntpClient) : ntpClient(ntpClient){};
    Schedule(const Schedule *const other) {operator=(other);}
    virtual ~Schedule() { cleanup(); }

    void cleanup() {
        for (ScheduledTime *t = root; t != NULL;) {
            ScheduledTime *n = t->next;
            delete t;
            t = n;
        }
        root = NULL;
    }

    Schedule *operator=(const Schedule *const other) {
        if (this == other) return this;

        cleanup();
        root = other->root;
        return this;
    }

    void setup() {
    }

    void schedule(uint8_t month, uint8_t day, uint8_t hours, uint8_t mins, void (*callback)(void *), void *arg) {
        ScheduledTime *scheduledTime = new ScheduledTime(month, day, hours, mins, callback, arg);

        // pfff this is some ugly ass ad-hoc sorted linked list
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

            // found today; is it time?
            if (hours < root->hours && minutes < root->minutes) return;

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