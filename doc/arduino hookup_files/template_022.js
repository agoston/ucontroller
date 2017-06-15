(function(){
Template.__checkName("build_mqtt_gateway");
Template["build_mqtt_gateway"] = new Template("Template.build_mqtt_gateway", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Building MQTT Gateway</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n			", HTML.Raw('<a href="/vera/ethernetGW.jpg" data-lightbox="image-finding" title="Ethernet Gateway"><img src="/vera/ethernetGW.jpg" style="width:40%;float:right;padding-left:20px"></a>'), "\n\n			", HTML.Raw('<p>The MQTT gateway is basically a Ethernet Gateway with modified software which makes it act as a MQTT broker. Start by building the physical gateway by following <a href="/build/ethernet_gateway">ethernet gateway</a>  instructions </p>'), "\n\n			", HTML.Raw("<h2>Configuration</h2>"), "\n\n			", HTML.Raw("<p>The MQTT gateway sketch contains some static configuration like ip- and port number. Please update these values to fit your needs before uploading it.</p>"), "\n			", HTML.Raw('<pre><code class="cpp">#define TCP_PORT 1883                         // Set your MQTT Broker Listening port.\nIPAddress TCP_IP ( 192, 168, 0, 234 );        // Configure your static ip-address here</code></pre>'), "\n\n			", HTML.Raw("<p>Finally, compile and upload the  gateway sketch using the Arduino IDE on your computer or Codebender below.</p>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47530"),
      name: Spacebars.call("MQTTGateway")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_ethernet")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n		"), "\n	");
}));

}).call(this);
