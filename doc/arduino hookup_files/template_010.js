(function(){
Template.__checkName("donate");
Template["donate"] = new Template("Template.donate", (function() {
  var view = this;
  return HTML.Raw('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n<input type="hidden" name="cmd" value="_s-xclick">\n<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----\n">\n<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG_global.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online.">\n<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n</form>');
}));

Template.__checkName("welcome");
Template["welcome"] = new Template("Template.welcome", (function() {
  var view = this;
  return HTML.DIV({
    "class": "paddextra"
  }, "\n\n\n	", HTML.DIV({
    "class": "relative col-md-8"
  }, "\n		", HTML.DIV({
    "class": "jumbotron relative col-md-12"
  }, "\n			", HTML.Raw('<div id="ballon" class="ballon ballonBefore anim"></div>'), "\n			", HTML.Raw('<div class="sketchWelcome anim"></div>'), "\n			", HTML.Raw('<a href="https://github.com/mysensors/"><img class="fork" src="/welcome/fork-us-on-github.png" alt="Fork us on GitHub"></a>'), "\n			", HTML.Raw("<h1>Welcome</h1>"), "\n			", HTML.Raw('<div class="welcome-padright50">\n				<p>This is where all the fun happens! </p>\n				<p>Learn how to create your own low cost wireless sensors and connect them to the world.</p>\n			</div>'), "\n			", HTML.Raw('<div class="welcome-padright120">\n				<p>Store your sensor data at home or in the cloud. Control your environment.\n					We provide build instructions and other great tools to help you manage and analyze your sensor data! </p>\n			</div>'), "\n			", HTML.DIV({
    "class": "welcome-padright150"
  }, "\n				", HTML.Raw('<p><a class="btn btn-lg btn-primary pull-right" href="/about" role="button">Tell me more!</a></p>'), "\n				", HTML.P(Spacebars.include(view.lookupTemplate("share"))), "\n			"), "\n			", HTML.Raw('<div class="clearfix"></div>'), "\n		"), "\n\n		", HTML.Raw('<div class="col-md-12 hideSmall">\n\n			<div class="row">\n			<div class="col-md-3 col-sm-3 extLinksCenter">\n			<a href="http://arduino.cc"><img class="extLinks" src="/partner/arduino.png"></a>\n			</div>\n			<!--div class="col-md-3 col-sm-3 extLinksCenter">\n			<a href="http://www.oshwa.org/"><img class="extLinks" src="/partner/oshw.png"/></a>\n			</div-->\n			<div class="col-md-3 col-sm-3 extLinksCenter">\n			<a href="https://www.openhardware.io"><img class="extLinks" src="/partner/oh.png"></a>\n			</div>\n			<div class="col-md-3 col-sm-3 extLinksCenter">\n			<a href="https://codebender.cc/?referrer=MySensors"><img class="extLinks" src="/partner/codebender.png"></a>\n			</div>\n			<div class="col-md-3 col-sm-3 extLinksCenter">\n			<a href="https://imall.iteadstudio.com/catalogsearch/result/?q=mysensors&amp;acc=eccbc87e4b5ce2fe28308fd9f2a7baf3"><img class="extLinks" src="/partner/itead.png"></a>\n			</div>\n		</div>\n\n\n\n		</div>'), "\n\n	"), "\n\n	", HTML.DIV({
    "class": "col-md-4"
  }, "\n		", HTML.DIV({
    style: "text-align:center"
  }, "\n			", Spacebars.include(view.lookupTemplate("donate")), "\n			", HTML.Raw('<a href="/hall-of-fame"><span class="glyphicon glyphicon-star"></span> Hall of Fame <span class="glyphicon glyphicon-star"></span></a>'), "\n			", HTML.Raw("<hr>"), "\n			"), "\n\n\n		", HTML.Raw("<h3>News</h3>"), "\n\n\n		", HTML.Raw('<p><b>2016-04-14</b> The <a href="/controller/homidom">HoMIDoM</a> controller now supports MySensors!</p>'), "\n\n		", HTML.Raw('<p><b>2016-04-04</b> MySensors Contest 2016 <a href="http://forum.mysensors.org/topic/3566">Winners Announced!</a></p>'), "\n		\n		", HTML.Raw('<p><b>2016-03-30</b> Build Pete\'s <a href="https://www.openhardware.io/view/65/Bed-Occupancy-Sensor">Bed Occupancy Sensor</a></p>'), "\n\n		", HTML.Raw('<p><b>2016-03-22</b> We\'re happy to announce MySensors support in <a href="/controller/iobroker">ioBroker</a>!</p>'), "\n\n		", HTML.Raw('<p><b>2016-03-13</b> The new <a href="/controller/mynodesnet">MyNodes.NET</a> controller released.</p>'), "\n		", HTML.Raw('<p><b>2016-02-22</b> New  <a href="/build/debug#more-troubleshooting-tips">troubleshooting video</a> from Pete.</p>'), "\n\n		", HTML.Raw('<p><b>2016-01-24</b> The <a href="/contest2016">MySensors Contest 2016</a> launched!</p>'), "\n\n		", HTML.Raw('<p><b>2016-01-10</b> Finally! Our new project site <a href="https://www.openhardware.io/">OpenHardware.io</a> released!</p>'), "\n\n		", HTML.Raw('<p><b>2015-12-19</b> How To: <a href="http://forum.mysensors.org/topic/2607">Monitor your Refrigerator</a>.</p>'), "\n\n\n \n\n\n\n\n		", HTML.Raw('<p><a href="/history">> Older</a></p>'), "\n		", HTML.Raw("<p></p>"), "\n		", HTML.DIV({
    id: "subscribeForm"
  }, "\n			", HTML.Raw("<hr>"), "\n				", Spacebars.include(view.lookupTemplate("MailChimpListSubscribe")), "\n		"), "\n\n\n	"), "\n	");
}));

Template.__checkName("history");
Template["history"] = new Template("Template.history", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n		<h1>Old MySensors "news"</h1>\n		<div class="relative well">\n\n		<p><b>2015-11-18</b> Wow! We now have two additional controller options for MySensors. <a href="/controller/calaos">Calaos</a> and <a href="/controller/openluup">openLuup</a>. Awesome!</p>\n\n\n		<p><b>2015-11-12</b> Need a new project? Try <a href="http://forum.mysensors.org/topic/2372">Phoney TV</a> or perhaps a <a href="http://forum.mysensors.org/topic/2346">GPS Sensor</a>.</p>\n\n		<p><b>2015-10-19</b> Hack your <a href="http://forum.mysensors.org/topic/2064">doorbell</a>.</p>\n\n		<p><b>2015-09-20</b> <a href="/controller/mycontroller">MyController.org</a> released.</p>\n\n		<p><b>2015-09-20</b> How To: Make a simple <a href="http://forum.mysensors.org/topic/2001">Scene Controller</a>.</p>\n\n\n		<p><b>2015-08-28</b> It\'s now possible to build a <a href="/build/esp8266_gateway">Wifi Gateway</a> running on ESP8266.</p>\n\n\n		<p><b>2015-08-10</b> The <a href="/controller/homeassistant">Home Assistant</a> controller is now supported!</p>\n\n		<p><b>2015-08-02</b> Build your own cool <a href="/build/parking">Parking Sensor</a>.</p>\n\n		<p><b>2015-07-30</b> MySensors version <a href="/download/">1.5 released</a>.</p>\n\n		<p><b>2015-07-16</b> Learn how to build a <a href="/build/rain">Rain Gauge</a>!</p>\n		\n		<p><b>2015-06-08</b> Create your own <a href="/build/irrigation">Irrigation Controller</a>!</p>\n\n		<p><b>2015-05-05</b> We\'re finally taking pre-orders on the <a href="/hardware/micro">Sensebender Micro board</a>.</p>\n\n		<p><b>2015-04-22</b> We have a new <a href="/about/videos">video section</a>!</p>\n\n		<p><b>2015-04-18</b> <a href="http://forum.mysensors.org/user/petewill">Petewill</a> has posted a new awesome <a href="http://youtu.be/TBvGrB094Co">getting started video</a> on youtube.</p>\n\n		<p><b>2015-04-06</b> Finally! The <a href="/controller/domoticz">Domoticz</a> controller has official MySensors support.</p>\n\n		<p><b>2015-03-01</b> MySensors Contest 2015 <a href="http://forum.mysensors.org/topic/796/mysensors-contest-2015/7">Winners Announced!</a></p>\n\n		<p><b>2015-02-17</b> New stuff on the <a href="/hardware">hardware</a> and <a href="/store">store</a> page.</p>\n\n		<p><b>2015-02-09</b> <a href="/controller/majordomo">MajorDoMo</a> supported!</p>\n\n		<p><b>2015-01-26</b> The <a href="/controller/homeseer">Homeseer</a> and <a href="/controller/pimatic">Pimatic</a> controller is now supported!</p>\n\n 		<p><b>2015-01-08</b> The <a href="/contest2015">MySensors Contest 2015</a> has been launched. Join now!</p>\n\n		<p><b>2015-01-06</b> The communty member petewill posted an <a href="http://forum.mysensors.org/topic/775/8-lamp-outlet-smart-plug-module">excellent video</a> showing how to build your own smart plug.</p>\n\n		<p><b>2015-01-01</b> Ebay vs AliExpress price comparison added to products listed <a href="/store">in store</a>.</p>\n\n		<p><b>2014-12-19</b> New design! <a href="https://www.teezily.com/beghr55">Buy a t-shirt and support the MySensors project [EU].</a></p>\n\n		<p><b>2014-11-15</b> New fun sensors <a href="/store">in the store</a>.</p>\n\n		<p><b>2014-11-13</b> The <a href="/controller/jeedom">Jeedom</a> controller is now supported!</p>\n\n		<p><b>2014-10-26</b> Two additional controllers supported. Meet <a href="/controller/domotiga">DomotiGa</a> and <a href="/controller/fhem">FHEM</a>.</p>\n\n		<p><b>2014-10-18</b> Build instruction for a <a href="/build/scene_controller">Touch Display Scene Controller</a>.</p>\n\n		<p><b>2014-10-03</b> New build section for <a href="/build/print">printables</a>.</p>\n\n		<p><b>2014-09-16</b> <a href="/controller/freedomotic">Freedomotic</a> controller plugin available.</p>\n\n		<p><b>2014-08-29</b> <a href="/controller">New controller plugins</a>, <a href="/download/sensor_api">new library version</a>, <a href="/build">new sensor examples</a> using <a href="/build/arduino">codebender</a> online IDE. Enjoy!</p>\n\n		<p><b>2014-07-12</b> Join the ongoing beta testing of the new  <a href="http://forum.mysensors.org/topic/168/1-4-beta">1.4 library version</a>.</p>\n\n		<p><b>2014-05-04</b> New cool sensors and actuators added to the <a href="/store">store</a>.</p>\n\n		<p><b>2014-04-07</b> Make sure to be part of the <a href="/contest2014">MySensors Project Contest 2014</a>.</p>\n\n\n		<p><b>2014-03-23</b> MySensors.org launched.</p>\n\n\n\n	</div>\n	</div>');
}));

}).call(this);