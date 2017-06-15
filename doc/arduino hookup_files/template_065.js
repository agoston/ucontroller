(function(){
Template.__checkName("build_advanced_gateway");
Template["build_advanced_gateway"] = new Template("Template.build_advanced_gateway", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Advanced Gateway Options</h1>\n		"), HTML.DIV({
    "class": "well"
  }, "\n\n			", HTML.Raw('<a href="/vera/veragw.jpg" data-lightbox="image-finding" title="3D Printed Gateway Box"><img src="/vera/veragw.jpg" style="width:30%;float:right;padding-left:20px"></a>'), "\n			", HTML.Raw('<a href="/vera/veragwOpen.jpg" data-lightbox="image-finding" title="3D Printed Gateway Box"><img src="/vera/veragwOpen.jpg" style="width:30%;float:right;padding-left:20px"></a>'), "\n			", HTML.Raw("<p>This section is for the enthusiasts that want to pimp their gateway or sensor with some nice extras like activity LEDs and an inclusion mode button. </p>"), "\n\n\n			", HTML.Raw("<h4>Inclusion Mode Button</h4>"), "\n			", HTML.Raw("<p>Connect the push-button momentary-switch between GND and digital pin 3.</p>"), "\n\n			", HTML.Raw("<h4>Radio Traffic LEDs</h4>"), "\n			", HTML.Raw("<p>To use this feature you must enable the WITH_LEDS_BLINKING option in MyConfig.h.</p>"), "\n\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.Raw('<div class="col-md-6">\n					<p>We support three LED feedback signals for radio activity - Read, Transmit, and Error. The Transmit LED is also used to provide visual feedback during active inclusion mode.</p>\n					<p>A good choice would be either a 2 or 3 mm green/yellow/red LEDs. You will also need 3 resistors in the range 270R-510R. </p>\n					<p>Each LED is connected by its anode (long leg) to +5V. The cathode (short leg) is connected through a resistor to one of the following digital pins of the Arduino:</p>\n				</div>'), "\n				", HTML.DIV({
    "class": "col-md-6"
  }, "\n					", HTML.TABLE({
    "class": "table table-curved",
    style: "width:100%"
  }, "\n						", HTML.TR(HTML.TH("Led color"), HTML.TH("Arduino Digital Pin"), HTML.TH("Function")), "\n						", HTML.TR(HTML.TD("Green"), HTML.TD("6"), HTML.TD("Read/RX")), "\n						", HTML.TR(HTML.TD("Yellow"), HTML.TD("5"), HTML.TD("Transmit/TX")), "\n						", HTML.TR(HTML.TD("Red"), HTML.TD("4"), HTML.TD("Error/Err")), "\n					"), "\n				"), "\n			"), "\n\n\n		"), "\n	");
}));

}).call(this);
