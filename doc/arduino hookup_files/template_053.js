(function(){
Template.__checkName("build_parking");
Template["build_parking"] = new Template("Template.build_parking", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Parking Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<img src="/distance/crash.png" title="Opps!" style="float:right;width:30%">'), "\n\n\n		", HTML.Raw("<p>Build your own cool parking sensor using a NeoPixel led ring and distance sensor.</p>"), "\n		", HTML.Raw("<p>The sensor can run standalone (without radio) or with radio allowing the sensor reporting the parking status to your controller. Useful for closing garage door when car has pulled in or keeping track of the teenager when you're not at home.</p>"), " \n		", HTML.Raw('<p>In the sketch you can configure at what distance to start measuring, when parking status should be sent and when "panic" mode should be triggered (flashing red).</p>'), "		\n  		", HTML.Raw("<p>NOTE: The led ring can be pretty power hungry and it is <strong>not</strong> recommended to feed it from your Arduino +5 output. So try power it directly from your +5V power source. You can also adjust the light level of the LEDs in the sketch to reduce power consumption.</p>"), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>A video showing the parking sensor in action.</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/ykfTKI7a-H4" frameborder="0" allowfullscreen=""></iframe>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a> if SEND_STATUS_TO_CONTROLLER has been enabled in sketch.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-6"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Distance Sensor"), HTML.TH("Led Ring"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC"), HTML.TD("+5V (not from Arduino)")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD(), HTML.TD("DI"), HTML.TD("4")), "\n\n					", HTML.TR(HTML.TD("TRIG"), HTML.TD(), HTML.TD("6")), "\n					", HTML.TR(HTML.TD("ECHO"), HTML.TD(), HTML.TD("5")), "\n\n				"), "\n				"), "\n				", HTML.Raw('<div class="col-md-6">\n					<a href="/distance/components.png" data-lightbox="image-finding" title="What you need"><img src="/distance/components.png"></a>\n\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:138368"),
      name: Spacebars.call("ParkingSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_parking")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n\n	");
}));

Template.__checkName("build_rain");
Template["build_rain"] = new Template("Template.build_rain", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Rain Gauge</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<a href="/water/tipping.png" data-lightbox="image-finding" title="DIY Tipping Bucket Sensor"><img src="/water/tipping.png" style="float:left;height:250px;padding-right:20px"></a>'), "\n			", HTML.Raw('<img src="/water/rainman.png" title="drop" style="float:right;height:250px">'), "\n\n\n		", HTML.Raw('<p>Here you will learn how to make your own wireless "tipping bucket" rain sensor. You can either print the 3D model yourself or MySensorize some cheap tipping bucket hardware found below.</p>'), "\n		", HTML.Raw('<p>The principle behind this is quite simple; When it rains a funnel collects water into two tiny "buckets". When one bucket is full it tips out the water and the second bucket starts to fill up. Each tip is registered and this data is transmitted to your controller.</p>'), "\n		", HTML.Raw('<p>By measuring the funnel opening and bucket size you can calculate the amount of rain that has fallen. Need help calculate your own funnel construction? Have a look <a href="http://www.wikihow.com/Build-a-Rain-Gauge">here</a>.</p>'), "\n		", HTML.Raw('<p>The DIY tipping bucket 3D model created by BulldogLowell can be found <a href="https://drive.google.com/folderview?id=0B3KGTJHUgpw1fkwtM3RreEF2QWg4eUdsUHdSQjl6UWx2Q3dPS19WSGdqd0pZQ3hhQk1TMkE&amp;usp=sharing">here</a>.</p>'), "\n		", HTML.Raw("<p>The example also contains some optional light, humidity and temperature sensors that can be removed if you want to keep it simple.</p>"), "  \n\n		", HTML.Raw('<p>Big thanks to <a href="http://forum.mysensors.org/user/bulldoglowell">BulldogLowell</a> and <a href="http://forum.mysensors.org/user/petewill">PeteWill</a> for creating and documenting this great project. You can read the background story <a href="http://forum.mysensors.org/topic/156">on the forum</a>.</p>'), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>A video showing how to setup your own rain gauge.</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/1eMfKQaLROo" frameborder="0" allowfullscreen=""></iframe>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n\n		", HTML.Raw('<a href="/water/RainGaugeWiring.png" data-lightbox="image-finding" title="Wiring"><img src="/water/RainGaugeWiring.png" class="img-responsive"></a>'), "\n\n		", HTML.Raw("<h4>Parts</h4>"), "\n		", HTML.Raw("<ul>\n		<li>Prototype Universal Printed Circuit Boards (PCB)</li>\n		<li>NRF24L01 Radio</li>\n		<li>Arduino (Pro Mini was used in the example video)</li>\n		<li>FTDI USB to TTL Serial Adapter (if using a Pro Mini)</li>\n		<li>Rain Gauge (Tipping bucket)</li>\n		<li>Capacitors (10uf and .1uf)</li>\n		<li>3.3v voltage regulator</li>\n		<li>Resistor (270 Ω)</li>\n		<li>Female Dupont Cables</li>\n		<li>Male Dupont Cables</li>\n		<li>Male Pin Header Connector Strip</li>\n		<li>Female Pin Header Connector Strip</li>\n		<li>LED</li>\n		<li>2 Pole 5mm Pitch PCB Mount Screw Terminal Block</li>\n		<li>22-24 gauge wire or similar (I used Cat5/Cat6 cable)</li>\n		<li>DHT-22 (optional) - humidity/temp sensor</li>\n		<li>BH1750 (optional) - light sensor</li>\n		</ul>"), "\n\n		", HTML.Raw("<p>You'll find most of the parts in the buying guide below.</p>"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:133577"),
      name: Spacebars.call("RainGauge")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("rain")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n\n	");
}));

Template.__checkName("build_irrigation");
Template["build_irrigation"] = new Template("Template.build_irrigation", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Irrigation Controller</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<a href="/irrigation/irrigation.png" data-lightbox="image-finding" title="Home made irrigation controller"><img src="/irrigation/irrigation.png" style="float:right;height:200px;padding-left:20px"></a>'), "\n\n		", HTML.Raw('<p>Tired of manually turning on the garden irrigation? Or want to smart-up that old "automatic" system which runs both on rainy and sunny days. \n		</p>'), "\n		", HTML.Raw("<p>Now you can build your own MySensors enabled irrigation controller.  Wirelessly connect it to your smart home automation controller where you create the rules when it actually should run or not. Why not use a rain sensor to smart things up even more? \n		</p>"), "\n		", HTML.Raw('<p>Big thanks to <a href="http://forum.mysensors.org/user/bulldoglowell">BulldogLowell</a> and <a href="http://forum.mysensors.org/user/petewill">PeteWill</a> for creating this amazing project. You can read the background story <a href="http://forum.mysensors.org/topic/153/">on the forum</a>.</p>'), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>A video showing how to build your own irrigation controller.</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/l4GPRTsuHkI" frameborder="0" allowfullscreen=""></iframe>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n\n		", HTML.Raw('<a href="/irrigation/wiring.png" data-lightbox="image-finding" title="Wiring"><img src="/irrigation/wiring.png" class="img-responsive"></a>'), "\n		", HTML.Raw("<h4>Parts</h4>"), "\n		", HTML.Raw("<ul>\n		<li>Relays (8 channel)</li>\n		<li>Female Pin Header Connector Strip</li>\n		<li>Prototype Universal Printed Circuit Boards (PCB)</li>\n		<li>NRF24L01 Radio</li>\n		<li>Arduino (I used a Pro Mini)</li>\n		<li>FTDI USB to TTL Serial Adapter</li>\n		<li>Capacitors (10uf and .1uf)</li>\n		<li>3.3v voltage regulator</li>\n		<li>Resistors (270 &amp; 10K)</li>\n		<li>Female Dupont Cables</li>\n		<li>1602 LCD (with I2C Interface)</li>\n		<li>LED</li>\n		<li>Push button</li>\n		<li>Shift Register (SN74HC595)</li>\n		<li>2 Pole 5mm Pitch PCB Mount Screw Terminal Block</li>\n		<li>3 Pole 5mm Pitch PCB Mount Screw Terminal Block</li>\n		<li>22-24 gauge wire or similar (I used Cat5/Cat6 cable)</li>\n		<li>18 gauge wire (for relay)</li>\n		<li>Irrigation Power Supply (24-Volt/750 mA Transformer)</li>\n		</ul>"), "\n		", HTML.Raw("<p>You'll find most of the parts in the buying guide below.</p>"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:121698"),
      name: Spacebars.call("IrrigationController")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("irrigation")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n\n	");
}));

Template.__checkName("build_scene_controller");
Template["build_scene_controller"] = new Template("Template.build_scene_controller", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Touch Display Scene Controller</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/scene/scenecontroller.png" data-lightbox="image-finding" title="MySensors Scene Controller"><img src="/scene/scenecontroller.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>Sometimes you might want to control more advanced scenarios in your home automation project. This is when a scene controller comes in handy.</p>"), "\n		", HTML.Raw("<p>In this example we've used a touch screen to display the scene launch options. The buttons can be customized in the sketch code to your preference. With a little hacking you could even change button functions depending on the time of the day or create a full fledged menu system.</p>"), "\n		", HTML.Raw("<p>If you prefer to keep it simple you can skip the touch display and just attach a few buttons to your arduino to trigger the scene commands.</p>"), "\n		", HTML.Raw("<p>The provided example also displays the time in the top right corner. If you need more space for your buttons you can remove this part if you want.</p>"), "\n		", HTML.Raw("<p>The touch screen used here did not like to share SPI with the NRF24L01 radio. We had to move the radio to a separate software driven SPI interface. The wire instructions below show where to connect things. But before compiling and uploading the software you need to enable the <strong>SOFTSPI</strong>-define in <strong>MySensors/MyConfig.h.</strong></p>"), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>Here is a little video showing the scene controller in action:</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/lyTrtuxdA7k" frameborder="0" allowfullscreen=""></iframe>'), "\n\n\n		", HTML.Raw('<p>For a more simple scene controller using keypad, have a look at <a href="http://forum.mysensors.org/user/petewill">petewills</a> project <a href="http://forum.mysensors.org/topic/2001"><span class="glyphicon glyphicon-chevron-right"></span>here</a></p>'), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/KMGj5Bi7vL0" frameborder="0" allowfullscreen=""></iframe>'), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n\n		This sensor mostly consists of the ATMega 2650, shield and display which is easy to snap together. The only thing left you need to connect is the radio. We choose to solder the wires onto the display shield but you might be able to temporarily connect the cables using dupont wires while testing. The 3v3 output of the ATMega2650 is a bit noisy so we choose to use a step down regulator from 5V->3v3 to smooth things out a bit (see buying guide below).\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("AtMega 2650 Arduino"), HTML.TH("Step Down Module/Radio")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("5V"), HTML.TD("Step Down module VCC")), "\n					", HTML.TR(HTML.TD("14"), HTML.TD("SCK")), "\n					", HTML.TR(HTML.TD("15"), HTML.TD("MOSI")), "\n					", HTML.TR(HTML.TD("16"), HTML.TD("MISO")), "\n					", HTML.TR(HTML.TD("17"), HTML.TD("CE")), "\n					", HTML.TR(HTML.TD("18"), HTML.TD("CSN")), "\n				"), "\n				"), "\n				", HTML.Raw('<div class="col-md-6">\n				<a href="/scene/parts.png" data-lightbox="image-finding" title="The parts"><img src="/scene/parts.png" class="img-responsive"></a>\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:54953"),
      name: Spacebars.call("TouchDisplaySceneControllerSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_scene")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		"), "\n\n\n	");
}));

Template.__checkName("build_display");
Template["build_display"] = new Template("Template.build_display", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Real Time Clock Module, LCD Display and Controller Time</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/rtc/rtc.png" data-lightbox="image-finding" title="DS3231 RTC Module"><img src="/rtc/rtc.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>This example shows how you can fetch current time from the controller and put it to a battery backed up Real Time Clock (RTC) module attached to your Arduino.</p>"), "\n		", HTML.Raw("<p>If your sensor later loses connection with controller or power cycles it can pick up time from the local RTC. The module uses a CR2032 battery for time backup which should last for about 3-4 years.</p>"), "\n		", HTML.Raw("<p>We've also attached a LCD Display showing time and temperature [coming from the internal temperature sensor in the RTC module].</p>"), "\n		", HTML.Raw("<p>No sensor data is being sent to the controller in this example.</p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("RTC Module"), HTML.TH("LCD Display"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("SDA"), HTML.TD("SDA"), HTML.TD("A4")), "\n					", HTML.TR(HTML.TD("SCL"), HTML.TD("SCL"), HTML.TD("A5")), "\n				"), "\n				"), "\n				", HTML.Raw('<div class="col-md-6">\n				<a href="/rtc/timelcd.jpg" data-lightbox="image-finding" title="RTC In Action"><img src="/rtc/timelcd.jpg" class="img-responsive"></a>\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:48371"),
      name: Spacebars.call("RealTimeClockDisplaySensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_rtc")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		", HTML.Raw("<h2>Datasheets</h2>"), "\n		", HTML.Raw('<a target="_new" href="/rtc/DS3231.pdf">DS3231</a>'), HTML.Raw("<br>"), "\n		", HTML.Raw('<a target="_new" href="/rtc/DS3232.pdf">DS3232</a>'), "\n\n		"), "\n\n\n	");
}));

Template.__checkName("build_uv");
Template["build_uv"] = new Template("Template.build_uv", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>UV Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/uv/uv.png" data-lightbox="image-finding" title="UV Sensor"><img src="/uv/uv.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>What do you do with a sensor detecting level of ultra violet light? Well...</p>"), "\n		", HTML.Raw("<p>You could build yourself a warning system to protect against sunburn and skin cancer! This sensor detects 280-390nm light most effectively. This is categorized as part of the UVB (burning rays) spectrum and most of the UVA (tanning rays) spectrum.</p>"), "\n		", HTML.Raw("<p>The provided example sketch calculates and send in UV index value to your controller. </p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-3"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("UV", HTML.CharRef({
    html: "&nbsp;",
    str: " "
  }), "Sensor"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("Out"), HTML.TD("A0")), "\n				"), "\n				"), "\n				", HTML.Raw('<div class="col-md-9">\n				<a href="/uv/skinchart.jpg" data-lightbox="image-finding" title="UV Index"><img src="/uv/skinchart.jpg" class="img-responsive"></a>\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47540"),
      name: Spacebars.call("UVSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_uv")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		", HTML.Raw("<h2>Datasheets</h2>"), "\n\n		", HTML.Raw('<a target="_new" href="/uv/UVM30A.pdf">UVM-30A (chinese)</a>'), "\n\n		"), "\n\n\n	");
}));

Template.__checkName("build_knock");
Template["build_knock"] = new Template("Template.build_knock", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Secret Knock Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/knock/knock.gif" data-lightbox="image-finding" title="Grandma fix"><img src="/knock/knock.gif" style="float:right;height:150px;padding-left:20px"></a>'), "\n\n		", HTML.Raw("<p>The secret knock sensor registers your knocks and allows you to open a door or do some other action when the correct knock sequence has been entered.</p>"), "\n		", HTML.Raw("<p>Knock sequence is stored in the EEPROM of the sensor and is remembered even after a power failure</p>"), "\n		", HTML.Raw("<p>You can record a new sequence by attaching a button.</p>"), "\n\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>Here is a little video showing the full functionality:</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/MGHtju7iJ4Q" frameborder="0" allowfullscreen=""></iframe>'), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.Raw("<p>Most of the external parts is optional (except sound sensor). The LED (or speaker/piezo) indicates when recoding mode starts/ends and repeats the knock sequence after you've entered it.</p>"), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-12"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n\n					", HTML.TR(HTML.TH("Exterior"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("Pushbutton"), HTML.TD("Pin 0"), HTML.TD("Pushbutton for recording a new knock (from button on to to GND)")), "\n					", HTML.TR(HTML.TD("LED"), HTML.TD("Pin 1"), HTML.TD("(Optional) Status LED. Put a 510R resistor in series with LED to +5V.")), "\n					", HTML.TR(HTML.TD("Speaker"), HTML.TD("Pin 2"), HTML.TD("(Optional) Status speaker or piezo")), "\n					", HTML.TR(HTML.TD("Relay or Solenoid"), HTML.TD("Pin 4"), HTML.TD("(Optional) Attach the thing you want to control here")), "\n					", HTML.TR(HTML.TD("Sound sensor"), HTML.TD("Pin 5"), HTML.TD("Use digital out from sound sensor. Remember to tune sensitivity")), "\n				"), "\n				"), "\n				"), "\n\n				", HTML.Raw('<p>Lots of credit goes to the <a href="https://learn.adafruit.com/secret-knock-activated-drawer-lock/overview">adafruit guide</a>.</p>'), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47524"),
      name: Spacebars.call("SecretKnockSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_knock")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_ir");
Template["build_ir"] = new Template("Template.build_ir", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Infrared Sender and Receiver</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/light/remote.jpeg" data-lightbox="image-finding" title="Grandma fix"><img src="/light/remote.jpeg" style="float:right;height:150px;padding-left:20px"></a>'), "\n		", HTML.Raw('<a href="/light/ir.png" data-lightbox="image-finding" title="IR Sender Receiver"><img src="/light/ir.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>Want to control your TV or stereo? Or pickup the IR-remote signals and send the commands back to your controller?</p>"), "\n		", HTML.Raw("<p>IR receiver and sender modules is very easy to use together with your Arduino. The example below shows both how to pick up IR signals and send them. You will have to modify the example to control your own equipment.</p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-md-3"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Ir", HTML.CharRef({
    html: "&nbsp;",
    str: " "
  }), "Sender"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("In"), HTML.TD("3")), "\n				"), "\n				"), "\n				", HTML.DIV({
    "class": "col-md-3"
  }, "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Ir", HTML.CharRef({
    html: "&nbsp;",
    str: " "
  }), "Receiver"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("Out"), HTML.TD("8")), "\n				"), "\n				"), "\n				"), "\n\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47531"),
      name: Spacebars.call("IrSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_ir")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_dust");
Template["build_dust"] = new Template("Template.build_dust", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Dust Level Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/gas/dusty.jpg" data-lightbox="image-finding" title="Time to clean?"><img src="/gas/dusty.jpg" style="float:right;height:150px;padding-left:20px"></a>'), "\n		", HTML.Raw('<a href="/gas/dust.jpg" data-lightbox="image-finding" title="Dust sensor with accesories"><img src="/gas/dust.jpg" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>Do need help from your home automation system to hint you when it's time to clean the house? With this sensor you could get a gentle reminder when dust levels rises over a predefined level. Or send an SMS to the cleaning company!</p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n				", HTML.Raw("<p>Now connect the dust sensor!</p>"), "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Dust sensor"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("A"), HTML.TD("A0")), "\n				"), "\n\n				"), "\n				", HTML.Raw('<div class="col-md-8">\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47537"),
      name: Spacebars.call("DustSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_dust")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_gas");
Template["build_gas"] = new Template("Template.build_gas", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Gas Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n		", HTML.Raw('<a href="/gas/gasmask.png" data-lightbox="image-finding" title="Who farted?"><img src="/gas/gasmask.png" style="float:right;height:150px;padding-left:20px"></a>'), "\n		", HTML.Raw('<a href="/gas/mq2.png" data-lightbox="image-finding" title="MQ2 gas sensor"><img src="/gas/mq2.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n\n		", HTML.Raw("<p>There are quite a few different gas sensors you can use together with MySensors. Detect alcohol, methane (fart-sensor?), fire etc. We list a few in the buying guide below.</p>"), "\n		", HTML.Raw("<p>The example provided here uses the MQ2 sensor to detect air quality.</p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n				", HTML.Raw("<p>Now connect the sensor!</p>"), "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("A-Out"), HTML.TD("A0")), "\n				"), "\n\n				"), "\n				", HTML.Raw('<div class="col-md-8">\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47538"),
      name: Spacebars.call("AirQualitySensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("gas")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_dimmer");
Template["build_dimmer"] = new Template("Template.build_dimmer", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Dimmable LED Actuator</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<!-- a href="/dimmable/closeup.png" data-lightbox="image-finding" title="Home made LED actuator"><img src="/dimmable/closeup.png" style="float:right;height:200px;padding-left:20px"></a -->'), "\n		", HTML.Raw('<a href="/dimmable/dimmable.jpg" data-lightbox="image-finding" title="Home made LED actuator"><img src="/dimmable/dimmable.jpg" style="float:right;height:200px;padding-left:20px"></a>'), "\n\n		", HTML.Raw("<p>Create your own dimmable LED strip! And adjust the dim level from your controller over the air.</p>"), "\n		", HTML.Raw("<p>The picture on the right shows how you wrap it up in a box of your selection.</p>"), "\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.Raw('<a href="/dimmable/DimmableLED.png" data-lightbox="image-finding" title="Wiring"><img src="/dimmable/DimmableLED.png" class="img-responsive"></a>'), "\n\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47527"),
      name: Spacebars.call("DimmableLEDActuator")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Dimmable LED With Rotary Encoder</h2>"), "\n\n		", HTML.Raw('<p>\n		<a href="/dimmable/rotary.jpg" data-lightbox="image-finding" title="Rotary Encoder"><img src="/dimmable/rotary.jpg" style="float:right;height:200px;padding-left:20px"></a>\n\n\n		If you want to attach a pushable rotary encoder and control the dim level locally at the node you can use the following example. </p>'), "\n		", HTML.Raw("<p>The wiring of the encoder is described in the sketch. </p>"), "	\n\n		", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:106978"),
      name: Spacebars.call("DimmableLightWithRotaryEncoderButton"),
      noHeader: Spacebars.call("true")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_dimming")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n\n	");
}));

Template.__checkName("build_rfid");
Template["build_rfid"] = new Template("Template.build_rfid", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>RFID Lock Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<!-- img src="/binary/switch.png"  title="Star Man" style="width:100px;float:right;"/ -->'), "\n		", HTML.Raw('<a href="/rfid/rfid.jpg" data-lightbox="image-finding" title="RFID reader with accesories"><img src="/rfid/rfid.jpg" style="float:left;height:150px;padding-right:20px"></a>'), "\n		", HTML.Raw("<p>Small RFID readers can be placed almost anywhere today. Behind a wall or door to give access by unlocking door when the right tag comes along.</p>"), "\n		", HTML.Raw("<p>Also be aware that many smartphones has an RFID send function today which can be used with your RFID reader.</p>"), "\n		", HTML.Raw("<p>With the provided example you can program which tags should unloock (enable) the attached relay. To find out the unique ID of your tag just run the example while looking at serial monitor. Hold tag in front of reader and your identifier should pop up. Copy this and add it to the validKeys array in the program. Then re-compile sketch to enable your new access keys.</p>"), "\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n\n			", HTML.DIV({
    "class": "col-md-6"
  }, "\n				", HTML.Raw("<p>Now connect the RFID module!</p>"), "\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("RFID Reader"), HTML.TH("Arduino")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("+5V")), "\n					", HTML.TR(HTML.TD("SCL"), HTML.TD("A5")), "\n					", HTML.TR(HTML.TD("SDA"), HTML.TD("A4")), "\n				"), "\n\n				", HTML.Raw("<p>The optional relay can be attached to Digital Pin 4</p>"), "\n\n				"), "\n				", HTML.Raw('<div class="col-md-6">\n				</div>'), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47541"),
      name: Spacebars.call("RFIDLockSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_rfid")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_binary");
Template["build_binary"] = new Template("Template.build_binary", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Door, Window and Push-button Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<img src="/binary/switch.png" title="Star Man" style="width:100px;float:right;">'), "\n		", HTML.Raw('<a href="/binary/door.png" data-lightbox="image-finding" title="Reed switch"><img src="/binary/door.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n		", HTML.Raw("<p>This is a simple but very useful example sketch for sensing binary things; like open/closed doors or the state of a wall switch.</p>"), "\n		", HTML.Raw("<p>The Arduino Pro Mini board has 13 independent digital input pins that can be used to sense the open/closed state of something. </p>"), "\n		", HTML.Raw("<p>By enabling the internal pull-up resistor (like we've done in this example) you don't need an external pull-up resistor. Just connect the push-button or reed switch between GND and one of the 13 independent digital inputs.</p>"), "\n		", HTML.Raw("<p>The sketch also takes advantage of the Debounce-library to filter out false triggers.  	</p>"), "\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.Raw('<div class="col-md-6">\n								<a href="/binary/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/binary/APM_D3.png" class="img-responsive"></a>\n				</div>'), "\n			", HTML.DIV({
    "class": "col-md-6"
  }, "\n\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("Switch"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("Switch"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n				"), "\n\n				", HTML.Raw("<p>Then connect your push-button or reed switch between the GND pin and one of the digital pins (3 in our example).</p>"), "\n					"), "\n				"), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47515"),
      name: Spacebars.call("BinarySwitchSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying Guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_binary")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_distance");
Template["build_distance"] = new Template("Template.build_distance", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Distance Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<img src="/distance/sketchDist.png" title="Distance Man" style="float:right;">'), "\n			", HTML.Raw('<a href="/distance/dist.jpg" data-lightbox="image-finding" title="HC-SR04 "><img src="/distance/dist.jpg" style="float:left;height:150px;padding-right:20px"></a>'), "\n			", HTML.Raw("<p>The ultrasonic distance sensor module (HC-SR04) can measure distances from 2 centimeters up to 5 meters (if you're lucky). </p>"), "\n			", HTML.Raw("<p>You could, for example, use it to check the water level in a tank or as a parking sensor in your garage. </p>"), "\n			", HTML.Raw("<p>It works by sending out short ultrasonic sound pulses, which are inaudible to humans, and waits for the pulses to return to its microphone. The HC-SR04 then calculates the distance by measuring the round-trip time delay for each pulse.   </p>"), "\n			", HTML.Raw('<div class="clearfix"></div>'), "\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.Raw('<div class="row">\n				<div class="col-md-4">\n									<a href="/distance/hc.png" data-lightbox="image-finding" title="HC-SR04 Sketch"><img src="/distance/hc.png" class="img-responsive"></a>\n						</div>\n				<div class="col-md-4">\n									<a href="/distance/APM.png" data-lightbox="image-finding" title="Arduino"><img src="/distance/APM.png" class="img-responsive"></a>\n						</div>\n				<div class="col-md-4">\n\n\n						</div>\n					</div>'), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47517"),
      name: Spacebars.call("DistanceSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_distance")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n\n			", HTML.Raw('<a target="_new" href="/distance/HC-SR04.pdf">HC-SR04</a>'), "\n\n		"), "\n	");
}));

Template.__checkName("build_humidity");
Template["build_humidity"] = new Template("Template.build_humidity", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Humidity Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<img src="/humidity/drop.png" title="Humidity" style="height:100px;float:right;">'), "\n			", HTML.Raw('<a href="/humidity/dht11.png" data-lightbox="image-finding" title="DHT-11"><img src="/humidity/dht11.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n			", HTML.Raw("<p>The DHT humidity and temperature sensor comes in two variants with different levels of accuracy. </p>"), "\n			", HTML.TABLE({
    "class": "table table-curved"
  }, "\n			", HTML.TR(HTML.TH(), HTML.TH("DHT-11"), HTML.TH("DHT-22")), "\n			", HTML.TR(HTML.TH("Humidity range"), HTML.TD("20%-80%RH (", HTML.CharRef({
    html: "&plusmn;",
    str: "±"
  }), "5%RH)"), HTML.TD("0%-100%RH (", HTML.CharRef({
    html: "&plusmn;",
    str: "±"
  }), "2%RH)")), "\n			", HTML.TR(HTML.TH("Temperature range"), HTML.TD("0-50", HTML.CharRef({
    html: "&deg;",
    str: "°"
  }), "C (", HTML.CharRef({
    html: "&plusmn;",
    str: "±"
  }), "2", HTML.CharRef({
    html: "&deg;",
    str: "°"
  }), "C)"), HTML.TD("-40-80", HTML.CharRef({
    html: "&deg;",
    str: "°"
  }), "C (", HTML.CharRef({
    html: "&plusmn;",
    str: "±"
  }), "0.5", HTML.CharRef({
    html: "&deg;",
    str: "°"
  }), "C)")), "\n			", HTML.TR(HTML.TH("Sampling rate"), HTML.TD("1 time/sec"), HTML.TD("2 times/sec")), "\n			"), "\n			", HTML.Raw("<p>The sensor requires one Arduino digital input pin but the refresh is a bit slow (i.e. low sampling rate) however for most applications the sampling rate is sufficient.</p>"), "\n\n			", HTML.Raw('<div class="clearfix"></div>'), "\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									<a href="/humidity/humsketch.png" data-lightbox="image-finding" title="DHT-11"><img src="/humidity/humsketch.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4">\n									<a href="/humidity/APM.png" data-lightbox="image-finding" title="Arduino"><img src="/humidity/APM.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("-"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("+"), HTML.TD("VCC (3.3 - 5.5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("out (middle)"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n					"), "\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47533"),
      name: Spacebars.call("HumiditySensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_humidity")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n\n			", HTML.Raw('<a target="_new" href="/humidity/DHT11.pdf">DHT11 (chinese)</a>'), HTML.Raw("<br>"), "\n			", HTML.Raw('<a target="_new" href="/humidity/DHT22.pdf">DHT22</a>'), "\n		"), "\n	");
}));

Template.__checkName("build_light");
Template["build_light"] = new Template("Template.build_light", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Light Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n			", HTML.Raw('<div class="row">\n				<div class="col-sm-4">\n				<a href="/light/light.jpg" data-lightbox="image-finding" title="Simple light sensor (LM393)"><img src="/light/light.jpg" class="img-responsive"></a>\n				</div>\n				<div class="col-sm-8">\n					<img src="/light/sun.png" title="Mr light" style="height:100px;float:right;">\n\n					<p>The <strong>LM393</strong> is a simple photo-resistor light sensor that has both analog and digital outputs. The digital output has a trim potentiometer that can be used to set a trigger light level. </p>\n\n					<p>In the following example we will use the analog output to measure light level. If you are interested in reading the digital output, please refer to the <a href="/build/pulse">pulse sensor</a> example sketch.</p>\n				</div>\n			</div>'), "\n\n			", HTML.Raw('<div class="row">\n				<div class="col-sm-4">\n					<p><a href="/light/BH1750.jpg" data-lightbox="image-finding" title="BH1750"><img src="/light/BH1750.jpg" class="img-responsive"></a></p>\n				</div>\n				<div class="col-sm-8">\n					<p>We also provide an example sketch for the <strong>BH1750</strong> ambient light intensity sensor breakout board. It has a 16-bit A2D converter built-in that can directly output a digital signal. The output from the sensor is in Lux (Lx) and does not require advanced calculations in the sketch. The BH1750 communicates using I2C Protocol.</p>\n				</div>\n			</div>'), "\n\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.Raw("<h3>Connecting the LM393 Light Sensor</h3>"), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-2">\n									<a href="/light/lightsketch.png" data-lightbox="image-finding" title="Light sensor"><img src="/light/lightsketch.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4" style="padding-top:50px">\n									<a href="/light/APM.png" data-lightbox="image-finding" title="Arduino"><img src="/light/APM.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-6",
    style: "padding-top:50px"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (3.3-5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("AO (analog out)"), HTML.TD("Analog input 0 (A0)"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n					"), "\n					", HTML.Raw("<p>See LightSensor.ino sketch code below.</p>"), "\n				"), "\n					"), "\n\n\n			", HTML.Raw("<h3>Connecting the BH1750 Light Sensor</h3>"), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									 <a href="/light/BH1750.png" data-lightbox="image-finding" title="BH1750"><img src="/light/BH1750.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4">\n									<a href="/light/APM1750.png" data-lightbox="image-finding" title="Arduino"><img src="/light/APM1750.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (3.3 - 5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("ADDR"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("SCL"), HTML.TD("A5 (analog input)"), HTML.TD({
    style: "color:blue"
  }, "Marked blue")), "\n					", HTML.TR(HTML.TD("SDA"), HTML.TD("A4 (analog input)"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n					"), "\n\n					", HTML.Raw("<p>See the LightLuxSensor.ino sketch below</p>"), "\n\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47525"),
      name: Spacebars.call("LightSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47523"),
      name: Spacebars.call("LightLuxSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_light")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n			", HTML.Raw('<a target="_new" href="/light/bh1750.pdf">BH1750</a>'), HTML.Raw("<br>"), "\n		"), "\n	");
}));

Template.__checkName("build_motion");
Template["build_motion"] = new Template("Template.build_motion", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Motion Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n			", HTML.Raw('<div class="row">\n				<div class="col-md-4">\n\n				<a href="/motion/title.jpg" data-lightbox="image-finding" title="Motion detector (HC-SR501)"><img src="/motion/title.jpg" class="img-responsive"></a>\n				</div>\n				<div class="col-md-8">\n					<img src="/motion/thief.png" title="Unwanted person detector" style="height:200px;float:right;">\n\n					<p>The <strong>HC-SR501</strong> motion sensor has several nice features such as sensitivity adjustment and trigger delay. </p>\n\n					<p>It is very simple to connect the HC-SR501 to your Arduino however this sensor <strong>requires 5 VDC</strong> so you will need to use a step-up regulator if you are running the 3.3V version of the Arduino Pro Mini. </p>\n				</div>\n			</div>'), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw("<p>Here is a small video showing how to build a motion sensor:</p>"), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/2bc27dpof04" frameborder="0" allowfullscreen=""></iframe>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-4">\n									<a href="/motion/hcsr501.png" data-lightbox="image-finding" title="Motion sensor"><img src="/motion/hcsr501.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-3">\n									 <a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (5-20V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("OUT"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green;"
  }, "Marked green")), "\n					"), "\n\n					", HTML.Raw("<p>Trimpot Sx - Set sensitivity. </p>"), "\n					", HTML.Raw("<p>Trimpot Tx - Trigger length (5sec - 200sec)</p>"), "\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47529"),
      name: Spacebars.call("MotionSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_motion")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n			", HTML.Raw('<a target="_new" href="/motion/HCSR501.pdf">HC-SR501</a>'), HTML.Raw("<br>"), "\n\n\n		"), "\n	");
}));

Template.__checkName("build_pressure");
Template["build_pressure"] = new Template("Template.build_pressure", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Pressure Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<div class="row">\n			<div class="col-md-4">\n\n			<a href="/pressure/baro.jpg" data-lightbox="image-finding" title="BMP085 Pressure sensor"><img src="/pressure/baro.jpg" style="\n		width:220px"></a>\n			</div>\n			<div class="col-md-8">\n				<img src="/pressure/pressureman.png" title="De-pressed Man" style="height:150px;float:right;">\n\n				<p>The <strong>BMP085</strong> senses both pressure and temperature conditions. In the example sketch we\'ve also implemented a simple weather forecast algorithm that could be useful if you decide to build a weather station.</p>\n\n				<p>This sensor has a very low power consumption (5μA in standard mode) and uses the I2C interface when communicating with the Arduino. 	</p>\n			</div>\n		</div>'), "\n\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-4">\n									<a href="/pressure/connect.png" data-lightbox="image-finding" title="Connecting pressure sensor"><img src="/pressure/connect.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-3">\n									 <a href="/light/APM1750.png" data-lightbox="image-finding" title="Arduino"><img src="/light/APM1750.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("3V3 or +5V"), HTML.TD("3.3V or 5V"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("SCL"), HTML.TD("A5 (analog input)"), HTML.TD({
    style: "color:blue"
  }, "Marked blue")), "\n					", HTML.TR(HTML.TD("SDA"), HTML.TD("A4 (analog input)"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n					"), "\n					", HTML.Raw("<p>Select 3.3V or 5V depending upon your Arduino model's output voltage. </p>"), "\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47536"),
      name: Spacebars.call("PressureSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_pressure")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n			", HTML.Raw('<a target="_new" href="/pressure/BMP085.pdf">BMP085</a>'), HTML.Raw("<br>"), "\n\n\n		"), "\n	");
}));

Template.__checkName("build_pulse_power");
Template["build_pulse_power"] = new Template("Template.build_pulse_power", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Power Meter Pulse Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n				", HTML.Raw('<a href="/light/light.jpg" data-lightbox="image-finding" title="Simple light sensor (LM393)"><img src="/light/light.jpg" style="width:150px;float:left;padding-right:20px"></a>'), "\n				", HTML.Raw('<a href="/pulse/meter.png" data-lightbox="image-finding" title="House meter example"><img src="/pulse/meter.png" style="\n			width:220px;float:right"></a>'), "\n			", HTML.Raw("<p>This sensor counts LED pulses from your house meter and converts it into Watts and accumulated KWh.</p>"), "\n			", HTML.Raw("<p>Locate the little LED on your meeter and mount the light sensor over it to register the power-consumption rate blinks.</p>"), "\n			", HTML.Raw("<p>There are a few parameters that need to be tuned for each power meter's pulses/KWh (usually says XXX imp/KWh somewhere on your meter). Set the <strong>PULSE_FACTOR</strong> in the example sketch to pulses/KWh rating on your meter. </p>"), "\n			", HTML.Raw("<p>You can also set frequency that your sensor will report the power consumption by updating <strong>SEND_FREQUENCY</strong>. The default is 3 times per minute (every 20 seconds).</p>"), "\n\n			", HTML.Raw("<p>The sensor has two modes of operation:</p>"), "\n\n			", HTML.Raw("<p><strong>SLEEP_MODE = true</strong></p>"), "\n			", HTML.Raw("<p>Use this mode if you power the sensor with a battery. In this mode the sensor will sleep most of the time and only report KWh. Unfortunately the sensor cannot report the current consumption in Watts because the sensor can not track time while sleeping; the elapsed time between two blinks is required to calculate the current consumption in Watts.</p>"), "\n\n			", HTML.Raw("<p><strong>SLEEP_MODE = false</strong></p>"), "\n\n			", HTML.Raw("<p>In this mode the sensor will not sleep and will report the current consumption in Watts and cumulative KWh to the gateway. This mode requires constant power so you will need to connect the sensor to an electrical outlet.</p>"), "\n\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									<a href="/water/doao.png" data-lightbox="image-finding" title="LM393 Light sensor"><img src="/water/doao.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4">\n									 <a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (3.3 - 5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("DO (digital out)"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green;"
  }, "Marked green")), "\n					"), "\n						"), "\n						", HTML.Raw("<p>Tune the sensitivity/trigger level by adjusting the trim potentiometer on the sensor board. If you plan to use a TSL250R instead of an LM393, refer to the data sheet below for the pin connections.</p>"), "\n					"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47519"),
      name: Spacebars.call("EnergyMeterPulseSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_pulse_power")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n			", HTML.Raw('<a target="_new" href="/pulse/tsl250r-e30.pdf">tsl250r</a>'), HTML.Raw("<br>"), "\n		"), "\n	");
}));

Template.__checkName("build_pulse_water");
Template["build_pulse_water"] = new Template("Template.build_pulse_water", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Water Meter Pulse Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n\n			", HTML.Raw('<a href="/pulse/track.png" data-lightbox="image-finding" title="TCRT5000 IR Barrier Line Track sensor"><img src="/pulse/track.png" style="width:150px;float:left;padding-right:20px"></a>'), "\n\n			", HTML.Raw('<a href="/pulse/wmeter.png" data-lightbox="image-finding" title="House water example"><img src="/pulse/wmeter.png" style="\n		width:220px;float:right"></a>'), "\n\n			", HTML.Raw("<p>In some cases, newer water meters are equipped with a pulse output. However if you have an older power meter without a pulse output, then you might be able to use one of the options below to sense your water consumption. </p>"), "\n\n			", HTML.Raw('<p><ol>\n			<li> Use the <strong>TCRT5000 IR Barrier Line Track sensor</strong>. It emits an infrared light and detects the reflection. If you aim it at the fastest turning hand on your meter, you can detect pulses or a rate.</li>\n			<li> Some water meters emit a fluctuating magnetic field that can be detected by using a <strong>Hall effect sensor</strong>. Instructions are available <a href="http://www.instructables.com/id/Monitoring-residential-water-usage-by-reading-muni/">here</a>.</li>\n			</ol></p>'), "\n\n			", HTML.Raw("<p>The sensor example sketch counts the pulses from your attached sensor and converts it into liters or gallons per minute and the cummulative water volume. </p>"), "\n\n			", HTML.Raw("<p>There are a few parameters that need to be tuned to your water meter. Set the <strong>PULSE_FACTOR</strong> to the number of revolutions per cubic-meters (or gallons) of water.</p>"), "\n\n			", HTML.Raw("<p>You can also set the frequency that the sensor will report the water consumption by updating the <strong>SEND_FREQUENCY</strong>. The default frequency 3 times per minute (every 20 seconds).</p>"), "\n\n			", HTML.Raw("<p>The sensor has two modes of operation:</p>"), "\n\n			", HTML.Raw("<p><strong>SLEEP_MODE = true</strong></p>"), "\n			", HTML.Raw("<p>Use this mode if you power the sensor with a battery. In this mode the sensor will sleep most of the time and only report the cumulative water volume. Unfortunately the sensor cannot report the current water flow rate because the sensor can not track time while sleeping; the elapsed time between two blinks is required to calculate the current flow rate.</p>"), "\n			", HTML.Raw("<p><strong>SLEEP_MODE = false</strong></p>"), "\n\n			", HTML.Raw("<p>In this mode the sensor will not sleep and will report the current water flow rate and the cumulative water consumption to the gateway. This mode requires constant power so you will need to connect the sensor to an electrical outlet.</p>"), "\n\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									<a href="/water/doao.png" data-lightbox="image-finding" title="Moisture sensor"><img src="/water/doao.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4">\n									 <a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (3.3 - 5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("DO (digital out)"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green;"
  }, "Marked green")), "\n					"), "\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47535"),
      name: Spacebars.call("WaterMeterPulseSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_pulse_water")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		"), "\n	");
}));

Template.__checkName("build_moisture");
Template["build_moisture"] = new Template("Template.build_moisture", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Moisture Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<a href="/water/glass.png" data-lightbox="image-finding" title="Soil Moisture Sensor"><img src="/water/glass.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n			", HTML.Raw("<p>Have you ever wanted to be notified when your plants need to be watered? Then this is the place for you. </p>"), "\n			", HTML.Raw("<p>There are several water sensors available and we've tried the soil, rain and water level sensors. </p>"), "\n			", HTML.Raw("<p>The soil sensors both have digital and analog outputs. The digital trigger level can adjusted by setting the trimpot on the sensor module. We're only going to use the digital output of the sensors in the following example.</p>"), "\n\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									<a href="/water/doao.png" data-lightbox="image-finding" title="Moisture sensor"><img src="/water/doao.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-4">\n									 <a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-5"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC"), HTML.TD("VCC (3.3 - 5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("DO (digital out)"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green;"
  }, "Marked green")), "\n					"), "\n						"), "\n					"), "\n			", HTML.Raw("<br>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47539"),
      name: Spacebars.call("SoilMoistSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_moisture")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_temp");
Template["build_temp"] = new Template("Template.build_temp", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Temperature Sensor</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<div class="sketchFreezing"></div>'), "\n			", HTML.Raw('<a href="/temp/18b20.png" data-lightbox="image-finding" title="DS18B20"><img src="/temp/18b20.png" title="DS18B20" style="float:left;height:150px"></a>'), "\n			", HTML.Raw("<p>For temperature measurements we've selected the standard Dallas DS18B20.</p>"), "\n			", HTML.Raw("<p>It's accurate, inexpensive and you can connect many of them in parallel without using more than one digital input on the Arduino board. </p>"), "\n			", HTML.Raw("<p>They come in several variants: probe, individual, brick and a waterproof version. </p>"), "\n			", HTML.Raw('<p>You will also need a small pull-up resistor to make the circuit work. It is usually around 4,7kOhm. <img src="/temp/resistor.png" title="4,7kOhm pull up resistor" class="img-responsive"></p>'), "\n\n			", HTML.Raw('<div class="clearfix"></div>'), "\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n			", HTML.Raw("<p>Then connect the temperature sensor according to the color coding in the illustration. </p>"), "\n			", HTML.Raw("<p>There are 3 legs on the DS18b20 and you can connect several of them as illustrated below. The provided example sketch will auto-detect up to 16 pcs.</p>"), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-3">\n									<a href="/temp/connectdallas.png" data-lightbox="image-finding" title="Dallas"><img src="/temp/connectdallas.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.Raw('<div class="col-md-3">\n						<a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n						</div>'), "\n				", HTML.DIV({
    "class": "col-md-6"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n					", HTML.TR(HTML.TH("Sensor"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("GND (left pin)"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("VCC (right pin)"), HTML.TD("VCC (3.0 - 5.5V)"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("DQ (middle pin)"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n					", HTML.TR(HTML.TD({
    colspan: "3"
  }, "Mount a 4.7kOhm (4k7) resistor between VCC and Digital pin 3")), "\n					"), "\n						"), "\n					"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47518"),
      name: Spacebars.call("DallasTemperatureSensor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n				", HTML.Raw("<h2>Buying Guide</h2>"), "\n				", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_temperature")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw("<h2>Datasheets</h2>"), "\n\n			", HTML.Raw('<img src="/temp/sketchTemp.png" style="height:100px">'), "\n			", HTML.Raw('<a target="_new" href="/temp/DS18B20.pdf">DS18B20</a>'), "\n\n		"), "\n	");
}));

Template.__checkName("build_relay");
Template["build_relay"] = new Template("Template.build_relay", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Relay Actuator</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<img src="/relay/relay.png" title="Switching relay" style="width:100px;float:right;">'), "\n		", HTML.Raw('<a href="/relay/relayModule.png" data-lightbox="image-finding" title="1 Channel Relay Module"><img src="/relay/relayModule.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n		", HTML.Raw("<p>Controlling a relay can be very useful. You can turn lights on and off or why not control your garage door or heater? </p>"), "\n		", HTML.Raw("<p>You can find relay modules with 1, 2, 4, 8 and more channels. Each relay requires one of your Arduinos digital outputs to control it. </p>"), "\n		", HTML.Raw("<p>Make sure to power the relay module separately if you use more than one relay. If you try to power the relays directly from the Arduino you will definitely experience restarts and other failures.  </p>"), "\n		", HTML.Raw("<p>You can fine tune how many relays you want to control in the example sketch by modifying the <strong>NUMBER_OF_RELAYS</strong> parameter. The first relay uses digital out 3, relay number two uses digital out 4 and so on. </p>"), "\n		", HTML.Raw("<p>When the actuator starts it fetches the last known relay state from the controller.	</p>"), "\n\n		", HTML.Raw("<h2>Demonstration</h2>"), "\n		", HTML.Raw('<p>Here is a video done by the communnity member <a href="http://forum.mysensors.org/user/petewill">petewill</a> showing how to build a smart plug module:</p>'), "\n		", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/oNpMDN4QqD8" frameborder="0" allowfullscreen=""></iframe>'), "\n		", HTML.Raw('<p>There\'s also a <a href="http://forum.mysensors.org/topic/775/8-lamp-outlet-smart-plug-module">forum thread</a> describing the project.</p>'), "\n\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.Raw('<div class="col-md-3">\n								<a href="/relay/relayConnect.png" data-lightbox="image-finding" title="Relay"><img src="/relay/relayConnect.png" class="img-responsive"></a>\n				</div>'), "\n			", HTML.Raw('<div class="col-md-4">\n\n\n								<a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n				</div>'), "\n			", HTML.DIV({
    "class": "col-md-5"
  }, "\n\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Relay"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("- or GND"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("+ or VCC"), HTML.TD("+5V"), HTML.TD({
    style: "color:red"
  }, "Marked red")), "\n					", HTML.TR(HTML.TD("S or IN"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n				"), "\n			 "), "\n				"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47528"),
      name: Spacebars.call("RelayActuator")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47534"),
      name: Spacebars.call("RelayWithButtonActuator")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_relay")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

Template.__checkName("build_servo");
Template["build_servo"] = new Template("Template.build_servo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Servo Control Actuator</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n		", HTML.Raw('<!-- img src="/servo/servo.png"  title="Servo Man" style="width:100px;float:right;"/ -->'), "\n		", HTML.Raw('<a href="/servo/servoModule.png" data-lightbox="image-finding" title="Servo Module"><img src="/servo/servoModule.png" style="float:left;height:150px;padding-right:20px"></a>'), "\n		", HTML.Raw("<p>You can use a servo to control blinds or even the volume of an old stereo that is missing a remote.</p>"), "\n\n		", HTML.Raw("<p>Servos require a lot of power so you must power them separately (i.e. not from the Arduino).</p>"), "\n\n		", HTML.Raw("<p>You might need to fine tune the <strong>SERVO_MIN</strong> and <strong>SERVO_MAX</strong> parameters in the sketch to match your servo's range of motion. The example sketch supports servo's with a 180 degree range of motion. </p>"), "\n		", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n\n		", HTML.Raw('<p>Start by <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n\n\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.Raw('<div class="col-md-4">\n								<a href="/servo/servoCables.png" data-lightbox="image-finding" title="Connect Servo"><img src="/servo/servoCables.png" class="img-responsive"></a>\n								<p>The servo cable colors can vary by manufacturer and mode so you should use the lead markings as illustrated above. </p>\n\n								<p>brown or black = ground (GND, battery negative terminal)<br>\n					red = servo power (Vservo, battery positive terminal)<br>\n					orange, yellow, white, or blue = servo control signal line<br></p>\n\n				</div>'), "\n			", HTML.Raw('<div class="col-md-4">\n								<a href="/temp/APM_D3.png" data-lightbox="image-finding" title="Arduino"><img src="/temp/APM_D3.png" class="img-responsive"></a>\n				</div>'), "\n			", HTML.DIV({
    "class": "col-md-4"
  }, "\n\n				", HTML.TABLE({
    "class": "table table-curved"
  }, "\n					", HTML.TR(HTML.TH("Relay"), HTML.TH("Arduino"), HTML.TH("Comment")), "\n					", HTML.TR(HTML.TD("-"), HTML.TD("GND"), HTML.TD("Marked black")), "\n					", HTML.TR(HTML.TD("+"), HTML.TD("+5V"), HTML.TD({
    style: "color:red"
  }, "Marked red / Power source")), "\n					", HTML.TR(HTML.TD("S"), HTML.TD("Digital pin 3"), HTML.TD({
    style: "color:green"
  }, "Marked green")), "\n				"), "\n				", HTML.Raw("<p><strong>Do not overload your Arduino!</strong> It will malfunction and/or restart if you draw to much power from the Arduino. </p>"), "\n					"), "\n				"), "\n\n		", HTML.Raw("<h2>Inside and Parts</h2>"), "\n		", HTML.Raw('<div class="row">\n			<div class="col-md-6">\n								<a href="/servo/servo.png" data-lightbox="image-finding" title="Servo Parts"><img src="/servo/servo.png" class="img-responsive"></a>\n				</div>\n			<div class="col-md-6">\n								<a href="/servo/servoParts.png" data-lightbox="image-finding" title="Servo Inside"><img src="/servo/servoParts.png" class="img-responsive"></a>\n				</div>\n			</div>'), "\n\n		", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47532"),
      name: Spacebars.call("ServoActuator")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n		", HTML.Raw("<h2>Buying guide</h2>"), "\n		", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_servo")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n		"), "\n	");
}));

}).call(this);
