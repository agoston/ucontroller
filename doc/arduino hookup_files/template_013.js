(function(){
Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return [ HTML.Raw("<h1>What's all the fuss about?</h1>\n		"), HTML.DIV({
    "class": "well relative"
  }, "\n			", Spacebars.include(view.lookupTemplate("share")), "\n\n			", HTML.Raw('<div class="pull-right">\n			<div class="sketchUno"></div> <div class="largeSketch">+</div>\n			<div class="sketchRadio"></div> <div class="largeSketch">=</div>\n			<div class="sketchHeart"></div>\n			</div>'), "\n\n			", HTML.Raw("<p><h4>Do it yourself!</h4></p>"), "\n\n			", HTML.Raw("<p>We've combined the Arduino platform with a small radio transceiver into a fun, flexible world of low cost wireless sensors.</p>"), "\n			", HTML.Raw("<p>All the nitty-gritty details about the sensor communication has been packaged into a convenient software library so you don't have to worry about them.</p>"), "\n			", HTML.Raw('<div class="sketchSitting"></div>'), "\n			", HTML.Raw("<p>It is as easy as 1, 2, 3.</p>"), "\n			", HTML.Raw("<p><strong>1.</strong> Connect the parts. <strong>2.</strong> Download the provided examples. <strong>3.</strong> Start measuring and controlling the world!</p>"), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<h4>Best part: All examples and libraries are free and open source!</h4>"), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw('<p><a class="btn btn-lg btn-primary" style="margin-right:90px;" href="/about/iot" role="button"><span class="glyphicon glyphicon-chevron-right"></span> Get Started</a></p>'), "\n\n		") ];
}));

}).call(this);
