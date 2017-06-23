(function(){
Template.__checkName("about_network");
Template["about_network"] = new Template("Template.about_network", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n		<h1>The sensor network</h1>\n		<div class="well">\n\n			 <h2>The Radio Communication</h2>\n\n			 <p>In this section, you will learn the difference between <strong>Sensor</strong>, <strong>Repeater-sensor</strong> and <strong>Gateway</strong>.</p>\n\n			<a href="/started/network.png" data-lightbox="image-ide" title="GW=Gateway, R=Repeating Sensor Node, S=Sensor Node"><img src="/\n			started/network.png" class="pull-right col-md-6 col-sm-6 col-xs-6 "></a>\n\n			<p>Your sensors will form a tree network topology. Normally the sensor nodes <strong>(S)</strong> will send their information directly to the gateway <strong>(GW)</strong>. If you live in a mansion or very large house, you may need to enable the repeater mode for some sensor nodes <strong>(R)</strong> to relay data from sensors that are located far away from the gateway. </p>\n\n			<p><strong>Sensor nodes</strong> - continuously read the status of all attached sensors and pass the sensor data through the radio network back to the gateway. These puppies have the option to sleep most of the time if you want to run them on battery. </p>\n\n			<p><strong>Repeater-sensor nodes</strong> - must stay awake in order to pass messages from its child sensor nodes. A repeater-node can optionally include direct-attached sensors and report their sensor data to the gateway. In most setups you will probably not need any repeater-nodes as the transmitter range for the most basic radio is about 20-60 meters.</p>\n\n			<p><strong>Gateway</strong> - passes data to either your home automation controller.</p>\n\n			<p><h4><i class="fa fa-arrow-circle-down"></i><i> Skip the following section if you aren\'t inspired by technical details </i><i class="fa fa-arrow-circle-down"></i></h4></p>\n\n			<p>You can also send messages directly between two nodes in the network without transiting through the gateway. For example, your outside temperature sensor can send its data directly to another sensor in your kitchen with an attached display.</p>\n\n			<p>Each node is assigned a unique <strong>sensorId</strong> or address that is used for sending and receiving point-to-point messages. You can assign a static sensorId or let the controller automatically assign one to the sensor. <strong>AUTO-mode</strong> configures the sensor to request a sensorId from the controller and is the default option for all the examples that we provide. The sensor stores the assigned sensorId in its non-volatile memory to ensure the correct sensorId persists across power transitions.</p>\n\n			<p>The first time a new sensor boots up, it will determine the path to the gateway by sending out a special <strong>Help-me-find-my-way-home-message</strong>. The repeater-sensor nodes and gateway listen for these messages and will respond to a sensor\'s plea-for-help-message. Their reply will inform the sensor how far they are from the gateway so the newly born sensor can determine the shortest path to the gateway, be it directly to the gateway or through a repeater-sensor node which is the closest to the gateway. If the sensor node later loses contact with the gateway or a repeater-sensor node, it will automatically repeat this procedure to determine the best path to the gateway - a sensor node considers contact with the gateway to be lost if it fails to send 3 consecutive messages.  </p>\n\n			<p>Gateway and repeater-sensor nodes maintain a small routing table to know where to direct their messages to the network surrounding it. The routing table is built up automatically by the repeaters and gateway by introspecting messages received. </p>\n\n			<p>A MySensor radio network can consist of up to 254 different radio nodes and each radio node can report data for 254 attached child sensors. This means that you can, in theory, manage data for up to 64516 sensors in a single radio network. If this isn\'t enough, you can create another parallel radio network on a different channel and there are 126 available channels.</p>\n\n			<p><strong>To summarize:</strong> New nodes will automatically find the shortest path to gateway and and use a persistent unique sensorId to send and receive point-to-point messages. The tree network is robust and "self heals" as the topology changes.  For example, you move a sensor node to a different physical location or a repeater-node dies. 	</p>\n\n\n			<h2>The Controller</h2>\n			<img src="/started/controller.png" class="pull-right col-md-2 col-sm-2 col-xs-2 ">\n			<p>The radio gateway is typically connected to some kind of controller. The purpose of the controller is:</p>\n			<ul>\n			<li>Send configuration parameters to the sensors in the radio network (currently time, and unique sensor ids)</li>\n			<li>Keep track of the most recent data reported by sensors and actuators. </li>\n			<li>Provide status information back to sensors and actuators; e.g. the current state (on/off/loadLevel) for a light. </li>\n			<li>The controller usually provides a user interface controls for actuators. </li>\n			<li>Executes predefined schedules or scenes; e.g. at sunset turn on the garden lights.</li>\n			</ul>\n			<p>MySensors currently offers support for the Vera Z-wave enabled HA Controller via a <a href="/controller/vera">free plugin</a>.\n				The community have also created plugins for a <a href="/controller">growing number of controllers</a>.\n			<!--	We also plan to provide a simple doit-yourself MySensors cloud-enabled Raspberry Pie controller in the near future.--> </p>\n			<p>Read more about selecting <a href="/build/select_gateway">gateway</a> and <a href="/controller">controller</a>.</p>\n\n			<!-- h2>The MySensors Cloud</h2>\n			<div style="float:right;font-size:100px;color:white;text-shadow: 2px 2px #000;"><i class="fa fa-cloud fa-fw"></i></div>\n			<p>We also plan to offer a convenient cloud service that will be the glue for all your IoYT stuff. </p>\n			<ul>\n			<li>Backup of historical sensor data.</li>\n			<li>Visualize current and historic sensor data (trend graphs, etc.)</li>\n			<li>Declarative scenario development tool; e.g. if the freezer temperature rises to 5 degrees Centigrade, send an email me. </li>\n			<li>Manage triggers and notifications.</li>\n			<li>MQTT and REST API for storing and retrieving your sensor data. </li>\n			<li>External service integration such as twitter and mobile push notifications.</li>\n			<li>Tools to auto-generate Arduino sketches based on your sensor requirements.</li>\n			</ul>\n			<p>We will solicit the community for enthusiastic beta testers to help launch the MySensors cloud service and provide feedback.</p -->\n\n			<p><a class="btn btn-lg btn-primary" href="/about/arduino"><span class="glyphicon glyphicon-chevron-right"></span> Setting up Arduino for the first time</a></p>\n		</div>\n	</div>');
}));

}).call(this);