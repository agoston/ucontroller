#ifndef __FEATURE_H
#define __FEATURE_H

#include "log.h"

// keep it simple
class Feature {
    public:
    virtual void setup() {};
    virtual void loop() {};
};

#endif
