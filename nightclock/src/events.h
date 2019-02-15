#ifndef __EVENTS_H
#define __EVENTS_H

#include <Arduino.h>
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

// this is so tiny I didn't want to bother extracting into a .cpp with build config for multiple files
Events::Events(unsigned int eventNum) {
  functions = new VoidFunction[eventNum];
  ttls = new unsigned long[eventNum];
  eventNum = eventNum;
}

Events::~Events() {
  delete[] functions;
  delete[] ttls;
}

void Events::add(VoidFunction function, unsigned long ttl) {
  for (int i = 0; i < eventNum; i++) {
    if (functions[i]) continue;

    functions[i] = function;
    ttls[i] = ttl;
    return;
  }
  // FIXME: error
}

void Events::run(unsigned long now) {
  for (int i = 0; i < eventNum; i++) {
    if (functions[i]) continue;
    if (ttls[i] > now) continue;

    functions[i]();
    functions[i] = NULL;
  }
}

#endif
