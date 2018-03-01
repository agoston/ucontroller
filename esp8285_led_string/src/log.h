#ifndef __LOG_H
#define __LOG_H

#if defined(DEV)
#define LOG(format) Serial.println(format);
#define LOGP(format, args...) snprintf(LOG_BUF,sizeof(LOG_BUF),format,args);Serial.println(LOG_BUF);
char LOG_BUF[80];
#elif defined(DEVH)
#define LOG(format) Serial.println(format);
#define LOGP(format, args...) snprintf(LOG_BUF,sizeof(LOG_BUF),format,args);Serial.println(LOG_BUF);
extern char LOG_BUF[80];
#else
#define LOG(format)
#define LOGP(format, args...)
#endif

#endif
