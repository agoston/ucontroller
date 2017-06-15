(function(){
Template.__checkName("store");
Template["store"] = new Template("Template.store", (function() {
  var view = this;
  return [ HTML.Raw('<h1 id="shop">Store</h1>\n		'), HTML.DIV({
    "class": "well"
  }, "\n			", Spacebars.include(view.lookupTemplate("share")), "\n				 ", HTML.Raw('<p><img src="/shop/cart.png" class="floatRight cartman" title="Cartman">\n			Here you will find verified hardware for your sensor project. From reliable <b>eBay</b> and <b>AliExpress</b> sellers offering really low prices.\n			Almost all recommended items have <b>free shipping</b>. To keep the low prices, shipment is often made from Asia and the usual delivery time is 2-4 weeks depending on your location.</p>'), "\n			", HTML.Raw('<p>We will go through this product list from time to time and update the selected items.\n				If you are having any problems with the recommended sellers and/or products, please let us know by sending an email to <a href="mailto:info@mysensors.org">info@mysensors.org</a>. We also happily take on tips for new products that might fit here!</p>'), "\n			", HTML.Raw("<p>Make sure to read the product information page before ordering. Sometimes the lot sizes can differ between eBay and Aliexpress.</p>"), "\n			", HTML.Raw('<p>If you are unsure what to buy, have a look at the <a href="#guide">buying guide</a> at the bottom of this page.</p>'), "\n\n			", HTML.Raw('<a class="anchor" id="mysensors"></a>'), "\n			", HTML.Raw("<h3>MySensors Products</h3>"), "\n			", HTML.Raw('<p>The MySensors Sensebender boards are being manufactured and shipped by our partner <a href="http://imall.iteadstudio.com/">Itead Studio</a>.</p>'), " \n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("mysensors")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="arduinos"></a>'), "\n			", HTML.Raw("<h3>Arduino compatible boards and Programmers</h3>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("arduinos")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="radios"></a>'), "\n			", HTML.Raw("<h3>Radios</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("radios")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="esps"></a>'), "\n			", HTML.Raw("<h3>ESP8266 Modules and Accessories</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("esp8266")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n\n			", HTML.Raw('<a class="anchor" id="accessories"></a>'), "\n			", HTML.Raw("<h3>Accessory Modules</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("accessories")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="regulators"></a>'), "\n			", HTML.Raw("<h3>Regulators</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("regulators")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="batteries"></a>'), "\n			", HTML.Raw("<h3>Batteries and Power Sources</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("battery")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n\n			", HTML.Raw('<a class="anchor" id="controllers"></a>'), "\n			", HTML.Raw("<h3>Controllers</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("controllers")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="ethernet"></a>'), "\n			", HTML.Raw("<h3>Ethernet</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("ethernet")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="cables"></a>'), "\n			", HTML.Raw("<h3>Cables and Prototyping</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("cables")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="soldering"></a>'), "\n			", HTML.Raw("<h3>Soldering</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("soldering")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="components"></a>'), "\n			", HTML.Raw("<h3>Components</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("components")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="buttons"></a>'), "\n			", HTML.Raw("<h3>Buttons and Rotary Switches</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("buttons")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="temperature"></a>'), "\n			", HTML.Raw("<h3>Temperature and Humidity</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("temperature")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="wind"></a>'), "\n			", HTML.Raw("<h3>Wind and Meteorology</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("wind")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="distance"></a>'), "\n			", HTML.Raw("<h3>Distance</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("distance")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="power"></a>'), "\n			", HTML.Raw("<h3>Power and Current Measurements</h3>"), "\n			", HTML.Raw('<p><strong><i class="fa fa-exclamation-triangle"></i> CAUTION:</strong> Working with high power application is dangerous should only be done by a qualified person.</p>'), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("power")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n\n			", HTML.Raw('<a class="anchor" id="pressure"></a>'), "\n			", HTML.Raw("<h3>Force and Bending</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("pressure")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="light"></a>'), "\n			", HTML.Raw("<h3>Light, color and IR</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("light")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="leds"></a>'), "\n			", HTML.Raw("<h3>Leds</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("leds")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="motion"></a>'), "\n			", HTML.Raw("<h3>Motion and Sound</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("motion")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n\n			", HTML.Raw('<a class="anchor" id="water"></a>'), "\n			", HTML.Raw("<h3>Water and Soil</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("water")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="gas"></a>'), "\n			", HTML.Raw("<h3>Gas</h3>"), "\n			A more detailed descriptions of the different gas sensors is available ", HTML.Raw('<a href="http://playground.arduino.cc/Main/MQGasSensors">here</a>'), ".\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("gas")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="display"></a>'), "\n			", HTML.Raw("<h3>Displays</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("display")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="camera"></a>'), "\n			", HTML.Raw("<h3>Cameras</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("camera")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="relays"></a>'), "\n			", HTML.Raw("<h3>Relays</h3>"), "\n			", HTML.Raw('<p><strong><i class="fa fa-exclamation-triangle"></i> CAUTION:</strong> Working with high power application is dangerous should only be done by a qualified person.</p>'), "\n\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("relays")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="locks"></a>'), "\n			", HTML.Raw("<h3>Locks and Doors</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("locks")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="servos"></a>'), "\n			", HTML.Raw("<h3>Servos and Stepper motors</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("servos")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="boxes"></a>'), "\n			", HTML.Raw("<h3>Boxes and Enclosures</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("boxes")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="3d"></a>'), "\n			", HTML.Raw("<h3>3D Printers and Accessories</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("printing")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="tools"></a>'), "\n			", HTML.Raw("<h3>Tools</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("tools")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			", HTML.Raw('<a class="anchor" id="instruments"></a>'), "\n			", HTML.Raw("<h3>Lab Instruments</h3>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("instruments")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n\n			", HTML.Raw('<a class="anchor" id="guide"></a>'), "\n			", HTML.Raw("<h3>Buying Guide</h3>"), "\n			", HTML.Raw('<div class="storeDescription">\n			<p>To start your sensor-building career you must have a small starting kit. It should probably consist of some Arduinos, radios, cables and sensors. Here is a buying guide for 10 wireless sensors.</p>\n\n			<h4>Base components</h4>\n\n			<ul class="fa-ul">\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#radios">10pcs of radio modules</a> for communicating with your sensors. If you have a large area to cover, have a look at the antenna version for the gateway and repeater nodes. </li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#cables">160pcs of Female to Female cables</a> for connecting radio and sensors. </li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#cables">80pcs of Female to Male cables</a> for connecting sensors and breadboard. </li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#cables">80pcs of Male to Male cables</a> for Arduino Uno and breadboard. </li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#cables">A prototyping breadboard</a> can also be handy when trying out your ideas.</li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#soldering">Capacitors</a> to stabilize power to the radio module.</li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#soldering">Pull-up-resistors</a> for your temperature sensors.</li>\n\n				<li><i class="fa-li fa fa-check-square-o"></i><a href="#temperature">	Also remember to select some cool sensors</a> . We\'ve tried to list many different useful sensors in the shop. Try to find the once suitable for your project. Temperature probes and humidity sensors is always good to have. Some relays for controlling things. Reed switches to get door/window statuses. Maybe you also want to detect motion? </li>\n			</ul>\n\n			<h4 id="ca">Choosing Arduino Clone</h4>\n			<p>You\'ll have to select a good mix of boards for your sensor projects.</p>\n\n\n			<ul class="fa-ul">\n				<li><i class="fa-li fa fa-thumbs-up"></i><img src="/arduino/Nano.png">\n						<h5>Easy and flexible</h5>\n					<p><a href="#arduinos">Nano</a> is easy to program (USB connector is build in). It has both 5V and 3.3V output so you can hook up both radio and 5V sensors without fiddling with regulators. Power it from computer or any type of 5V USB wall-wart. Note: If you want to build an Arduino gateway for the <a href="/controller/vera">Vera controller</a> you will need one of these!\n					</p></li>\n				<li><i class="fa-li fa fa-thumbs-up"></i><img src="/arduino/ProMini.png">\n					<h5>Cheap and flexible</h5>\n					<p><a href="#arduinos">Pro Mini 5V</a> is great if you want to build super cheap sensors (nanos can be a bit pricey). </p>\n					<p>There is only one little problem with this module that need to be addressed and that is how to feed the radio with the correct 3.3V power. Luckily you can use a <a href="#regulators">5V to 3.3V regulator</a>.</p>\n					<p>Pro mini is missing USB connections. To be able to download programs to the module, you will also need a <a href="#arduinos">FTDI USB to TTL Serial Adapter</a>. </p></li>\n				<li><i class="fa-li fa fa-thumbs-up"></i><img src="/arduino/ProMini.png">\n						<h5>Battery operated</h5>\n					<p><a href="#arduinos">Pro Mini 3.3V</a> is great for battery operated sensors.</p>\n					<p>No regulator is needed for the radio, but if you are using sensors that requiring 5V (like PIR) you might also need a <a href="#regulators">step-up regulator</a>.</p>\n					<p>Like 5V version, you will also need a <a href="#arduinos">FTDI USB to TTL Serial Adapter</a>. <strong>Make sure to run it in 3.3V mode!</strong></p></li>\n				<li><i class="fa-li fa fa-thumbs-up"></i><img src="/arduino/Uno_R3.png">\n						<h5>For playing</h5>\n					<p><strong>Uno R3</strong> is bigger and it is much easier to reach all connectors. When testing and playing around we recommend to have one of these. There are also a lot of fun shields (add-ons) available for Uno R3.</p> </li>\n			</ul>\n			<br>\n			<br>\n			<br>\n			<br>\n			<br>\n			<br>\n			<br>\n			</div>'), "\n		") ];
}));

Template.__checkName("storeCategoryHolder");
Template["storeCategoryHolder"] = new Template("Template.storeCategoryHolder", (function() {
  var view = this;
  return [ HTML.Raw('<div class="clearfix"></div>\n\n	'), HTML.DIV({
    "class": "storeCategory",
    id: function() {
      return [ "r_", Spacebars.mustache(view.lookup("category")) ];
    }
  }) ];
}));

Template.__checkName("storeCategory");
Template["storeCategory"] = new Template("Template.storeCategory", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row",
    style: "padding-left:0px; padding-right:0px"
  }, "\n	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("items"));
  }, function() {
    return [ "\n	", HTML.DIV({
      "class": function() {
        return [ "col-sm-6 col-lg-6 col-md-6 ", Spacebars.mustache(view.lookup("class")) ];
      }
    }, "\n	", HTML.DIV({
      "class": "shopBorder"
    }, "\n		", HTML.DIV({
      "class": "shopImageField"
    }, "\n				", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("pic"));
      },
      "class": "img-rounded shopImage"
    }), "\n		"), "\n		", HTML.H5({
      "class": "shopHeader"
    }, Blaze.If(function() {
      return Spacebars.call(view.lookup("new"));
    }, function() {
      return HTML.SPAN({
        "class": "shopNewTitle"
      }, "New! ");
    }), Blaze.View("lookup:title", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));
    })), "\n		", HTML.P(Blaze.View("lookup:description", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("description")));
    })), "\n		", HTML.DIV({
      "class": "clearShop"
    }, "\n		", Blaze.If(function() {
      return Spacebars.call(view.lookup("mysensors"));
    }, function() {
      return [ "\n			", HTML.DIV({
        "class": "shopStock"
      }, "\n				 ", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "url"));
        }
      }, HTML.IMG({
        src: "/shop/iteadImall.png"
      })), "\n				 ", HTML.DIV({
        "class": "pull-right"
      }, "\n					", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "url"));
        }
      }, HTML.SPAN({
        style: function() {
          return [ "color:", Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "color")) ];
        }
      }, Blaze.View("lookup:mysensors.stockText", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "stockText"));
      }), " - $", Blaze.View("lookup:mysensors.price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "price"));
      }))), HTML.CharRef({
        html: "&nbsp;",
        str: " "
      }), "\n					", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("mysensors"), "ok"));
      }, function() {
        return HTML.A({
          "class": "btn btn-xs btn-primary",
          href: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("mysensors"), "url"));
          },
          role: "button"
        }, HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.I({
          "class": "fa fa-shopping-cart"
        }), " Buy ", HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }));
      }), "\n				"), "\n			"), "\n		" ];
    }), "\n		", Blaze.If(function() {
      return Spacebars.call(view.lookup("ebay"));
    }, function() {
      return [ "\n			", HTML.DIV({
        "class": "shopStock"
      }, "\n				 ", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "url"));
        }
      }, HTML.IMG({
        src: "/shop/ebay.png"
      })), "\n				 ", HTML.DIV({
        "class": "pull-right"
      }, "\n					", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "url"));
        }
      }, HTML.SPAN({
        style: function() {
          return [ "color:", Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "color")) ];
        }
      }, Blaze.View("lookup:ebay.stockText", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "stockText"));
      }), " - $", Blaze.View("lookup:ebay.price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "price"));
      }))), HTML.CharRef({
        html: "&nbsp;",
        str: " "
      }), "\n					", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("ebay"), "ok"));
      }, function() {
        return HTML.A({
          "class": "btn btn-xs btn-primary",
          href: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("ebay"), "url"));
          },
          role: "button"
        }, HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.I({
          "class": "fa fa-shopping-cart"
        }), " Buy ", HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }));
      }), "\n				"), "\n			"), "\n		" ];
    }), "\n		", Blaze.If(function() {
      return Spacebars.call(view.lookup("ali"));
    }, function() {
      return [ "\n			", HTML.DIV({
        "class": "shopStock"
      }, "\n				", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "url"));
        }
      }, HTML.IMG({
        src: "/shop/ali.png"
      })), "\n				", HTML.DIV({
        "class": "pull-right"
      }, "\n					", HTML.A({
        href: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "url"));
        }
      }, HTML.SPAN({
        style: function() {
          return [ "color:", Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "color")) ];
        }
      }, Blaze.View("lookup:ali.stockText", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "stockText"));
      }), " - $", Blaze.View("lookup:ali.price", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "price"));
      }))), HTML.CharRef({
        html: "&nbsp;",
        str: " "
      }), "\n					", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("ebay"), "ok"));
      }, function() {
        return HTML.A({
          "class": "btn btn-xs btn-primary",
          href: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("ali"), "url"));
          },
          role: "button"
        }, HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.I({
          "class": "fa fa-shopping-cart"
        }), " Buy ", HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }), HTML.CharRef({
          html: "&nbsp;",
          str: " "
        }));
      }), "\n				"), "\n			"), "\n		" ];
    }), "\n		"), "\n		"), "\n		"), "\n	 " ];
  }), "\n	 ");
}));

Template.__checkName("storeItem");
Template["storeItem"] = new Template("Template.storeItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-6",
    id: function() {
      return Spacebars.mustache(view.lookup("itemId"));
    }
  }, "\n	", HTML.DIV(HTML.Attrs({
    "class": "col-md-2 shopImageIndent"
  }, function() {
    return Spacebars.attrMustache(view.lookup("id"));
  }), "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("pictureURL"));
  }, function() {
    return [ "\n		", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("url"));
      }
    }, HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("pictureURL"));
      },
      "class": "img-rounded shopImage"
    })), "\n		" ];
  }), HTML.Raw("<br>"), "\n	"), "\n	", HTML.DIV({
    "class": "col-md-4"
  }, "\n		", HTML.H5(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));
  }))), "\n		", HTML.DIV({
    "class": "storeDescription"
  }, Blaze.View("lookup:description", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("description")));
  })), "\n		", HTML.Raw("<br>"), Blaze.If(function() {
    return Spacebars.call(view.lookup("ok"));
  }, function() {
    return HTML.A({
      "class": "btn btn-sm btn-primary pull-right",
      href: function() {
        return Spacebars.mustache(view.lookup("url"));
      },
      role: "button"
    }, "Buy!");
  }), "\n\n		", HTML.DIV({
    style: "padding-top:4px"
  }, Blaze.View("lookup:price", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("price")));
  })), "\n	"), "\n	");
}));

}).call(this);
