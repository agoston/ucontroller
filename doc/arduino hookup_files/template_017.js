(function(){
Template.__checkName("build_esp8266_gateway");
Template["build_esp8266_gateway"] = new Template("Template.build_esp8266_gateway", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Building a WiFi Gateway using ESP8266</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n		", HTML.Raw('<img src="/gateway/wifia.png" style="width:15%;float:right;padding-left:20px">'), "\n\n		", HTML.Raw('<p>It\'s finally possible to build a WIFI enabled gateway running directly on an ESP8266 module. The porting has been done by <a href="http://forum.mysensors.org/user/yveaux">Yveaux</a> and has been documented <a href="http://forum.mysensors.org/topic/1870">here</a>.</p>'), "\n\n		\n		", HTML.Raw('<p>The easiest build option is probably to use the NodeMcu Devkit v.10 (by the NodeMcu Team). Schematics and layout can be found <a href="https://github.com/nodemcu/nodemcu-devkit-v1.0">here</a>. \n		This board has the ESP-12 module mounted. Just connect the radio, install gateway software and you\'re good to go.\n		</p>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.Raw('<div class="col-md-4">\n				<a href="/gateway/connect_nodemcu.png" data-lightbox="image-finding" title="NodeMCU v1.0 Module"><img src="/gateway/connect_nodemcu.png" class="img-responsive"></a>\n			</div>'), "\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("NodeMCU"), HTML.TH("Radio"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD({
    style: "color:black"
  }, "Black")), "\n					", HTML.TR(HTML.TD("3V3"), HTML.TD("VCC"), HTML.TD({
    style: "color:red"
  }, "Red")), "\n					", HTML.TR(HTML.TD("D2"), HTML.TD("CE"), HTML.TD({
    style: "color:orange"
  }, "Orange")), "\n					", HTML.TR(HTML.TD("D8"), HTML.TD("CSN/CS"), HTML.TD({
    style: "color:yellow"
  }, "Yellow")), "\n					", HTML.TR(HTML.TD("D5"), HTML.TD("SCK"), HTML.TD({
    style: "color:green"
  }, "Green")), "\n					", HTML.TR(HTML.TD("D7"), HTML.TD("MOSI"), HTML.TD({
    style: "color:blue"
  }, "Blue")), "\n					", HTML.TR(HTML.TD("D6"), HTML.TD("MISO"), HTML.TD({
    style: "color:violet"
  }, "Violet")), "\n				"), "\n				Note: The IRQ is currently not used by the MySensors library so it can be left un-connected.\n			"), "\n\n			", HTML.Raw('<div class="col-md-4">\n				<a href="/radio/nrfTop.png" data-lightbox="image-finding" title="The output pins of the Radio"><img src="/radio/nrfTop.png" class="img-responsive"></a><br>\n			</div>'), "\n		"), "\n\n		", HTML.Raw("<h2>Installing Gateway Software</h2>"), "\n		\n		", HTML.Raw("<p>The standard ESP8266 Gateway sketch can be used without modification (except for SSID &amp; password).</p>"), "\n\n		", HTML.Raw("<p>Setting things up:</p>"), "\n		", HTML.Raw('<ul>\n			<li>Install Arduino IDE 1.6.5+</li>\n			<li>Add support for ESP8266 to Arduino, see <a href="https://github.com/esp8266/Arduino">Installing with Boards Manager</a></li>\n			<li><a href="https://github.com/mysensors/Arduino/archive/master.zip"> <i class="fa fa-download"></i> Download</a> the latest MySensors library code from master branch and install the library in your Arduino IDE. Detailed instruction <a href="/about/arduino#installing-the-sensor-libraries">here</a>.</li> \n			<li>Edit libraries/MySensors/MyConfig.h if you use a different data-rate, channel or base radio ID.</li>\n			<li>Restart the Arduino IDE.</li>\n			<li>Install CP2102 drivers from <a href="https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx"><i class="fa fa-download"></i> here</a>.</li>\n			<li>Connect NodeMCU board.</li>\n		</ul>'), "\n\n\n		Compiling and uploading the gateway sketch:\n		", HTML.Raw("<ul>\n			<li>Open the WiFi gateway in the Arduino IDE (File -> Sketchbook -> Libraries -> MySensors -> Esp8266Gateway</li>\n			<li>Save it, to allow editing</li>\n			<li>Enter your SSID and WiFi password in the 'ssid' and 'pass' variables</li>\n			<li>Select the ESP8266 board you're targeting in Tools -> Board. Use an ESP12 module, which is a 'NodeMCU 1.0 (ESP 12E module)' board target.</li>\n			<li>Verify your sketch. It should compile without errors.</li>\n			<li>Now upload the sketch. This NodeMCU board normally can be flashed automatically and shouldn't need bootload/reset buttons to be pressed. If you see error, try changing baudrate from from 9600 to 57600. Still problems? Hold flash and press reset. Start upload in IDE while keeping flash-button pressed until upload starts.</li>\n			<li>Open the serial console and watch the board connecting to your WiFi network.</li>\n			<li>Note the IP address assigned to it. Optionally, enable a static ip in your DHCP server if you prefer to keep same ip at the next startup.</li>\n			<li>Any application capable of communicating with the regular MySensors Ethernet gateway \n			should be able to communicate with the ESP Gateway</li>\n			<li>Enjoy!</li>\n		</ul>"), "\n\n		", HTML.Raw("<p>To verify things you can connect a telnet session (e.g. putty) to the IP address mentioned in the serial output, port 5003 and send some serial commands!</p>"), "\n		", HTML.Raw('<a href="/gateway/wifi.jpg" data-lightbox="image-finding" title="Final result">\n		<img src="/gateway/wifi.jpg" class="img-responsive" style="padding-left:20px;width:40%;float:right"></a>'), "\n\n		", HTML.Raw("<p><strong>Optional:</strong> If you want to use the on-board red LED (GPIO16) to blink when radio activity/error takes place, then change the following:</p>"), "\n\nMyConfig.h\n", HTML.Raw('<pre><code class="cpp">#define WITH_LEDS_BLINKING</code></pre>'), "\n\nEsp8266Gateway.ino\n", HTML.Raw('<pre><code class="cpp">#ifdef WITH_LEDS_BLINKING\n#define RADIO_ERROR_LED_PIN 16  // Error led pin\n#define RADIO_RX_LED_PIN    16  // Receive led pin\n#define RADIO_TX_LED_PIN    16  // the PCB, on board LED\n#endif</code></pre>'), "\n\n\n\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_esp8266")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		"), "\n	");
}));

}).call(this);
