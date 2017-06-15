(function(){
Template.__checkName("controller_iobroker");
Template["controller_iobroker"] = new Template("Template.controller_iobroker", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n				<h1>ioBroker</h1>\n				<div class="well">\n				<img src="/controller/iobroker.png" style="width:250px; float: right; margin-left:20px; padding:10px;">\n				<p>\n					ioBroker is an integration platform for the Internet of Things, focused on Building Automation, Smart Metering, Ambient Assisted Living, Process Automation, Visualization and Data Logging. It aims to be a possible replacement or extension for software like fhem, OpenHAB or the thing system. ioBroker is the successor of <a href="http://ccu.io/">CCU.IO</a>, a project quite popular in the German <a href="http://homematic-forum.de/forum/">HomeMatic community</a>.\n				</p>\n				<p>	\n					ioBroker is not just an application, it\'s more of a a concept, a database schema, and offers a very easy way for systems to inter operate. ioBroker defines some common rules for a pair of databases used to exchange data and publish events between different systems.\n				</p>\n\n				<p>MySensors is supported through the <strong><a href="/build/serial_gateway">Serial Gateway</a></strong> or <strong><a href="/build/ethernet_gateway">Ethernet Gateway</a></strong></p>\n\n				<p><a class="btn btn-md btn-primary" href="http://iobroker.net/" target="_new"><i class="fa fa-chevron-right"></i> Homepage <i class="fa fa-chevron-left"></i></a>\n				\n				<a class="btn btn-md btn-primary" href="http://forum.mysensors.org/category/31" target="_new"><i class="fa fa-chevron-right"></i> Support Forum <i class="fa fa-chevron-left"></i></a>\n				</p>\n\n\n				<h2>Features</h2>\n				<p>\n				<ul>\n					<li>Developed completely in JavaScript.</li>\n					<li>Integration with ioBroker takes place through so called adapters, which allows connectivity to other systems running in the network.</li>\n					<li>Unique dashboard editor "vis". See examples <a href="https://iobroker.net:8080/">here</a>.</li>\n					<li>Can handle logging of events to many different databases such as MS-SQL, MySQL, PostreSQL, InfluxDB, SQLite and just plain text files.</li>\n					<li>Native <a href="http://nodered.org/">NodeRed</a> integration for visual scripting with support for hundreds of devices and protocols.</li>\n					<li>Scenes and scripts in JavaScript.</li>\n					<li>Very modular architecture with possibility to run modules on different PCs, mini computers, NAS and on everything that supports Node.js.</li>\n					<li>Simple and easy to use MQTT protocol support.</li>\n					<li>ioBroker can run on any OS that supports Node.js like ARM, x86, Windows, Linux, OSX. Recommended is x86 based or ARM based systems like RaspberyPi2/3, BananaPi or Cubietruck running Debian based Linux as operating system.</li>\n					<li>The system spawns a new Node.js-process for every adapter instance, so RAM becomes is a limiting factor. A single adapters memory fingerprint is about 10-60MB.</li>\n					<li>Large and friendly community on <a href="http://forum.iobroker.net">forum.iobroker.net</a>.</li>\n\n				</ul>\n				</p>\n				<h2>Screenshots</h2>\n				<div class="row">\n					<div class="col-md-3">\n						 <a href="/controller/iobroker_adapters.png" data-lightbox="image-finding" title="Adapters"><img src="/controller/iobroker_adapters.png" style="" class="img-responsive"></a>\n				 	</div>\n					<div class="col-md-3">\n						<a href="/controller/iobroker_nodered.png" data-lightbox="image-finding" title="NodeRED Intergration"><img src="/controller/iobroker_nodered.png" style="" class="img-responsive"></a>\n					</div>\n					<div class="col-md-3">\n						<a href="/controller/iobroker_overview.png" data-lightbox="image-finding" title="Dashboard 1"><img src="/controller/iobroker_overview.png" style="" class="img-responsive"></a>\n					</div>\n					<div class="col-md-3">\n						<a href="/controller/iobroker_dashboard.png" data-lightbox="image-finding" title="Dashboard 2"><img src="/controller/iobroker_dashboard.png" style="" class="img-responsive"></a>\n					</div>\n				</div>\n			</div>\n		</div>');
}));

}).call(this);
