(function(){
Template.__checkName("controller");
Template["controller"] = new Template("Template.controller", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n				<h1>Selecting a Controller</h1>\n\n				<div class="well">\n						<img src="/started/controller.png" class="pull-right col-md-2 col-sm-2 col-xs-2 ">\n\n						<p>The list of supported MySensors controllers is growing.\n							We try to keep the information updated here but the latest news is most often found on the <a href="http://forum.mysensors.org">forum</a>. Be sure to check it out!</p>\n\n						<p>The <a href="/controller/vera">Vera</a> controller is used as a testing ground for new features.\n							This means that the Vera plugin is maintained by us.\n							All the other controller plugins has been created (and is maintained) by a bunch of talented community members.\n							Give them hugs and credit whenever you get a chance!</p>\n\n						<p>A few of the open source controllers can be installed on simple hardware such as Raspberry Pie or Cubieboard.\n							A list of all known open source controllers is listed in <a href="http://forum.mysensors.org/topic/175/">this forum thread</a>.\n							They are probably all good candidates for new eager plugin developers.</p>\n\n						<p>If you need help creating a MySensors plugin for your favorite controller. Give us a shout in the forum.</p>\n\n						<p>In the left menu you can find a small description of each supported controller. Hopefully you\'ll find one that fits your needs.</p>\n\n\n						<!-- p>We\'re also busy developing our own simple <a href="/build/raspberry">DIY cloud-enabled gateway controller</a> running on the Raspberry Pi. The software is <strong>still a work in progress</strong> and we\'ll announce when the RPI controller and software becomes usable.</p-->\n\n				</div>\n		</div>');
}));

}).call(this);
