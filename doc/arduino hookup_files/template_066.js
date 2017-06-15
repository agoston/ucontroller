(function(){
Template.__checkName("hardware_ceech");
Template["hardware_ceech"] = new Template("Template.hardware_ceech", (function() {
  var view = this;
  return HTML.Raw('<h1>The ceech board</h1>\n		<div class="well relative">\n		<a href="/hardware/atm2.jpg" data-lightbox="image-finding" title="ceech board"><img src="/hardware/atm2.jpg" style="float:right;;padding-left:20px; width:300px"></a>\n\n		<h2>Description</h2>\n\n		<p>This board is perfect for low-power applications. Nearly identical footprint as an Arduino PRO.\n			 It is intended for sensor applications and can be used as an universal board for different kinds of sensor nodes.</p>\n		<p>Dimensions are 2 inch x 2.1 inch (1mm narrower than Arduino PRO, to fit into 2inch slot of an enclosure).</p>\n		<p>Fully Arduino compatible with Arduino PRO Mini 3.3V @ 8MHz bootlader</p>\n		<div class="clearfix"></div>\n\n		<h2>Key Features</h2>\n		<p>Here are some key features of the board.</p>\n\n\n		<a href="/hardware/atm_nrf.jpg" data-lightbox="image-finding" title="NRF24l01+ port">\n		<img alt="NRF24l01+ port" src="/hardware/atm_nrf.jpg" style="float:right;;padding-left:20px; height:60px"></a>\n		<h4>NRF24l01+ radio breakout port</h4>\n		<p> - with CE and CSN pins connected to digital pins 7 and 8 (you must update MyConfig.h with these values). There is a 4.7uF capacitor connected across Vin and GND of the port</p>\n		<div class="clearfix"></div>\n\n		<h4>LDO voltage regulator</h4>\n		<p>- board comes with an MCP1703 3.3V.</p>\n		<div class="clearfix"></div>\n\n		<a href="/hardware/atm_sda.jpg" data-lightbox="image-finding" title="I2C port">\n		<img alt="I2C port" src="/hardware/atm_sda.jpg" style="float:right;;padding-left:20px;height:60px"></a>\n		<h4>Two breakout ports with SDA, SCL lines</h4>\n		<p> - 10k pull-up resistors for external I2C components, connected to A4 and A5</p>\n\n		<div class="clearfix"></div>\n\n		<a href="/hardware/atm_esp.jpg" data-lightbox="image-finding" title="ESP8266 port">\n		<img alt="ESP8266 port" src="/hardware/atm_esp.jpg" style="float:right;;padding-left:20px; height:60px"></a>\n		<h4>ESP8266 port</h4>\n		<p>- breakout pins are for power supply and GND connections. Top one is power, bottom one is GND. RX and TX pins are not connected to ATMega328p, not to interfere with programming.</p>\n		<div class="clearfix"></div>\n\n		<a href="/hardware/atm_mosfet.jpg" data-lightbox="image-finding" title="N-MOSFET">\n		<img alt="N-MOSFET" src="/hardware/atm_mosfet.jpg" style="float:right;;padding-left:20px;height:60px"></a>\n		<h4>3A 30V N-channel Mosfet</h4>\n		<p>- for regulating external components such as solenoids. The gate is connected to D4 and the output is protected with a Schottky diode.</p>\n		<div class="clearfix"></div>\n\n		<a href="/hardware/atm_led.jpg" data-lightbox="image-finding" title="Low power LED with solder jumper">\n		<img alt="Low power LED with solder jumper" src="/hardware/atm_led.jpg" style="float:right;padding-left:20px;height:60px"></a>\n		<h4>Low power (2mA) LED diodes</h4>\n		<p>- that are connected via solder jumpers. Jumpers need to be soldered in.</p>\n		<div class="clearfix"></div>\n\n		<p>On the back of the board there is place for: BMP180 pressure sensor, an additional EEPROM, a SHT21 temperature and humidity sensor and for TC series N-channel MOSFET driver.</p>\n\n\n		<h2>Buy</h2>\n\n		<p><b>Price €13.80</b>. International shipping from Slovenia included. </p>\n		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n		<input type="hidden" name="cmd" value="_s-xclick">\n		<input type="hidden" name="hosted_button_id" value="8RHB5K8J4PS5Y">\n		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n		<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n		</form>\n		<p><i>10% of the revenue from the sales will be donated to support the MySensors project.</i></p>\n		<small>Note that you are buying this board directly from the creator and the MySensors project is not involved in any part of the transaction between you and the seller.\n			The MySensors project does not provide support or accept any liability whatsoever in regard to the goods supplied.</small>\n\n		<!--\n		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="padding-top:10px">\n		<input type="hidden" name="cmd" value="_s-xclick">\n		<input type="hidden" name="hosted_button_id" value="VL94Z2W44DGXN">\n		<table>\n		<tr><td><input type="hidden" name="on0" value="Voltage regulator:">Select voltage regulator type and click "Buy Now":</td></tr><tr><td><select name="os0">\n			<option value="AMS1117 3.3V">1x AMS1117 equipped board @3.3V - €9.90 EUR (+ shipping €3.90)</option>\n			<option value="TC2117 3.3V">1x TC2117 equipped board @3.3V - €10.30 EUR (+ shipping €3.90) </option>\n		</select> </td></tr>\n		</table>\n		<input type="hidden" name="currency_code" value="EUR">\n		<input type="image" style="padding-top:10px" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n		<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n\n		</form>\n		<p>International shipping from Slovenia included.</p>\n		<p><i>10% of the revenue from the sales will be donated to support the MySensors project.</i></p>\n		<small>Note that you are buying this board directly from the creator and the MySensors project is not involved in any part of the transaction between you and the seller.\n			The MySensors project does not provide support or accept any liability whatsoever in regard to the goods supplied.</small>\n		-->\n\n\n		<!-- b>Sold out</b> (an updated version will arrive soon) -->\n\n\n		<h2>Support &amp; Inquiries</h2>\n		Forum thread: <a href="http://forum.mysensors.org/topic/1291/">Discuss the board here</a><br>\n		Created by: <a href="http://forum.mysensors.org/user/ceech">Ceech</a><br>\n		Contact seller: <a href="mailto:roman.miklavcic@gmail.com">Roman Miklavcic</a>\n		<br>\n\n		<h2>Scematics and design files</h2>\n		<p>The design files can be downloaded <a href="https://github.com/ceech/Universal-wireless-sensor-board-w-NRF24l01-socket-and-ESP8266-socket/tree/master">here</a>.</p>\n\n		</div>');
}));

}).call(this);
