const uint16_t REMOTE_PORT = 1080;
const uint16_t HEAD_PORT = 1080;

typedef struct __attribute__((packed)) {
  uint8_t from;
  uint8_t type;
  union {
    float temp;
  } payload;
} Packet;

#define R_HEAD 1
#define R_PETI 2
#define R_ROBI 3
#define R_LENA 4
