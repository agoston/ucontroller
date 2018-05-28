const uint16_t REMOTE_PORT = 1080;
const uint16_t AUTO_PORT = 1080;

typedef struct __attribute__((packed)) {
        int16_t joyX = 0;
        int16_t joyY = 0;
        uint8_t joySW = 0;
} Joystick;
