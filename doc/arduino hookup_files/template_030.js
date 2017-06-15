(function(){
Template.__checkName("build_debug");
Template["build_debug"] = new Template("Template.build_debug", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Debugging Sensors and the Gateway</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n			", HTML.Raw("<h2>Common Problems</h2>"), "\n			", HTML.Raw('<div id="rotator"><img src="/hardware/pcb.png" title="pcb" style="width:25%;float:right;"></div>'), "\n			", HTML.Raw('<ul>\n			<li>Are you using the <a href="/download">latest stable MySensors library version</a> on EVERY sensors AND the gateway? Does the Controller plugin version match the library version? </li>\n			<li>Are you really using a genuine NRF2401+? Sometimes ebay sellers send out the <a href="http://forum.mysensors.org/topic/728/radio-setup-give-check-wires">none-plus version</a> or <a href="http://forum.mysensors.org/topic/878/no-debug-data-from-sensors-or-gateway-bad-radios">HopeRF RFM73 clone</a>.</li>\n			<li>Triple-check the radio wiring. </li>\n			<li>Check the power to the radio module. It requires a <strong>stable 3.3V power source</strong>. Try <a href="/build/connect_radio#connecting-a-decoupling-capacitor">adding a decoupling capacitor</a> over the 3.3V and GND pins to minimize the ripple. Choose a cap around 47uF with low ESR if possible. Check polarity of capacitor. Or switch to a ceramic variant.</li>\n			<li>Try switching to another power source. Some cheap USB chargers give very poor output.</li>\n			<li>Powereing your sensor through your computes USB port? Make sure it has enough juice. Especially when using amplified radio version.</li>\n			<li>Keep leads between Arduino and radio short. If possible, skip the dupont cables and mount things closely on a prototype pcb board.</li>\n			<li>If you\'re using an amplified version of the NRF24L01+ chip (with an external antenna) and experience communication problems you could have problem feeding it with enough power. Try bypassing Arduinos relulator by feeding it directly from a 3.3v power source. You can also try adjusting (lowering)  the PA level. This is done by adding parameters to the begin() method or editing MyConfig.h before uploading sketch to the problematic sensor node. Note that PA level does not affect the receive sensitivity.</li>\n			<p>See the <a href="/download">MySensors Library API</a> for more information. </p>\n			<li>Some have reported big differences in reception based on the orientation of the radio.</li>\n			</ul>'), "\n\n			 ", HTML.Raw('<a href="/debug/debug.png" data-lightbox="image-finding" title="Debug prints is enabled here"><img src="/debug/debug.png" style="float:right;width:300px"></a>'), "\n			", HTML.Raw("<h2>Enabling Debug Logging</h2>"), "\n			", HTML.Raw("<p>To enable debug messages in the examples and the gateway, you need to edit the <strong>MyConfig.h</strong> file. </p>"), "\n			", HTML.Raw("<p>You'll find it under <strong>/libraries/MySensors/MyConfig.h</strong>	</p>"), "\n			", HTML.Raw("<p>Remove // before the #define DEBUG to enable debug logging in both the sensors and the gateway.</p>"), "\n\n			", HTML.Raw("<h2>Monitoring the Debug Logs</h2>"), "\n			", HTML.Raw("<p>Use the serial monitor of the Arduino IDE to see what is going on in the sensor. The sensor will print debug messages when sending and receiving data over the radio network. This if very useful information for diagnosing a problem in your setup.</p>"), "\n			", HTML.Raw("<ul>\n			<li>Build and upload the sketch with the above debug flag enabled in MyConfig.h. </li>\n			<li>Keep the sensor connected to your computer and enable the Serial Monitor in the Arduino IDE. <strong>Tools>Serial Monitor</strong>.</li>\n			<li>Set the baud-rate to <strong>115200</strong>.</li>\n			</ul>"), "\n\n			", HTML.Raw("<p>Restart the sensor and watch the debug messages in the serial monitor. </p>"), "\n\n			", HTML.Raw('<p>Confirm the "Sent successfully" messages on the sending side. On the receiving side (gateway) check that the message arrives and that CRC checksum (cr) is the same as the sending sending side.</p>'), "\n\n			", HTML.Raw("<h2>Clearing EEPROM</h2>"), "\n			", HTML.Raw("<p>Your sensors contains a small static memory (EEPROM). This will hold information about the unique id of your sensor and routing information. On rare occasions you might need to clear this memory back to the factory default. </p>"), "\n			", HTML.Raw("<p>To clear the EEPROM memory, upload the following sketch to your sensor or gateway (and wait 20 seconds).</p>"), "\n			", HTML.P(Blaze._TemplateWith(function() {
    return {
      repo: Spacebars.call("Arduino"),
      path: Spacebars.call("libraries/MySensors/examples/ClearEepromConfig"),
      name: Spacebars.call("ClearEepromConfig.ino")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dl"));
  })), "\n			", HTML.Raw("<h2>More Troubleshooting Tips</h2>"), "\n			", HTML.Raw('<iframe class="youtube" src="https://www.youtube.com/embed/vehinrWbxpw" frameborder="0" allowfullscreen=""></iframe>'), "\n\n		"), "\n	");
}));

}).call(this);
