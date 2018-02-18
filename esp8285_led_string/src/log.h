#ifdef DEV
#define LOG(format) Serial.println(format);
#define LOGP(format, args...) snprintf(LOG_BUF,sizeof(LOG_BUF),format,args);Serial.println(LOG_BUF);
char LOG_BUF[80];
#else
#define LOG(format)
#define LOGP(format, args...)
#endif
