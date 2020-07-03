#ifndef __FEATURES_SCHEDULE_H
#define __FEATURES_SCHEDULE_H

#include <Arduino.h>
#include "feature.h"
#include "ntpclient.h"
#include "log.h"

class Schedule : public Feature {
    private:
    NtpClient *ntpClient;
    ScheduledTime *root = NULL;

    public:
    Schedule(NtpClient *ntpClient) : ntpClient(ntpClient) {};
    ~Schedule() {
        for (ScheduledTime *t = root; t != NULL; ) {
            ScheduledTime *n = t->next;
            delete t;
            t = n;
        }
    }

    void setup() {
    }

    void schedule(uint8_t month, uint8_t day, uint8_t hours, uint8_t mins, void (*callback)(void*), void *arg) {
        ScheduledTime *scheduledTime = new ScheduledTime(month, day, hours, mins, callback, arg);
        
        // pfff this is some ugly ass ad-hoc sorted linked list
        ScheduledTime *next = root, *act = NULL;
        do {
            if (!next) {   // insert to end
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
        uint8_t month = ntpClient->month();
        uint8_t day = ntpClient->day();
        uint8_t hours = ntpClient->hour();
        uint8_t minutes = ntpClient->minute();

        // root is smallest
        if (month < root->month || day < root->day || hours < root->hours || minutes < root->minutes) return;

        root->callback(root->arg);

        ScheduledTime *t = root;
        root = root->next;
        delete t;
    }
};

class ScheduledTime {
public:
    ScheduledTime *next = NULL;
    uint8_t month;
    uint8_t day;
    uint8_t hours;
    uint8_t minutes;
    void (*callback)(void*);
    void *arg;

    ScheduledTime(uint8_t month, uint8_t day, uint8_t hours, uint8_t minnutes, void (*callback)(void*), void *arg) : month(month), day(day), hours(hours), minutes(minutes), callback(callback), arg(arg) {};

    bool operator<(const ScheduledTime &foo) const { return month < foo.month || day < foo.day || hours < foo.hours || minutes < foo.minutes; }
};

#endif
