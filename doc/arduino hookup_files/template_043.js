(function(){
Template.__checkName("build");
Template["build"] = new Template("Template.build", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n		<h1>Build = Fun</h1>\n		<div class="well">\n			<a href="/build/sensors.png" data-lightbox="image-finding" title="Parts"><img src="/build/sensors.png" style="float:right;width:300px;padding-left:20px"></a>\n\n			<p>So! You\'ve <a href="/controller">selected a controller</a>. Time to build gateway and sensors!</p>\n			<p>The gateway will forward your wireless sensor data to the controller. You\'ll find a few different build options in the left menu.\n				Make sure your controller supports it!</p>\n\n			<p><b>Sensors</b> collect data from the environment. Such as <a href="/build/light">light level</a>,\n				<a href="/build/motion">motion</a>, <a href="/build/temp">temperature</a> and <a href="/build/binary">physical button presses</a>.</p>\n			<p><b>Actuators</b> controls the environment. This could be a <a href="/build/relay">relay</a>, <a href="/build/servo">servo</a>, <a href="/build/ir">ir sender</a> or <a href="/build/dimmer">dimmer</a>.\n				Most things can be controlled using a simple relay. Like simulating button pushes on remotes or physical buttons. </p>\n\n			<h2>Demonstration</h2>\n			<p>Here is a clip created by  <a href="http://forum.mysensors.org/user/petewill">petewill</a> showing how to build a serial gateway and getting started with the Arduino environment.\n			<iframe class="youtube" src="https://www.youtube.com/embed/TBvGrB094Co" frameborder="0" allowfullscreen=""></iframe>\n			</p>\n\n			<h2>More examples</h2>\n\n			<p>There are even more ready-to-go examples available on github in the\n				<a href="https://github.com/mysensors/Arduino/tree/master/libraries/MySensors/examples">MySensors/examples</a> folder.\n				In the <a href="/store">store</a> you can also get some inspiration for more things to interface with.\n				</p>\n\n			<p>But the most amazing projects has been done by the creative community members! Here is a random selection from the MySensors forum:\n			<ul>\n				<li><a href="http://forum.mysensors.org/topic/1018/">3D printed battery powered Wall Remote Control</a> - Winner of the Project Context 2015</li>\n				<li><a href="http://forum.mysensors.org/topic/85/">PhoneyTV</a> - Winner of the Project Contest 2014</li>\n				<li><a href="http://forum.mysensors.org/topic/156/">Rain Gauge</a></li>\n				<li><a href="http://forum.mysensors.org/topic/78/">Mailbox Sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/253/">Motorized Shutters</a></li>\n				<li><a href="http://forum.mysensors.org/topic/352/">Leaf Wetness</a></li>\n				<li><a href="http://forum.mysensors.org/topic/93/">Weather Station with Scene Activator</a></li>\n				<li><a href="http://forum.mysensors.org/topic/613/">Air Quality: CO2 Sensor MH-Z14</a></li>\n				<li><a href="http://forum.mysensors.org/topic/647/">MySensored 230v motion sensor with light level</a></li>\n				<li><a href="http://forum.mysensors.org/topic/681/">Full Duplex Network</a></li>\n				<li><a href="http://forum.mysensors.org/topic/694/">MySensoring an HVAC Fresh Air Intake System</a></li>\n				<li><a href="http://forum.mysensors.org/topic/7/">Controlling Blinds.com RF Dooya Motors with Arduino and Vera</a></li>\n				<li><a href="http://forum.mysensors.org/topic/404/">3-in-1 Humidity Temp and Motion</a></li>\n				<li><a href="http://forum.mysensors.org/topic/841/">Solar Powered Mini-Weather Station</a></li>\n				<li><a href="http://forum.mysensors.org/topic/833/">Yet another servo blind control project</a></li>\n				<li><a href="http://forum.mysensors.org/topic/799/">220V Relay Module Project</a></li>\n				<li><a href="http://forum.mysensors.org/topic/781/">4-in1 LED-dimmer/motion/temp-hum sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/771/">Energy pulse meter + outside temperature</a></li>\n				<li><a href="http://forum.mysensors.org/topic/486/">My 2AA battery sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/153/">Irrigation Controller (up to 16 valves with Shift Registers)</a></li>\n				<li><a href="http://forum.mysensors.org/topic/705/">Thermostat control using servo</a></li>\n				<li><a href="http://forum.mysensors.org/topic/948/">Sensor to control remote controlled switches from Flamingo.eu e.g. mumbi m-FS300</a></li>\n				<li><a href="http://forum.mysensors.org/topic/875/">Plotting graphs with plot.ly service with luup scene using REST API</a></li>\n				<li><a href="http://forum.mysensors.org/topic/936/">Backlit Dimmable LED Mirror with Motion Sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/775/">$8 Lamp (Outlet) "Smart Plug" Module</a></li>\n				<li><a href="http://forum.mysensors.org/topic/949/">Sensor for Vallox DigitSE RS485 ventilation system with integration into FHEM.</a></li>\n				<li><a href="http://forum.mysensors.org/topic/954/">MyAirwik Sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/934/">MySensoring a Kidde Smoke Detector.</a></li>\n				<li><a href="http://forum.mysensors.org/topic/938/">Multisensor Multiactuator Sketch / Testboard - tested with FHEM Controller</a></li>\n				<li><a href="http://forum.mysensors.org/topic/924/">MQTT Client Gateway</a></li>\n				<li><a href="http://forum.mysensors.org/topic/902/">Relay / Motion Multisensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/731/">My 1AA battery sensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/841/">Solar Powered Mini-Weather Station</a></li>\n				<li><a href="http://forum.mysensors.org/topic/1008/">My Gateway</a></li>\n				<li><a href="http://forum.mysensors.org/topic/1005/">BcSensor</a></li>\n				<li><a href="http://forum.mysensors.org/topic/1013/">My 12 input high precision pulse counter (kWh/W)</a></li>\n\n			</ul>\n\n\n\n			</p>\n	</div>\n\n	</div>');
}));

Template.__checkName("codebender");
Template["codebender"] = new Template("Template.codebender", (function() {
  var view = this;
  return HTML.IFRAME({
    "class": "codebender-plugin",
    src: function() {
      return [ "https://codebender.cc/embed/", Spacebars.mustache(view.lookup("sketch")), "?referrer=MySensors" ];
    },
    allowtransparency: "true",
    frameborder: "0"
  });
}));

Template.__checkName("exampleFile");
Template["exampleFile"] = new Template("Template.exampleFile", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    }
  }, "\n	", HTML.H2({
    id: "example"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), " Example"), "\n\n	", HTML.P("This is a fully working example sketch called '", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), ".ino'. If you need help uploading in your local IDE? Check out the guide ", HTML.Raw('<a href="/build/arduino#uploading-example-sketches">here</a>'), '. If you prefer using the codebender browser plugin, just click "Run on Arduino" below.'), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n	", HTML.DIV({
      "class": "  pull-right",
      style: "background-color:#7b88a3; color:#ffffff; width:400px; text-align:center; margin-left:5px;padding:5px;line-height:27px"
    }, "\n	", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("avatar"));
      },
      style: "margin-right:5px;float:left",
      height: "30",
      width: "30"
    }), "\n	", HTML.DIV({
      "class": ""
    }, "Last updated by ", Blaze.View("lookup:committer", function() {
      return Spacebars.mustache(view.lookup("committer"));
    }), ", ", Blaze.View("lookup:date", function() {
      return Spacebars.mustache(view.lookup("date"));
    }))), "\n	" ];
  }), "\n		", HTML.H4(HTML.A({
    style: "padding-left:20px",
    href: function() {
      return Spacebars.mustache(view.lookup("gh"));
    }
  }, HTML.Raw('<i class="fa fa-github"></i>'), " GitHub")), "\n\n	", Blaze._TemplateWith(function() {
    return {
      sketch: Spacebars.call(view.lookup("codebender"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("codebender"));
  }), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n		", HTML.STRONG("Last commit message:"), HTML.BR(), "\n		", HTML.I({
      "class": "fa fa-quote-left"
    }), " ", HTML.I(Blaze.View("lookup:message", function() {
      return Spacebars.mustache(view.lookup("message"));
    })), " ", HTML.I({
      "class": "fa fa-quote-right"
    }), "\n	" ];
  }), "\n	");
}));

Template.__checkName("exampleFileNoHeader");
Template["exampleFileNoHeader"] = new Template("Template.exampleFileNoHeader", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    }
  }, "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n	", HTML.DIV({
      "class": "  pull-right",
      style: "background-color:#7b88a3; color:#ffffff; width:400px; text-align:center; margin-left:5px;padding:5px;line-height:27px"
    }, "\n	", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("avatar"));
      },
      style: "margin-right:5px;float:left",
      height: "30",
      width: "30"
    }), "\n	", HTML.DIV({
      "class": ""
    }, "Last updated by ", Blaze.View("lookup:committer", function() {
      return Spacebars.mustache(view.lookup("committer"));
    }), ", ", Blaze.View("lookup:date", function() {
      return Spacebars.mustache(view.lookup("date"));
    }))), "\n	" ];
  }), "\n		", HTML.H4(HTML.A({
    style: "padding-left:20px",
    href: function() {
      return Spacebars.mustache(view.lookup("gh"));
    }
  }, HTML.Raw('<i class="fa fa-github"></i>'), " GitHub")), "\n\n	", Blaze._TemplateWith(function() {
    return {
      sketch: Spacebars.call(view.lookup("codebender"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("codebender"));
  }), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n		", HTML.STRONG("Last commit message:"), HTML.BR(), "\n		", HTML.I({
      "class": "fa fa-quote-left"
    }), " ", HTML.I(Blaze.View("lookup:message", function() {
      return Spacebars.mustache(view.lookup("message"));
    })), " ", HTML.I({
      "class": "fa fa-quote-right"
    }), "\n	" ];
  }), "\n	");
}));

Template.__checkName("old_githubFile");
Template["old_githubFile"] = new Template("Template.old_githubFile", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    }
  }, HTML.Raw('\n	<h2 id="example">Example</h2>\n\n	'), HTML.P("To test the above sensor we have created a fully working example called '", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), "'. If you need help uploading to your local Arduino IDE, check out the ", HTML.Raw('<a href="/build/arduino">using Arduino guide</a>'), ". "), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n	", HTML.DIV({
      "class": "label label-primary pull-right",
      style: "margin-left:5px;padding:5px;line-height:14px"
    }, "\n	", HTML.DIV({
      "class": "pull-right"
    }, "Last update: ", Blaze.View("lookup:date", function() {
      return Spacebars.mustache(view.lookup("date"));
    }), HTML.BR(), "by ", Blaze.View("lookup:committer", function() {
      return Spacebars.mustache(view.lookup("committer"));
    })), "\n	", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("avatar"));
      },
      style: "margin-right:5px",
      height: "30",
      width: "30"
    })), "\n	" ];
  }), "\n		", HTML.H4(HTML.A({
    style: "padding-left:20px",
    href: function() {
      return Spacebars.mustache(view.lookup("gh"));
    }
  }, HTML.Raw('<i class="fa fa-github"></i>'), " GitHub"), " | ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("downloadLink"));
    }
  }, " ", HTML.Raw('<i class="fa fa-download"></i>'), " Download")), "\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("avatar"));
  }, function() {
    return [ "\n	", Blaze.View("lookup:content", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("content")));
    }), "\n		", HTML.STRONG("Last commit message:"), HTML.BR(), "\n		", HTML.I({
      "class": "fa fa-quote-left"
    }), " ", HTML.I(Blaze.View("lookup:message", function() {
      return Spacebars.mustache(view.lookup("message"));
    })), " ", HTML.I({
      "class": "fa fa-quote-right"
    }), "\n	" ];
  }), "\n	");
}));

Template.__checkName("downloadFile");
Template["downloadFile"] = new Template("Template.downloadFile", (function() {
  var view = this;
  return [ HTML.STRONG(HTML.A({
    style: "padding-left:20px",
    href: function() {
      return Spacebars.mustache(view.lookup("gh"));
    }
  }, HTML.Raw('<i class="fa fa-github"></i>'), " GitHub"), " | ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("downloadLink"));
    }
  }, " ", HTML.Raw('<i class="fa fa-download"></i>'), " Download"), " ", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), HTML.Raw("<br>") ];
}));

}).call(this);
