(function(){
Template.__checkName("controller_vera");
Template["controller_vera"] = new Template("Template.controller_vera", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n				<h1>Vera Controller</h1>\n				"), HTML.DIV({
    "class": "well"
  }, "\n\n				", HTML.Raw('<img src="/controller/vera.png" style="width:30%;float:right;padding-left:20px">'), "\n\n				", HTML.Raw("<p>The <strong>Vera Home Automation Controller</strong> is a commercial controller running on its own hardware. It has a rather open plugin architecture and we use it as a testing ground for new controller features. The controller has a history of controlling Z-Wave devices.</p>"), "\n\n				", HTML.Raw('<p>MySensors is supported through the <strong><a href="/build/serial_gateway">Serial Gateway</a> or <a href="/build/ethernet_gateway">Ethernet Gateway</a></strong>.</p>'), "\n\n				", HTML.Raw("<p>We keep all the Vera plugin installation instructions on this page.</p>"), "\n\n				", HTML.Raw('<p><a class="btn btn-md btn-primary" href="http://getvera.com/" target="_new"><i class="fa fa-chevron-right"></i> Homepage <i class="fa fa-chevron-left"></i></a>\n\n				<a class="btn btn-md btn-primary" href="http://forum.mysensors.org/category/2" target="_new"><i class="fa fa-chevron-right"></i> Support Forum <i class="fa fa-chevron-left"></i></a>\n\n				</p>'), "\n\n\n				", HTML.Raw('<a href="/vera/vera.png" data-lightbox="image-finding" title="Vera Lite Controller"><img src="/vera/vera.png" style="width:30%;float:right;padding-left:20px"></a>'), "\n\n				", HTML.Raw("<h2>Features</h2>"), "\n				", HTML.Raw('<p>\n						<ul>\n						<li>Manages about 70-200 Z-Wave devices (depending on model)</li>\n						<li>Lots of free 3rd party plugins on their <a href="https://apps.mios.com/">plugin market</a></li>\n						<li>Free cloud service with backups and remote access</li>\n						<li>Build in web-browser GUI and 3rd party apps supporting remote access</li>\n						</ul>\n				</p>'), "\n\n					", HTML.Raw("<h2>Installing the Vera Plugin</h2>"), "\n\n\n					", HTML.Raw("<p>Once you have installed the Arduino Plugin, you will register your sensors with the Vera by using the Inclusion mode triggered by clicking on the Start button on the plugin. The default inclusion duration is one minute.</p>"), "\n					", HTML.Raw('<img src="/vera/veraplugin.png" style="float:left;width:200px;padding:10px;padding-left:0px">'), "\n					", HTML.Raw("<p>When a sensor sends its presentation during inclusion mode, the Vera will add it as a new device on the Vera dashboard. Sensors send their presentation information from the <i>setup()</i> method whenever the sensor node's Arduino is reset or power-cycled so you will need to reset your sensor node once you have click the Start button.</p>"), "\n					", HTML.Raw("<p>The Vera plug-in is compatible with both the Vera 3 and Vera Lite models running UI5 and supports both the Serial and Ethernet Gateways. All you have to do, is configure the Vera plug-in and build either a Serial or Ethernet gateway using the instructions below.</p>"), "\n					", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n					", HTML.Raw('<a href="/vera/uploadFiles.png" data-lightbox="image-finding" title="Uploading plugin files to Vera"><img src="/vera/uploadFiles.png" style="width:40%;float:right;padding-left:20px"></a>'), "\n					", HTML.Raw('<ol>					\n\n\n					<li>First, download the latest Vera plugin files from the MySensors <a href="https://github.com/mysensors/Vera/tree/master"><b>Git Repo for UI5</b></a> or <a href="https://github.com/mysensors/Vera/tree/UI7"><b>Git Repo for UI7</b></a></li>\n					</ol>'), "\n					", HTML.Raw("<!-- p>{{>dl repo='Vera' path='' name='D_Arduino1.xml'}}\n					{{>dl repo='Vera' path='' name='D_Arduino1.json'}}\n					{{>dl repo='Vera' path='' name='I_Arduino1.xml'}}\n					{{>dl repo='Vera' path='' name='L_Arduino.lua'}}\n					{{>dl repo='Vera' path='' name='S_Arduino.xml'}}\n					{{>dl repo='Vera' path='' name='D_ArduinoNode1.xml'}}\n					{{>dl repo='Vera' path='' name='S_ArduinoNode.xml'}}\n					{{>dl repo='Vera' path='' name='D_ArduinoNode1.json'}}\n					{{>dl repo='Vera' path='' name='D_ArduinoRelay1.xml'}}\n					{{>dl repo='Vera' path='' name='D_ArduinoRelay1.json'}}\n					</p -->"), "\n\n\n					", HTML.Raw('<div class="clearfix"></div>'), "\n					", HTML.Raw("<br>"), "\n						", HTML.Raw('<a href="/vera/createDevice.png" data-lightbox="image-finding" title="Create vera device"><img src="/vera/createDevice.png" style="width:40%;float:right;padding-left:20px"></a>'), "\n\n\n					", HTML.Raw('<ol>\n					<li value="2.">Then upload the files to your Vera.\n					<p>Go to: <strong>APPS <i class="fa fa-arrow-right"></i> Develop Apps <i class="fa fa-arrow-right"></i> Luup files</strong>. </p>\n					<p>Select "<strong>Choose File</strong>" for each device file and then press the "<strong>GO</strong>" button to upload the files to your Vera.</p></li>\n					<li>Finally, create the Arduino Device.\n					<p>Go to: <strong>APPS <i class="fa fa-arrow-right"></i> Develop Apps <i class="fa fa-arrow-right"></i> Create Device</strong>. </p>\n					<p>Enter "<strong>D_Arduino1.xml</strong>" for the "<strong>Upnp Device Filename</strong>" and press the "<strong>Create Device</strong>" button.</p>\n					<p>Click the Reload button in the upper right corner of the Vera dashboard to create the Arduino root plugin device.  It may take a few minutes for the reload to complete and display the Arduino root plugin device on the dashboard.</p></li>\n					</ol>'), "\n\n\n					", HTML.Raw("<h2>Device specific settings and files</h2>"), "\n					", HTML.Raw("<p>Some of the sensors requires extra device files and configuration. Make sure to look here if your sensor don't show up correctly on Vera.</p>"), "\n					", HTML.Raw("<p>Upload the device files the same way as you did above with the plugin files.</p>"), "\n\n					", HTML.Raw('<img src="/pressure/baroVera.png" title="drop" style="float:right;width:200px">'), "\n					", HTML.Raw("<h4>Barometer (pressure sensor)</h4>"), "\n\n					", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("barometer"),
      name: Spacebars.call("D_BarometerSensor1.json")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("barometer"),
      name: Spacebars.call("D_BarometerSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("barometer"),
      name: Spacebars.call("S_BarometerSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					"), "\n					", HTML.Raw("<br>"), "\n\n\n					", HTML.Raw('<img src="/distance/distVera.png" title="drop" style="float:right;width:200px">'), "\n					", HTML.Raw("<h4>Distance Sensor</h4>"), "\n					", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("distance"),
      name: Spacebars.call("D_DistanceSensor1.json")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("distance"),
      name: Spacebars.call("D_DistanceSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("distance"),
      name: Spacebars.call("S_DistanceSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					"), "\n					", HTML.Raw("<br>"), "\n\n					", HTML.Raw('<img src="/pulse/pulseVera.png" style="width:200px;float:right;">'), "\n					", HTML.Raw("<h4>Energy Meter (pulse)</h4>"), "\n					", HTML.Raw("<p><strong>TIP:</strong> Perform the following steps if you want the vera device to display the correct KWh for your meter.</p>"), "\n					", HTML.Raw("<ul>\n					<li>Include your new power meter sensor on Vera.</li>\n					<li>Turn off the sensor. </li>\n					<li>Update the <strong>Variable1</strong> value under the new Vera devices advanced tab. Set <strong>Variable1</strong> to your meter's current KWh value multiplied by your PULSE_FACTOR and save the Vera changes.</li>\n					<li> Now turn on your power sensor. During startup, the sensor will  fetch the current KWh from the Vera.</li>\n					</ul>"), "\n					", HTML.Raw("<p><i>Example: If your pulse factor is 1000 and your meter's current KWh reading is 33211, set <strong>Variable1</strong> to 33211000.</i></p>"), "\n\n\n\n					", HTML.Raw("<h4>Rain Gauge</h4>"), "\n					", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("raingauge"),
      name: Spacebars.call("D_RainSensor1.json")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("raingauge"),
      name: Spacebars.call("D_RainSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("raingauge"),
      name: Spacebars.call("S_RainSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					"), "\n					", HTML.Raw("<br>"), "\n\n					", HTML.Raw("<h4>Scale Sensor (weight)</h4>"), "\n					", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("scale"),
      name: Spacebars.call("D_ScaleSensor1.json")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("scale"),
      name: Spacebars.call("D_ScaleSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("scale"),
      name: Spacebars.call("S_ScaleSensor1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					"), "\n					", HTML.Raw("<br>"), "\n\n\n\n					", HTML.Raw('<img src="/pulse/waterVera.jpg" style="width:200px;float:right;">'), "\n					", HTML.Raw("<h4>Water meter (pulse)</h4>"), "\n\n					", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("watermeter"),
      name: Spacebars.call("D_WaterMeter1.json")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("watermeter"),
      name: Spacebars.call("D_WaterMeter1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					", Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Vera"),
      path: Spacebars.call("watermeter"),
      name: Spacebars.call("S_WaterMeter1.xml")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  }), "\n					"), "\n\n					", HTML.Raw("<p><strong>TIP:</strong> Perform the following steps if you want the vera device to display the correct total water volume for your meter.</p>"), "\n					", HTML.Raw("<ul>\n					<li>Include your new water meter sensor on Vera.</li>\n					<li>Turn off the sensor. </li>\n					<li>Update the <strong>Variable1</strong> value under the new Vera devices advanced tab. Set <strong>Variable1</strong>  to your meter's current total volume value multiplied by your PULSE_FACTOR and save the Vera changes.</li>\n					<li> Now turn on your water meter sensor. The sensor will fetch the current volume from Vera.</li>\n					</ul>"), "\n					", HTML.Raw("<p><i>Example: If your pulse factor is 100 and the current volume-reading on your meter is is 332. Set Variable1 to 33200.</i></p>"), "\n\n\n					", HTML.Raw("<h2>Including New Sensor(s)</h2>"), "\n					", HTML.Raw("<p>To add one or more new sensors to your Vera, follow the steps below:</p>"), "\n					", HTML.Raw('<ol>\n					<li>Start inclusion mode on the Arduino Vera device by pressing the "Start" button. Inclusion mode is normally active for 1 minute.</li>\n					<li>While the inclusion mode is active, restart each new sensor that you want to include to ensure that it sends the special presentation message to the Vera. Once the inclusion mode ends, you should see something like "2 new sensors found" in the Arduino Vera device.</li>\n					<li>Once inclusion mode ends, your Vera will automatically reload the luup engine if it detected any new sensor nodes. Once the Vera reload completes (1-3 minutes), you should see your new Arduino sensor devices on the dashboard.</li>\n					<li>Restart you sensor again. This create all necessary variables for the new device and will update the sketch name and version information for the sensor node.</li>\n					<li>Finally, reload the browser tab. Congratulations! Your new Arduino sensor devices should be on-line, connected and reporting data to your Vera!</li>\n					</ol>'), "\n\n\n\n					", HTML.Raw("<h2>Configuring the Vera Plugin for the Serial/USB gateway</h2>"), "\n\n					", HTML.Raw("<p><strong>NOTE: </strong>You must use an Arduino Nano for the USB version of the gateway. The Nano is the officially supported and tested model so if you try a different version, we cannot guarantee that the Vera will recognize it.</p>"), "\n\n					", HTML.Raw('<p>Follow the instructions on how to build the <a href="/build/serial_gateway">serial gateway</a>.</p>'), "\n\n					", HTML.Raw('<p>Connect the gateway Arduino to one of your Vera USB ports using a standard USB cable. If all of the Vera USB ports are in use, then you can plug in the gateway into a USB hub that is connected to one of the Vera USB ports.\n					<a href="/vera/serial.png" data-lightbox="image-finding" title="USB configuration"><img src="/vera/serial.png" style="width:40%;float:right;padding-left:20px"></a></p>'), "\n					", HTML.Raw("<p>Next, you will need to configure the USB port communication settings so the Vera can communicate with the gateway over the USB serial connection.</p>"), "\n					", HTML.Raw('<p>Finally, go to: <strong>APPS <i class="fa fa-arrow-right"></i> Develop Apps <i class="fa fa-arrow-right"></i> Serial port configuration</strong>. See the screenshot to the right.</p>'), "\n\n					", HTML.Raw("<ol>\n					<li>For the <strong>Used by device:</strong> setting, select the <strong>Arduino Gateway Plugin []</strong> from the menu of available devices.</li>\n					<li>Set baud rate to <strong>115200</strong>.</li>\n					<li>Set the <strong>parity</strong> to <strong>none</strong> with <strong>8 data bits</strong> and <strong>1 stop bit</strong>.</li>\n					</ol>"), "\n					", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n					", HTML.Raw('<a href="/vera/ipConfig.png" data-lightbox="image-finding" title="IP and Port configuration"><img src="/vera/ipConfig.png" style="width:30%;float:right;padding-left:20px"></a>'), "\n\n					", HTML.Raw("<h2>Configure the Vera Plugin for the Ethernet gateway</h2>"), "\n					", HTML.Raw("<p>Open configuration for the Arduino Device and select the Advanced tab. </p>"), "\n					", HTML.Raw("<p>Enter the <strong>ip-number:port</strong> in the <strong>ip</strong> field. This will override any previous serial configuration in the Vera plugin; If you chose to use the default IP address and port defined in the EthernetGateway sketch, enter: 192.168.178.66:5003</p>"), "\n\n\n\n					", HTML.Raw("<h2>Buying Guide</h2>"), "\n						", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_vera")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n				"), "\n		");
}));

Template.__checkName("controller_raspberry");
Template["controller_raspberry"] = new Template("Template.controller_raspberry", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n				<h1>MySensors Controller</h1>\n				"), HTML.DIV({
    "class": "well"
  }, "\n						", HTML.Raw('<a href="/rpi/rpiGWOpen.jpg" data-lightbox="image-finding" title="Raspberry Pi with radio module mounted"><img src="/rpi/rpiGWOpen.jpg" style="width:30%;float:right;padding-left:20px"></a>'), "\n						", HTML.Raw('<a href="/rpi/rpi2.png" data-lightbox="image-finding" title="Raspberry Pie rev 2"><img src="/rpi/rpi2.png" style="\n				width:220px;padding-right:10px;float:left"></a>'), "\n						", HTML.Raw("<p><strong>Raspberry Pi</strong> is a small computer that uses very little power (2-3 watts). It has all the horsepower necessary to serve as a cloud-enabled all-in-one Controller.</p>"), "\n\n						", HTML.Raw("<p>Several controllers can run directly on the RPi. Such as <strong>OpenHAB</strong> and <strong>PiDome</strong>.</p>"), "\n\n						", HTML.Raw("<p><i>MySensors is planning to launch a cloud service that will enable you to store, manage, visualize and analyze all of your sensor data anywhere at anytime.  We will be soliciting cloud-service beta testers from the MySensors community so please check back frequently for the beta-launch announcement.</i></p>"), "\n\n						", HTML.Raw('<p>Right now you can try out our simple <a href="https://github.com/mysensors/Arduino/tree/master/NodeJsController">NodeJs controller</a> to get started. It doesn\'t actually do much but you can at least start collecting your sensor data.</p>'), "\n\n\n\n						", HTML.Raw("<h2>Wiring things up</h2>"), "\n						", HTML.Raw('<p>You can connect a <a href="/build/serial_gateway">Serial gateway</a> via USB or use the <a href="/build/ethernet_gateway">Ethernet gateway</a> to communicate with your sensor network.</p>'), "\n						", HTML.Raw('<!-- p>The 3rd option is to connect the NRF24L01 radio directly to the RPi. Note that native MySensors support for this option is still under development.</p>\n						<div class="row">\n								<div class="col-md-6">\n												<a id="revLarge" href="/rpi/gpio-rev2.png" data-lightbox="image-finding" title="Raspberry model B (rev 2) pinout"><img id="revSmall" src="/rpi/gpio-rev2.png" class="img-responsive"></a>\n												<p>\n												<a style="font-size:120%" id="clickSwitchRev" href=""><i class="fa fa-repeat"></i> Switch Revision</a> </p>\n								</div>\n\n							 <div class="col-md-6" style="padding-top:30px">\n\n										<a href="/radio/nrfTop.png" data-lightbox="image-finding" title="The output pins of the Radio"><img src="/radio/nrfTop.png" class="img-responsive"></a><br>\n\n								</div>\n						</div>\n\n								<div class="col-md-10">\n										<table class="table table-curved">\n												<tr><th>Raspberry (pin number)</th><th>Radio</th></tr>\n												<tr><td>GND (6,9,14,20 or 25)</td><td>GND</td></tr>\n												<tr><td style="color:orange">3.3V (1 or 17)</td><td style="color:red">VCC</td></tr>\n												<tr><td style="color:green">GPIO 25 (22)</td><td style="color:orange">CE</td></tr>\n												<tr><td style="color:green">GPIO 08 (24)</td><td style="text-shadow: 0.1em 0.1em 0.2em black; color:yellow">CSN/CS</td></tr>\n												<tr><td style="color:green">GPIO 11 (23)</td><td style="color:green">SCK</td></tr>\n												<tr><td style="color:green">GPIO 10 (19)</td><td style="color:blue">MOSI</td></tr>\n												<tr><td style="color:green">GPIO 09 (21)</td><td style="color:violet">MISO</td></tr>\n												<tr><td>N/A</td><td>IRQ (not used)</td></tr>\n										</table>\n								</div>\n\n\n						<h2>Software installation</h2>\n						<p>\n							 You find a simple NodeJs controller here.\n						</p -->'), "\n\n\n						", HTML.Raw("<h2>Buying guide</h2>"), "\n						", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_raspberry")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n				"), "\n		");
}));

}).call(this);
