#ifndef __FEATURES_EVENTS_H
#define __FEATURES_EVENTS_H

#include <Arduino.h>
#include "log.h"
typedef void (*VoidFunction)();

class Events {
 private:
  VoidFunction *functions;
  unsigned long *ttls;
  unsigned int eventNum;

 public:
  Events(unsigned int eventNum);
  ~Events();

  void add(VoidFunction function, unsigned long ttl);
  void run(unsigned long now);
};

#endif
