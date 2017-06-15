(function(){
Template.__checkName("build_ethernet_gateway");
Template["build_ethernet_gateway"] = new Template("Template.build_ethernet_gateway", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Building Ethernet Gateway</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<a href="/vera/ethernetGW.jpg" data-lightbox="image-finding" title="Ethernet Gateway"><img src="/vera/ethernetGW.jpg" style="width:40%;float:right;padding-left:20px"></a>'), "\n			", HTML.Raw("<p>You can build an Ethernet gateway using almost any Arduino model.</p>"), "\n			", HTML.Raw("<p>There are a couple of different Ethernet modules on the market. We recommend using the WizNet W5100 which offloads the Arduino MCU and leaves more memory for the gateway code.</p>"), "\n\n			", HTML.Raw("<h2>Wiring Things Up</h2>"), "\n			", HTML.Raw("<p>The radio module must connected a little differently than the standard sensor connections so make sure to carefully follow the wiring instructions below.</p>"), "\n\n			", HTML.Raw("<h3>WizNET (W5100) Ethernet module</h3>"), "\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.DIV({
    "class": "col-md-8"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved"
  }, "\n						", HTML.TR(HTML.TH("Arduino"), HTML.TH("NRF24L01 Radio"), HTML.TH("Ethernet module")), "\n						", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("GND")), "\n						", HTML.TR(HTML.TD("3.3V"), HTML.TD("VCC"), HTML.TD("VCC")), "\n						", HTML.TR(HTML.TD("13"), HTML.TD(), HTML.TD("SCK")), "\n						", HTML.TR(HTML.TD("12"), HTML.TD(), HTML.TD("MISO/SO")), "\n						", HTML.TR(HTML.TD("11"), HTML.TD(), HTML.TD("MOSI/SI")), "\n						", HTML.TR(HTML.TD("10"), HTML.TD(), HTML.TD("SS/CS")), "\n						", HTML.TR(HTML.TD("A2"), HTML.TD("MISO"), HTML.TD()), "\n						", HTML.TR(HTML.TD("A1"), HTML.TD("MOSI"), HTML.TD()), "\n						", HTML.TR(HTML.TD("A0"), HTML.TD("SCK"), HTML.TD()), "\n						", HTML.TR(HTML.TD("6"), HTML.TD("CSN"), HTML.TD()), "\n						", HTML.TR(HTML.TD("5"), HTML.TD("CE"), HTML.TD()), "\n					"), "\n\n				"), "\n				", HTML.Raw('<div class="col-md-4">\n\n					<a href="/gateway/wiznet.png" data-lightbox="image-finding" title="WizNet">\n						<img src="/gateway/wiznet.png" class="img-responsive"> </a>\n\n				</div>'), "\n			"), "\n			", HTML.Raw('<div class="row">\n				<div class="col-md-12">\n					<p>The W5100 ethernet module has problems sharing SPI with radio.\n							To solve this you have to wire the radio a little differently and use a soft-spi fix in the NRF24L01 code.</p>\n					<p>To enable soft-spi you just have to edit MyConfig.h which can be found in your <b>XXX/libraries/MySensors/MyConfig.h</b> folder.\n						Just remove the commented slashes (//) before "<strong>#define SOFTSPI</strong>".</p>\n\n						<p><b>NOTE:</b> This fix must be reverted back when you have compiled and uploaded code to your gateway.<br>\n						The normal sensors don\'t need SOFTSPI enabled and if you leave this in, you can\'t use the wiring guides for the sensors on this site.</p>\n				</div>\n			</div>'), "\n\n\n				", HTML.Raw("<h3>ENC28J60 Ethernet module</h3>"), "\n				", HTML.DIV({
    "class": "row"
  }, "\n					", HTML.DIV({
    "class": "col-md-8"
  }, "\n						", HTML.TABLE({
    "class": "table table-curved"
  }, "\n							", HTML.TR(HTML.TH("Arduino"), HTML.TH("NRF24L01 Radio"), HTML.TH("Ethernet module")), "\n							", HTML.TR(HTML.TD("GND"), HTML.TD("GND"), HTML.TD("GND")), "\n							", HTML.TR(HTML.TD("3.3V"), HTML.TD("VCC"), HTML.TD("VCC")), "\n							", HTML.TR(HTML.TD("13"), HTML.TD("SCK"), HTML.TD("SCK")), "\n							", HTML.TR(HTML.TD("12"), HTML.TD("MISO"), HTML.TD("MISO/SO")), "\n							", HTML.TR(HTML.TD("11"), HTML.TD("MOSI"), HTML.TD("MOSI/SI")), "\n							", HTML.TR(HTML.TD("10"), HTML.TD(), HTML.TD("SS/CS")), "\n							", HTML.TR(HTML.TD("6"), HTML.TD("CSN"), HTML.TD()), "\n							", HTML.TR(HTML.TD("5"), HTML.TD("CE"), HTML.TD()), "\n						"), "\n\n					"), "\n					", HTML.Raw('<div class="col-md-4">\n						<a href="/radio/nrfTop.png" data-lightbox="image-finding" title="The output pins of the Radio"><img src="/radio/nrfTop.png" class="img-responsive"></a><br>\n						<br>\n					</div>'), "\n				"), "\n				", HTML.Raw('<div class="row">\n					<div class="col-md-12">\n						<p>For ENC28J60 you have to enable correct Ethernet library as illustrated below (in your sketch code): </p>\n						<pre><code class="cpp">#include &lt;UIPEthernet.h>  // Use this if you have attached a Ethernet ENC28J60 shields\n//#include &lt;Ethernet.h>   // Use this for WizNET module and Arduino Ethernet Shield </code></pre>\n						<p>Note that the ENC28J60 mdoule uses much more memory than W5100. You probably have to disable DEBUG in MyConfig.h to make it compile.</p>\n					</div>\n				</div>'), "\n\n				", HTML.Raw("<h2>Configuration</h2>"), "\n\n					", HTML.Raw("<p>Select the static IP address and port you want to use for the gateway.</p>"), "\n					", HTML.Raw('<pre><code class="cpp">#define IP_PORT 5003        // The port you want to open\nIPAddress myIp (192, 168, 178, 66);  // Configure your static ip here</code></pre>'), "\n\n						", HTML.Raw("<p>Finally, compile and upload the  gateway sketch using the Arduino IDE on your computer or Codebender below.</p>"), "\n\n						", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47522"),
      name: Spacebars.call("EthernetGateway")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n						", HTML.Raw("<h2>Buying Guide</h2>"), "\n						", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_ethernet"),
      name: Spacebars.call("EthernetGateway")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n					"), "\n				");
}));

}).call(this);
