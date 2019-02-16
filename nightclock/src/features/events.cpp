#include "events.h"

Events::Events(unsigned int eventNum) {
  this->functions = new VoidFunction[eventNum]();
  this->ttls = new unsigned long[eventNum];
  this->eventNum = eventNum;
}

Events::~Events() {
  delete[] functions;
  delete[] ttls;
}

void Events::add(VoidFunction function, unsigned long ttl) {
  for (unsigned int i = 0; i < eventNum; i++) {
    if (functions[i]) continue;

    functions[i] = function;
    ttls[i] = ttl;
    return;
  }
  LOG("ERR Events::add(): full");
}

void Events::run(unsigned long now) {
  for (unsigned int i = 0; i < eventNum; i++) {
    if (!functions[i]) continue;
    if (ttls[i] > now) continue;

    functions[i]();
    functions[i] = NULL;
  }
}
