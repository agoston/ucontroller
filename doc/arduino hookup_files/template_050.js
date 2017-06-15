(function(){
Template.__checkName("controller_sniffer");
Template["controller_sniffer"] = new Template("Template.controller_sniffer", (function() {
  var view = this;
  return HTML.Raw('<div class="col-md-12">\n				<h1>NRF24 Sniffer</h1>\n				<div class="well">\n				<p>\n					The wireless 2.4GHz Nordic Semiconductor nRF24L01+ chip (or nRF24 for short), does not support promiscuous mode, which in theory makes it impossible to capture network traffic between different nodes on a network.\n				</p>\n				<p>	This project contains a wireless sniffer for nRF24L01+ wireless modules meeting following requirements:\n				</p>\n				<ul>\n					<li>Based on commodity, cheap hardware</li>\n					<li>Traffic capturing for network with known parameters (channel, baudrate, base address)</li>\n					<li>Analysis using Wireshark network protocol analyzer</li>\n					<li>Possibility to analyze protocols which use the nRF24 for transport in their network</li>\n				</ul>\n				<p>\n				<a href="http://yveaux.blogspot.nl/2014/07/nrf24l01-sniffer-part-1.html">Full description of the project</a><br>\n				<a href="http://forum.mysensors.org/topic/242/wireless-nrf24l01-sniffer-for-mysensors">Relevant forum thread</a><br>\n\n				<p>\n				<a class="btn btn-md btn-primary" href="https://github.com/Yveaux/NRF24_Sniffer" target="_new"><i class="fa fa-chevron-right"></i> Download and Install Instructions <i class="fa fa-chevron-left"></i></a>\n				</p>\n\n\n				</p>\n				<h2>Screenshots</h2>\n				<div class="row">\n						<div class="col-md-12">\n								 <a href="/controller/sniffer.png" data-lightbox="image-finding" title="GUI"><img src="/controller/sniffer.png" style="" class="img-responsive"></a>\n					 </div>\n				</div>\n				</div>\n		</div>');
}));

}).call(this);
