(function(){
Template.__checkName("build_serial_gateway");
Template["build_serial_gateway"] = new Template("Template.build_serial_gateway", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Building Serial Gateway</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n			", HTML.Raw('<a href="/vera/gw.jpg" data-lightbox="image-finding" title="Serial/USB Gateway"><img src="/vera/gw.jpg" style="width:300px;float:right;padding-left:20px"></a>'), "\n			", HTML.Raw('<p>The Serial gateway is pretty simple to build. You will do exactly the same radio connection maneuver when building your sensors. If you are a proud <strong>Vera owner</strong> you should use an <strong>Arduino Nano</strong> for the Serial Gateway.\n\n			<h2>Demonstration</h2>\n			<p>Here is a clip created by  <a href="http://forum.mysensors.org/user/petewill">petewill</a> showing how to build a serial gateway and getting started with the Arduino environment.\n			<iframe class="youtube" src="https://www.youtube.com/embed/TBvGrB094Co" frameborder="0" allowfullscreen=""></iframe>\n			</p>\n\n			<h2>Wiring Things Up</h2>\n			Just follow the instructions in <a href="/build/connect_radio">connecting the radio module</a>.</p>'), "\n\n			", HTML.Raw("<h2>Upload the Serial/USB Gateway Sketch</h2>"), "\n\n			", HTML.Raw("<p>Finally, compile and upload the  gateway sketch using the Arduino IDE on your computer or Codebender below.</p>"), "\n\n			", Blaze._TemplateWith(function() {
    return {
      codebender: Spacebars.call("sketch:47514"),
      name: Spacebars.call("SerialGateway")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("example"));
  }), "\n\n			", HTML.Raw("<h2>Buying Guide</h2>"), "\n			", Blaze._TemplateWith(function() {
    return {
      category: Spacebars.call("s_serial")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("shop"));
  }), "\n\n			"), "\n		");
}));

}).call(this);
