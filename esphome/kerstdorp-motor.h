#include "esphome.h"

class MotorOutput : public Component, public FloatOutput {
 public:
  void setup() override {
    // Initialize motor driver here
    // For example: pinMode(GPIO_NUM_X, OUTPUT);
  }

  void write_state(float state) override {
    // state is a float between 0.0 and 1.0
    int level = int(state * 100);
    ESP_LOGI("motor_output", "Motor set to %d%%", level);

    // Control your motor driver here using ESP-IDF code or direct GPIO
    // For example:
    // ledcWrite(channel, level);  // for PWM
    // or use i2c, spi, etc.

    // Placeholder code:
    // gpio_set_level(MY_MOTOR_GPIO, level > 0);
  }
};