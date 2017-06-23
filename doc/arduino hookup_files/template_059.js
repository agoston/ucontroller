(function(){
Template.__checkName("controller_freedomotic");
Template["controller_freedomotic"] = new Template("Template.controller_freedomotic", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n				<h1>Freedomotic</h1>\n				<div class="well">\n				<img src="/controller/freedomotic.png" style="width:200px;float:right;padding-left:20px">\n\n				<p>Freedomotic is an open source, flexible, secure Internet of Things (IoT) application framework, useful to build and manage modern smart spaces. It is targeted to private individuals (home automation) as well as business users (smart retail environments, ambient aware marketing, monitoring and analytics, ...). Freedomotic can interact with well known standard building automation protocols as well as with "do it yourself" solutions. It treats the web, social networks and frontends just like any other sensor or actuator in your automation system.</p>\n\n				<p>MySensors is supported by freedomotic through the <strong><a href="/build/serial_gateway">SerialGateway</a></strong>.</p>\n\n				<p><a class="btn btn-md btn-primary" href="http://freedomotic.com" target="_new"><i class="fa fa-chevron-right"></i> Homepage <i class="fa fa-chevron-left"></i></a>  <a class="btn btn-md btn-primary" href="http://freedomotic.com/content/plugins/mysensors\n" target="_new"><i class="fa fa-chevron-right"></i> Install Instructions <i class="fa fa-chevron-left"></i></a>\n\n				<a class="btn btn-md btn-primary" href="http://forum.mysensors.org/category/19" target="_new"><i class="fa fa-chevron-right"></i> Support Forum <i class="fa fa-chevron-left"></i></a>\n\n				</p>\n\n				<h2>Features</h2>\n				<p>\n				<ul>\n						<li><b>Cross-platform:</b> Freedomotic is written in Java so it can run on Windows, Linux, Mac, Solaris. Java JRE 6 is required (JRE 7+ from v5.6 Commander).</li>\n						<li><b>Distributed &amp; Scalable:</b> can be deployed on a network of cheap peer-to-peer hardware node. It is scalable and can manage from small appartments to huge buildings providing automatic load balancing across clusters on the network.</li>\n						<li><b>Modular &amp; Extensible:</b> Freedomotic is modular and can enrich its features using plugins and crosslanguage API. API are distributed along with the software to easely create new add-ons. It provides OSGi Framework features in a simpler way, leveraging well known OO programming inheritance.</li>\n						<li><b>Cross-language APIs:</b> you can connect different software, hardware, frontends and services app developed in your preferred programming language using REST, STOMP or plain Java.</li>\n						<li><b>Not a single frontend:</b> it can run many frontends at the same time, also from remote. Every frontend can be developed with specific purpose in mind and every company can build rapidly its own branded interface for Android, iPhone, Web...</li>\n						<li><b>Hardware Agnostic:</b> Freedomotic has an hardware abstraction layer to abstract from hardware infrastructure (sensors and actuators) using events, triggers and command. An object (eg: a light) is abstract and not related to any particular building automation protocol.</li>\n						<li><b>Event Based:</b> Every action in the real environment and every interaction with the system (eg: a click on the GUI) is mapped to an event. Events can be intercepted at runtime making the behavior of the system fully configurable and adaptable to any automation purpose.</li>\n						<li><b>Semantic-rich:</b> Freedomotic provides a semantic-rich knowledge of the environment topology, people and objects in it to implement intelligence and reasoning systems. No coding is required, the environment can be described using graphical editors.</li>\n						<li><b>History Aware:</b> it can record environment and objects state changes in a separate and dedicated database. Recording rules can be easily defined with the usual event -> trigger -> commands system. You can record all changes or single domains of interest with the possibility to define the granularity of the recorded data. This historical series can be queried to provide charts, reports, alerts or even to be used to create history aware intelligent automations.</li>\n						<li><b>Multilanguage:</b> freedomotic it\'a available in more than 20 languages</li>\n\n						</ul>\n				</p>\n				<h2>Screenshots</h2>\n\n				<div class="row">\n						<div class="col-md-3">\n								 <a href="/controller/freedomotic_mysensors.png" data-lightbox="image-finding" title="MySensor devices"><img src="/controller/freedomotic_mysensors.png" style="" class="img-responsive"></a>\n					 </div>\n						<div class="col-md-3">\n								<a href="/controller/freedomotic_configure.png" data-lightbox="image-finding" title="Configuration"><img src="/controller/freedomotic_configure.png" style="" class="img-responsive"></a>\n						</div>\n						<div class="col-md-3">\n								<a href="/controller/freedomotic_rpi.jpg" data-lightbox="image-finding" title="Controller running on RPI"><img src="/controller/freedomotic_rpi.jpg" style="" class="img-responsive"></a>\n						</div>\n						<div class="col-md-3">\n								<a href="/controller/freedomotic_html.jpg" data-lightbox="image-finding" title="HTML frontend"><img src="/controller/freedomotic_html.jpg" style="" class="img-responsive"></a>\n						</div>\n				</div>\n\n\n\n				</div>\n		</div>');
}));

}).call(this);