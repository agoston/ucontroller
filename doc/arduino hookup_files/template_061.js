(function(){
Template.__checkName("download");
Template["download"] = new Template("Template.download", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "col-md-12"
  }, "\n		", HTML.Raw("<h1>MySensors Library</h1>"), "\n		", HTML.DIV({
    "class": "relative well"
  }, "\n\n		", Spacebars.include(view.lookupTemplate("share")), "\n\n\n		", HTML.Raw('<div class="bcontainer">\n			<div class="bballoon">\n				<div><span>D</span></div>\n				<div><span>O</span></div>\n				<div><span>W</span></div>\n				<div><span>N</span></div>\n				<div><span>L</span></div>\n				<div><span>O</span></div>\n				<div><span>A</span></div>\n				<div><span>D</span></div>\n			</div>\n		</div>'), "\n\n\n		", HTML.Raw("<p>Here you can find the revision history and downloads for the MySensors Arduino library.</p>"), "\n		", HTML.Raw('<p>We keep the source code on <a href="https://github.com/mysensors/">github</a> publicly available.</p>'), "\n		", HTML.Raw('<p>If you need help getting started, have a look at the <a href="/about/arduino">using Arduino</a> section here on MySensors.</p>'), "\n\n		", HTML.Raw("<h2>1.5 - Latest Release</h2>"), "\n\n		", HTML.Raw("<p>This is the latest stable release. Normally the best version to use for your project. It should be fully backward compatible with your old (1.4) sensors, controller and gateway.</p>"), "\n\n		", HTML.Raw('<p>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/archive/master.zip"> <i class="fa fa-download"></i> Download </a>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/tree/master"> <i class="fa fa-github"></i> GitHub </a>\n			<a class="btn btn-sm btn-primary" href="/download/sensor_api_15"> <i class="fa fa-cogs"></i> API </a>\n			<a class="btn btn-sm btn-primary" href="/download/serial_api_15"> <i class="fa fa-exchange"></i> Serial Protocol </a>\n		</p>'), "\n\n		", HTML.Raw('<ul>\n			<li><a href="http://forum.mysensors.org/topic/1021">Message signing</a> using ATSHA204 hardware or software driver</li>\n			<li>Multiple radio transport driver architecture</li>\n			<li>RFM69 radio support</li>\n			<li>Support for multiple hardware layers (ATMega328 default implementation)</li>\n			<li>New sensors: RGB, RGBW, Color, Multimeter, HVAC, Sprinkler, Water leak, Sound, Vibration, Moisture</li>\n			<li>New variables: Voltage, Current, RGB RGBW, Id, Unit prefix, Setpoint, Level</li>\n			<li>Allow indication LEDs (tx,rx,err) on sensors</li>\n			<li>Sensor presentation description message</li>\n			<li>OTA updates using on-board flash (and DualOptiboot bootloader)</li>\n			<li>Allow SOFTSPI configuration from MyConfig.h</li>\n			<li>Bugfixes!</li>\n		</ul>'), "\n\n\n\n		", HTML.Raw("<h2>Development</h2>"), "\n\n		", HTML.Raw('<p><a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/archive/development.zip"> <i class="fa fa-download"></i> Download </a> <a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/tree/development"> <i class="fa fa-github"></i> GitHub </a></p>'), "\n\n		", HTML.Raw("<p>The latest development branch contains our work-in-progress and should only be used if you like living on the edge and is prepared to update sensor/gateway code frequently. </p>"), "\n\n\n		", HTML.Raw("<h2>1.4</h2>"), "\n		", HTML.Raw('<p>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/archive/1.4.2.zip"> <i class="fa fa-download"></i> Download </a>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/tree/1.4.2"> <i class="fa fa-github"></i> GitHub </a>\n			<a class="btn btn-sm btn-primary" href="/download/sensor_api_14"> <i class="fa fa-cogs"></i> API </a>\n			<a class="btn btn-sm btn-primary" href="/download/serial_api_14"> <i class="fa fa-exchange"></i> Serial Protocol </a>\n		</p>'), "\n\n\n		", HTML.Raw("<ul>\n			<li>Improved communication reliability (now uses hardware acks and resend functionality).</li>\n			<li>Simplified sketches (only one include needed).</li>\n			<li>Most common sleep scenarios build in.</li>\n			<li>Helper for permanently storing values in the Arduinos EEPROM.</li>\n			<li>Acknowledgments can now be requested from gateway and other sensors in network.</li>\n			<li>Smaller footprint.</li>\n			<li>The message structure has been adopted to work better on RPi platform.</li>\n			<li>Binary payloads supported and used for integers between sensors. </li>\n			<li>Configuration message (only metric setting in it today).</li>\n			<li>Allow static parent (no dynamic lookups)</li>\n			<li>Callbacks for incoming messages and time. No synchronous waiting methods any more -&gt; no missed messages.</li>\n			<li>Lots of new examples: Knock, gas, ir, dust, display &amp; time, uv, rfid.</li>\n		</ul>"), "\n\n\n\n\n		", HTML.Raw("<h2>1.3</h2>"), "\n		", HTML.Raw('<p>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/archive/1.3.zip"> <i class="fa fa-download"></i> Download </a>\n			<a class="btn btn-sm btn-primary" href="https://github.com/mysensors/Arduino/tree/1.3"> <i class="fa fa-github"></i> GitHub </a>\n			<a class="btn btn-sm btn-primary" href="/download/sensor_api_13"> <i class="fa fa-cogs"></i> API </a>\n			<a class="btn btn-sm btn-primary" href="/download/serial_api_13"> <i class="fa fa-exchange"></i> Serial Protocol </a>\n		</p>'), "\n\n		", HTML.Raw('<ul>\n			<li>New software ack mechanism. HW acks was very unreliable and generated trash messages.</li>\n			<li>Messages is now directed directly to children (fixed previous bug in routing algorithm).</li>\n			<li>Sensors now only has one pipe open (self) and gw/repeater nodes two (broadcast, self). Previously it also listened to relay node. This means no more overhearing of messages directed for other nodes.</li>\n			<li>Higher radio transmit speed 1->2mbps.</li>\n			<li>Energy Pulse meter example added.</li>\n			<li>Energy Water meter example added.</li>\n			<li>Fixed bug when sending battery level from sensor.</li>\n			<li>LAST_UPDATE is set on node-device when any variable update is coming in for children.</li>\n			<li>Fixed truncation of debug messages.</li>\n			<li>Updated humidity sensor to fetch unit settings from vera.</li>\n			<li>Fixed bug with "SendNodeCommand?" from vera side.</li>\n			<li>New servo-actuator example.</li>\n			<li>Store relay-node in EEPROM.</li>\n			<li>More debug info is printed to serial monitor in sensors (can be turned off).</li>\n			<li>Nodes that receive messages from vera don\'t need to busy wait. New API methods. See new example code in RelayActuator sketch.</li>\n			<li>Increased transfer speed (1MBPS) between radios.</li>\n			<li>Sent time to sensors uses vera configured timezone.</li>\n			<li>Radio protocol updated. from/to/version/crc/binary added in message header. This change requires sensors to update their (1.2) library version.</li>\n			<li>Variables in vera only gets updated if changed.</li>\n			<li>Increased baud rate between vera gateway and vera.</li>\n			<li>Message can be sent between sensors without being processed by vera.</li>\n			<li>Vera library is now a subclass of RF24.</li>\n			<li>Remove gateway specific code from vera library. New class hierarchy RF24->Node->Relay->Gateway.</li>\n			<li>Preserve memory by placing static strings in PROGMEM.</li>\n			<li>Inclusion mode. Can be started from the Arduino Vera plugin or by using digital input pin on vera gateway (inclusion button). All found devices during inclusion time will be created at once (no multi vera reload/restart cycle needed anymore).</li>\n			<li>The ArduinoGateway support blinking LEDs for RX/TX/ERR and a special blink when inclusion mode is activated.</li>\n			<li>Dimmer support.</li>\n			<li>Lastupdate-variable is set in vera for all changes.</li>\n			<li>A new device is created in vera for each physical arduino/radio This device will hold info about node, such as library version, battery info and relay information.</li>\n			<li>Support for message relaying. All nodes can act as relay. This functionality can be used for communicating with sensors far away. An relay node forwards messages between sensors and vera gateway. Multiple relays (message hops) is also supported. See RelayActuator sketch for an example how to create an relay node.</li>\n			<li>Relay node for a sensor (could be GW) is dynamically located each time a sensor is losing connection. This information is also sent to vera and can be seen in radio node device.</li>\n			<li>Unit system can be configured in vera plugin (metric/imperial). Sensors can fetch this setting (isMetricSystem()) and send in data in the correct unit.</li>\n			</ul>'), "\n		", HTML.Raw("<h2>1.2</h2>"), "\n		", HTML.Raw('<p><a class="btn btn-sm btn-primary" href="/code/mysensors1.2.zip"> <i class="fa fa-download"></i> Download </a></p>'), "\n		", HTML.Raw('<ul>\n			<li>Added possibility to request time from vera.</li>\n			<li>Support for 5 custom variables (can be stored in any sensor device). Note that chixxis variable container is still not supported. But the functionality is similar.</li>\n			<li>Sensors reports their library version to Vera.</li>\n			<li>New example sketch showing time and variable functionality.</li>\n			<li>SendCommand action added in vera plugin which makes it possible to send data to sensors from scenes (advanced-section) or via luup-calls.</li>\n			<li>Auto-id added. A sensor can now request id from vera at first start. The id gets stored in the sensors EEPROM. All example sketches now uses auto-id functionality. You can still use static ids if that is preferred.</li>\n			<li>Automatically sets LAST_TRIP and BATTERY_DATE.</li>\n			<li>Fixed "No Implementation" message when pressing Armed/Bypassed on security sensors.</li>\n			<li>Cleaned up plugin code</li>\n		</ul>'), "\n\n		", HTML.Raw("<h2>1.0</h2>"), "\n		", HTML.Raw("<p>Never released</p>"), "\n\n\n		"), "\n\n\n	"), "\n\n	", Spacebars.include(view.lookupTemplate("disqus")) ];
}));

}).call(this);
