(function(){
Template.__checkName("head");
Template["head"] = new Template("Template.head", (function() {
  var view = this;
  return HTML.HEAD("\n		", HTML.TITLE("MySensors - Build your own Sensors"), HTML.Raw('\n		<meta name="viewport" content="width=device-width, initial-scale=1">\n		<link rel="”shortcut" icon”="" type="”image/x-icon”" href="”/favicon.ico”">\n	'));
}));

Template.__checkName("storemenu");
Template["storemenu"] = new Template("Template.storemenu", (function() {
  var view = this;
  return HTML.Raw('<ul id="storenav" class="nav nav-pills nav-stacked">\n			<h4><a href="#top">Browse...</a></h4>\n			<li><a href="#mysensors">MySensors Products</a></li>\n			<li><a href="#arduinos">MCU</a></li>\n			<li><a href="#radios">Radios</a></li>\n			<li><a href="#esps">ESP8266 Modules</a></li>\n			<li><a href="#accessories">Accessory Modules</a></li>\n			<li><a href="#regulators">Regulators</a></li>\n			<li><a href="#batteries">Batteries and Power Sources</a></li>\n			<li><a href="#controllers">Controllers</a></li>\n			<li><a href="#ethernet">Ethernet</a></li>\n			<li><a href="#cables">Cables and Prototyping</a></li>\n			<li><a href="#soldering">Soldering</a></li>\n			<li><a href="#components">Components</a></li>\n			<li><a href="#buttons">Buttons and Rotary Switches</a></li>\n			<li><a href="#temperature">Temperature and Humidity</a></li>\n			<li><a href="#wind">Wind and Meteorology</a></li>\n			<li><a href="#distance">Distance</a></li>\n			<li><a href="#power">Power and Current</a></li>\n			<li><a href="#pressure">Force and Bending</a></li>\n			<li><a href="#light">Light and IR</a></li>\n			<li><a href="#leds">Leds</a></li>\n			<li><a href="#motion">Motion and Sound</a></li>\n			<li><a href="#water">Water and Soil</a></li>\n			<li><a href="#gas">Gas and Air Quality</a></li>\n			<li><a href="#display">Displays</a></li>\n			<li><a href="#camera">Cameras</a></li>\n			<li><a href="#relays">Relays</a></li>\n			<li><a href="#locks">Locks and Doors</a></li>\n			<li><a href="#servos">Servos and Stepper motors</a></li>\n			<li><a href="#boxes">Boxes and enclosures</a></li>\n			<li><a href="#3d">Printing</a></li>\n			<li><a href="#tools">Tools</a></li>\n			<li><a href="#instruments">Lab Instruments</a></li>\n			<li><a href="#guide">Buying guide</a></li>\n	</ul>');
}));

Template.__checkName("downloadmenu");
Template["downloadmenu"] = new Template("Template.downloadmenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, HTML.Raw("\n		<li><h4>v1.5</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/sensor_api_15"),
      title: Spacebars.call("Library API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/serial_api_15"),
      title: Spacebars.call("Serial API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw("\n\n		<li><h4>v1.4</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/sensor_api_14"),
      title: Spacebars.call("Library API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/serial_api_14"),
      title: Spacebars.call("Serial API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw("\n\n		<li><h4>v1.3</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/sensor_api_13"),
      title: Spacebars.call("Library API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/serial_api_13"),
      title: Spacebars.call("Serial API"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n	");
}));

Template.__checkName("aboutmenu");
Template["aboutmenu"] = new Template("Template.aboutmenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, HTML.Raw("\n		<li><h4>Getting Started</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/iot"),
      title: Spacebars.call("Internet of Your Things"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/components"),
      title: Spacebars.call("Components"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/network"),
      title: Spacebars.call("The Sensor Network"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/arduino"),
      title: Spacebars.call("Using Arduino"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/videos"),
      title: Spacebars.call("Videos"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/mysensors"),
      title: Spacebars.call("About Us"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n	");
}));

Template.__checkName("controllermenu");
Template["controllermenu"] = new Template("Template.controllermenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, HTML.Raw("\n		<li><h4>Supported Controllers</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/agocontrol"),
      title: Spacebars.call("Ago Control"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/calaos"),
      title: Spacebars.call("Calaos"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/domoticz"),
      title: Spacebars.call("Domoticz"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/domotiga"),
      title: Spacebars.call("DomotiGa"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/fhem"),
      title: Spacebars.call("FHEM"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/freedomotic"),
      title: Spacebars.call("Freedomotic"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/homeassistant"),
      title: Spacebars.call("Home Assistant"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/homeseer"),
      title: Spacebars.call("Homeseer"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/homidom"),
      title: Spacebars.call("HoMIDoM"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/indigo"),
      title: Spacebars.call("Indigo Domotics"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/iobroker"),
      title: Spacebars.call("ioBroker"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/jeedom"),
      title: Spacebars.call("Jeedom"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/majordomo"),
      title: Spacebars.call("MajorDoMo"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/mycontroller"),
      title: Spacebars.call("MyController.org"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/mynodesnet"),
      title: Spacebars.call("MyNodes.NET"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/openhab"),
      title: Spacebars.call("OpenHAB"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/openluup"),
      title: Spacebars.call("openLuup"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/pidome"),
      title: Spacebars.call("PiDome"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/pimatic"),
      title: Spacebars.call("Pimatic"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/vera"),
      title: Spacebars.call("Vera"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw("\n		<li><h4>Other Cool Stuff</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/myscontroller"),
      title: Spacebars.call("MYSController"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/sniffer"),
      title: Spacebars.call("Yveaux RF24 Sniffer"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n\n	");
}));

Template.__checkName("buildmenu");
Template["buildmenu"] = new Template("Template.buildmenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, "\n\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/connect_radio"),
      title: Spacebars.call("Connecting the Radio"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/print"),
      title: Spacebars.call("3D Printables"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/battery"),
      title: Spacebars.call("Battery Powering"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/debug"),
      title: Spacebars.call("Troubleshooting"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw("\n\n\n		<li><h4>Gateways</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/select_gateway"),
      title: Spacebars.call("Selecting Gateway"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/serial_gateway"),
      title: Spacebars.call("Serial Gateway"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/esp8266_gateway"),
      title: Spacebars.call("ESP8266 Wifi Gateway"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/ethernet_gateway"),
      title: Spacebars.call("Ethernet Gateway"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/mqtt_gateway"),
      title: Spacebars.call("MQTT Gateway"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/advanced_gateway"),
      title: Spacebars.call("Advanced build options"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw("\n\n		<li><h4>Sensors &amp; Actuators</h4></li>\n		"), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("https://www.openhardware.io/explore?search=MySensors"),
      title: Spacebars.call("OpenHardware.io"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/binary"),
      title: Spacebars.call("Door/Window/Button"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/dimmer"),
      title: Spacebars.call("Dimmer (LED)"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/distance"),
      title: Spacebars.call("Distance"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/display"),
      title: Spacebars.call("Display and Time"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/dust"),
      title: Spacebars.call("Dust"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/gas"),
      title: Spacebars.call("Gas"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/humidity"),
      title: Spacebars.call("Humidity"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/ir"),
      title: Spacebars.call("IR Sender/Receiver"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/irrigation"),
      title: Spacebars.call("Irrigation Controller"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/light"),
      title: Spacebars.call("Light"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/moisture"),
      title: Spacebars.call("Moisture"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/motion"),
      title: Spacebars.call("Motion"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/pressure"),
      title: Spacebars.call("Pressure"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/parking"),
      title: Spacebars.call("Parking"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/pulse_power"),
      title: Spacebars.call("Pulse Powermeter"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/pulse_water"),
      title: Spacebars.call("Pulse Watermeter"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/rain"),
      title: Spacebars.call("Rain Gauge"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/relay"),
      title: Spacebars.call("Relay"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/rfid"),
      title: Spacebars.call("RFID"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/knock"),
      title: Spacebars.call("Secret Knock"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/servo"),
      title: Spacebars.call("Servo"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/scene_controller"),
      title: Spacebars.call("Scene Controller"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/temp"),
      title: Spacebars.call("Temperature"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/uv"),
      title: Spacebars.call("UV"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n\n\n\n\n	");
}));

Template.__checkName("hardwaremenu");
Template["hardwaremenu"] = new Template("Template.hardwaremenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, HTML.Raw('\n		<li><h4>MySensors</h4></li>\n		<!--{{>menu url="/hardware/battery_sensor" title="Battery Sensor Board" page=id}}\n		{{>menu url="/hardware/step_up" title="Step Up Module" page=id}}-->\n		'), Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/hardware/micro"),
      title: Spacebars.call("Sensebender Micro"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("https://www.openhardware.io/explore?search=MySensors"),
      title: Spacebars.call("OpenHardware.io"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/hardware/mysx"),
      title: Spacebars.call("Expansion Connector"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw('\n		<!-- li><h4>Partner Products</h4></li>\n		{{>menu url="/hardware/ceech" title="Ceech Board" page=id}}\n		{{>menu url="/hardware/mys" title="MYS 1.1" page=id}} -->\n		<a href="http://www.openhardware.io/explore?search=MySensors">\n		<img src="/partner/oh.png" style="padding-top:30px;width:200px;float:right;"></a>\n		<img src="/hardware/prodBox2.png" style="padding-top:30px;width:200px;float:right;">\n	'));
}));

Template.__checkName("menuItem");
Template["menuItem"] = new Template("Template.menuItem", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("classActive"));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })));
}));

Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n		", Spacebars.include(view.lookupTemplate("navbar")), "\n		", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n				", Spacebars.include(view.lookupTemplate("yield")), "\n		 "), "\n	"), "\n		", Spacebars.include(view.lookupTemplate("footer")), "\n	") ];
}));

Template.__checkName("storeLayout");
Template["storeLayout"] = new Template("Template.storeLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("storemenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("aboutLayout");
Template["aboutLayout"] = new Template("Template.aboutLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("aboutmenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("disqus")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("downloadLayout");
Template["downloadLayout"] = new Template("Template.downloadLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("downloadmenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("disqus")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("controllerLayout");
Template["controllerLayout"] = new Template("Template.controllerLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("controllermenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("disqus")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("hardwareLayout");
Template["hardwareLayout"] = new Template("Template.hardwareLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("hardwaremenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("disqus")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("buildLayout");
Template["buildLayout"] = new Template("Template.buildLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("buildmenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("disqus")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("cloudLayout");
Template["cloudLayout"] = new Template("Template.cloudLayout", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("head")), "\n	", HTML.BODY("\n	", Spacebars.include(view.lookupTemplate("navbar")), "\n	", HTML.DIV({
    "class": "page cloud"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    id: "wrapper"
  }, "\n				", HTML.DIV({
    id: "sidebar-wrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("cloudmenu")), "\n				"), "\n				", HTML.DIV({
    id: "page-content-wrapper"
  }, "\n					", HTML.Raw('<button type="button" id="menu-toggle" href="#" class="btn btn-primary btn-sm btn-pad"><span class="glyphicon glyphicon-chevron-right"></span> Toggle Menu</button>'), "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n					", Spacebars.include(view.lookupTemplate("footer")), "\n				"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));

Template.__checkName("share");
Template["share"] = new Template("Template.share", (function() {
  var view = this;
  return HTML.Raw('<div class="hideSmall addthis_toolbox addthis_default_style" id="sharebuttons">\n		<a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>\n		<a class="addthis_button_tweet"></a>\n		<a class="addthis_counter addthis_pill_style"></a>\n	</div>');
}));

Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return [ HTML.Raw('<div class="footer "><a href="http://sensnology.com">Copyright 2015 Sensnology</a> &nbsp; | &nbsp; <a href="/privacy">Privacy Policy</a> &nbsp; | &nbsp; <a href="/tos">Terms of Service</a> &nbsp; | &nbsp; <a href="/about/mysensors">About</a></div>\n\n	'), HTML.IMG({
    style: "text-decoration:none;border:0;padding:0;margin:0;",
    src: function() {
      return [ "https://rover.ebay.com/roverimp/1/711-53200-19255-0/1?ff3=2&pub=5575069610&toolid=10001&campid=5337426682&customid=&item=130989814887&mpt=", Spacebars.mustache(view.lookup("cacherandom")) ];
    }
  }) ];
}));

Template.__checkName("disqus");
Template["disqus"] = new Template("Template.disqus", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12" id="my-disqus">\n	<!-- Begin Disqus universal code -->\n	<div id="disqus_thread"></div>\n\n	<noscript>Please enable JavaScript to enable\n		<a href="http://disqus.com/?ref_noscript">comments</a>.\n	</noscript>\n\n	<a href="http://disqus.com" class="dsq-brlink">\n		Comments by <span class="logo-disqus">Disqus</span>\n	</a>\n	<!-- End Disqus universal code -->\n</div>');
}));

Template.__checkName("lightbox");
Template["lightbox"] = new Template("Template.lightbox", (function() {
  var view = this;
  return "";
}));

}).call(this);
