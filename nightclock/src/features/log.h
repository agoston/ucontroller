#ifndef __FEATURES_LOG_H
#define __FEATURES_LOG_H

#if defined(DEV)
#define LOG(format) Serial.print(format);
#define LOGP(format, args...) Serial.printf(format, args);
#else
#define LOG(format)
#define LOGP(format, args...)
#endif

#endif
