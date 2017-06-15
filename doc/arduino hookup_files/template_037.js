(function(){
Template.__checkName("build_connect_radio");
Template["build_connect_radio"] = new Template("Template.build_connect_radio", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n				<h1>Connecting the Radio to your Arduino</h1>\n				"), HTML.DIV({
    "class": "well"
  }, "\n\n						 ", HTML.Raw('<a href="/radio/closeup.png" data-lightbox="image-finding" title="NRF24L01+"><img src="/radio/closeup.png" style="width:200px;float:right;padding-left:20px"></a>'), "\n						", HTML.Raw("<p>The NRF24L01+ and RFM69 transceiver communicates with the Arduino board via the SPI interface. It is important to always feed the radios with a stable power source of <strong>3.3V</strong>.</p>"), "\n						", HTML.Raw("<p>Refer to the notes about using a regulator or a coupling-capacitor below.</p>"), "\n\n\n						", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n						", HTML.Raw("<h2>Wiring the NRF24L01+ Radio</h2>"), "\n						", HTML.Raw("<p><strong>NOTE:</strong> The input pins on the NRF24L01+ is 5V tolerant. However, you cannot feed the module with more than 3.3V on VCC. If you use a 5V Arduino you have to use a step-down regulator!</p>"), "\n\n						", HTML.DIV({
    "class": "row"
  }, "\n								", HTML.Raw('<div class="col-md-4">\n												<a href="/radio/APM.png" data-lightbox="image-finding" title="Arduino"><img src="/radio/APM.png" class="img-responsive"></a>\n								</div>'), "\n							 ", HTML.DIV({
    "class": "col-md-4"
  }, "\n										", HTML.TABLE({
    "class": "table table-curved"
  }, "\n												", HTML.TR(HTML.TH("Arduino"), HTML.TH("NRF24L01+"), HTML.TH("Comment")), "\n												", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD({
    style: "color:black"
  }, "Black")), "\n												", HTML.TR(HTML.TD({
    style: "white-space:nowrap;"
  }, "5V", HTML.I({
    "class": "fa fa-arrow-right"
  }), "Reg", HTML.BR(), "3.3V"), HTML.TD("VCC"), HTML.TD({
    style: "color:red"
  }, "Red")), "\n												", HTML.TR(HTML.TD("9"), HTML.TD("CE"), HTML.TD({
    style: "color:orange"
  }, "Orange")), "\n												", HTML.TR(HTML.TD("10"), HTML.TD("CSN/CS"), HTML.TD({
    style: "color:yellow"
  }, "Yellow")), "\n												", HTML.TR(HTML.TD("13"), HTML.TD("SCK"), HTML.TD({
    style: "color:green"
  }, "Green")), "\n												", HTML.TR(HTML.TD("11"), HTML.TD("MOSI"), HTML.TD({
    style: "color:blue"
  }, "Blue")), "\n												", HTML.TR(HTML.TD("12"), HTML.TD("MISO"), HTML.TD({
    style: "color:violet"
  }, "Violet")), "\n												", HTML.TR(HTML.TD("2"), HTML.TD("IRQ"), HTML.TD({
    style: "color:gray"
  }, "Gray")), "\n										"), "\n										", HTML.Raw("<p>Note: The IRQ is currently not used by the MySensors library so it can be left un-connected.</p>"), "\n\n								"), "\n							 ", HTML.Raw('<div class="col-md-4">\n										<a href="/radio/nrfTop.png" data-lightbox="image-finding" title="The output pins of the Radio"><img src="/radio/nrfTop.png" class="img-responsive"></a><br>\n										<br>\n										<a href="/vera/gw.jpg" data-lightbox="image-finding" title="Arduino Nano connected to a NRF24L01">\n										<img src="/vera/gw.jpg" class="img-responsive"> </a>\n								</div>'), "\n						"), "\n\n						", HTML.Raw("<h2>Wiring the RFM69 Radio</h2>"), "\n						", HTML.Raw('<p><strong>NOTE:</strong> The NSS, MOSI and SCK are not 5V tolerant on RFM69. You will need to use a <a href="/store/#accessories">level converter</a> if you\'re using a 5V Arduino.</p>'), "\n						", HTML.DIV({
    "class": "row"
  }, "\n								", HTML.Raw('<div class="col-md-4">\n												<a href="/radio/APM.png" data-lightbox="image-finding" title="Arduino"><img src="/radio/APM.png" class="img-responsive"></a>\n								</div>'), "\n							 ", HTML.DIV({
    "class": "col-md-4"
  }, "\n										", HTML.TABLE({
    "class": "table table-curved"
  }, "\n												", HTML.TR(HTML.TH("Arduino"), HTML.TH("RFM69"), HTML.TH("Comment")), "\n												", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD({
    style: "color:black"
  }, "Black")), "\n												", HTML.TR(HTML.TD("3.3V"), HTML.TD("VCC"), HTML.TD({
    style: "color:red"
  }, "Red")), "\n												", HTML.TR(HTML.TD("10"), HTML.TD("NSS"), HTML.TD({
    style: "color:yellow"
  }, "Yellow")), "\n												", HTML.TR(HTML.TD("13"), HTML.TD("SCK"), HTML.TD({
    style: "color:green"
  }, "Green")), "\n												", HTML.TR(HTML.TD("11"), HTML.TD("MOSI"), HTML.TD({
    style: "color:blue"
  }, "Blue")), "\n												", HTML.TR(HTML.TD("12"), HTML.TD("MISO"), HTML.TD({
    style: "color:violet"
  }, "Violet")), "\n												", HTML.TR(HTML.TD("2"), HTML.TD("DI00"), HTML.TD({
    style: "color:gray"
  }, "Gray")), "\n												", HTML.TR(HTML.TD(), HTML.TD("ANA"), "Antenna"), "\n										"), "\n								"), "\n							 ", HTML.Raw('<div class="col-md-4">\n										<a href="/radio/RFM69.png" data-lightbox="image-finding" title="The output pins of the Radio"><img src="/radio/RFM69.png" class="img-responsive"></a><br>\n								</div>'), "\n						"), "\n\n\n\n\n						", HTML.Raw("<h2>Connecting a Decoupling-Capacitor</h2>"), "\n						", HTML.Raw("<p>If you experience bad reception or if transmitted data never reaches destination, try adding a decoupling capacitor of 47µF across the radio's 3.3V and GND. </p>"), "\n						", HTML.DIV({
    "class": "row"
  }, "\n								", HTML.DIV({
    "class": "col-md-4"
  }, "\n										", HTML.TABLE({
    "class": "table table-curved"
  }, "\n												", HTML.TR(HTML.TH("Capacitor"), HTML.TH("Radio"), HTML.TH("Comment")), "\n												", HTML.TR(HTML.TD("- side"), HTML.TD("GND"), HTML.TD({
    style: "color:black"
  }, "Marked Black")), "\n												", HTML.TR(HTML.TD("+ side"), HTML.TD("3.3V"), HTML.TD({
    style: "color:red"
  }, "Marked Red")), "\n										"), "\n								"), "\n								", HTML.Raw('<div class="col-md-8">\n												<a href="/radio/capacitor.png" data-lightbox="image-finding" title="Capacitor"><img src="/radio/capacitor.png" class="img-responsive"></a>\n												The side with "&lt; - &lt; - "-marking should be connected to GND\n								</div>'), "\n						"), "\n\n						", HTML.Raw("<h2>Connecting a Voltage Regulator</h2>"), "\n						", HTML.Raw("<p><strong>NOTE:</strong> If you are using the 5V version of Arduino Pro Mini (that lacks the 3.3V regulated output) you'll have to connect a 5V->3.3V regulator between the Arduino and Radio.</p>"), "\n						", HTML.DIV({
    "class": "row"
  }, "\n								", HTML.DIV({
    "class": "col-md-4"
  }, "\n										", HTML.TABLE({
    "class": "table table-curved"
  }, "\n												", HTML.TR(HTML.TH("Arduino"), HTML.TH("Regulator"), HTML.TH("Radio")), "\n												", HTML.TR(HTML.TD("5V"), HTML.TD("Vin"), HTML.TD()), "\n												", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("GND")), "\n												", HTML.TR(HTML.TD(), HTML.TD("Vout"), HTML.TD({
    style: "color:red"
  }, "VCC")), "\n										"), "\n								"), "\n								", HTML.Raw('<div class="col-md-8">\n										<a href="/radio/662K.png" data-lightbox="image-finding" title="662K regulator"><img src="/radio/662K.png" style="height:200px"></a>\n										<a href="/radio/LE33CZ.png" data-lightbox="image-finding" title="LE33CZ regulator"><img src="/radio/LE33CZ.png" style="height:200px"></a>\n								</div>'), "\n						"), "\n\n\n						", HTML.Raw("<h2>Buying Guide</h2>"), "\n						", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_radio")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n						", HTML.Raw("<h2>Datasheets</h2>"), "\n						", HTML.Raw('<a href="/radio/antenna.png" data-lightbox="image-finding" title="NRF24L01+ Amplified Antenna Version"><img src="/radio/antenna.png" style="width:200px;float:right;padding-left:20px; padding-right:20px"></a>'), "\n\n\n						 ", HTML.Raw('<a href="/radio/nRF24L01.jpg" data-lightbox="image-finding" title="NRF24L01+ Pack"><img src="/radio/nRF24L01.jpg" style="width:200px;float:right;padding-left:20px"></a>'), "\n\n						", HTML.Raw('<a href="/radio/nRF24L01Plus.pdf">NRF24L01+</a>'), HTML.Raw("<br>"), "\n						", HTML.Raw('<a href="/radio/LE33CZ.pdf">LE33CZ Regulator</a>'), HTML.Raw("<br>"), "\n						", HTML.Raw('<a href="/radio/662k.pdf">662K Regulator</a>'), HTML.Raw("<br>"), "\n\n						", HTML.Raw("<br>"), "\n						", HTML.Raw("<br>"), "\n						", HTML.Raw("<br>"), "\n						", HTML.Raw("<br>"), "\n\n				"), "\n		");
}));

}).call(this);
