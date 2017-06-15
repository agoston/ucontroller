(function(){
Template.__checkName("api_key");
Template["api_key"] = new Template("Template.api_key", (function() {
  var view = this;
  return HTML.LI({
    "class": "list-group-item"
  }, "\n    ", HTML.SPAN({
    rel: "tooltip",
    "data-placement": "bottom",
    title: "Issue date",
    "class": "badge"
  }, Blaze.View("lookup:date", function() {
    return Spacebars.mustache(view.lookup("date"));
  })), "\n	", HTML.A({
    href: "#",
    id: function() {
      return Spacebars.mustache(view.lookup("key"));
    },
    "class": "copy apikeyLink",
    rel: "tooltip",
    "data-placement": "right",
    title: "Copy to clipboard"
  }, HTML.SPAN({
    "class": "keyFace"
  }, Blaze.View("lookup:key", function() {
    return Spacebars.mustache(view.lookup("key"));
  }))), HTML.Raw('<br>\n	<a id="read" href="#" class="apikeyLinkDisabled" rel="tooltip" data-placement="top" title="By default reading the state, historic data and meta information for sensors is enabled"><i id="symbol" class="symbolDisabled fa fa-check-square-o" style="width:15px;"></i> Read</a>  | \n	'), HTML.A({
    id: "write",
    href: "#",
    "class": "apikeyLink",
    rel: "tooltip",
    "data-placement": "top",
    title: "Write enables creation, control and reporting of sensor data"
  }, HTML.I({
    id: "symbol",
    "class": function() {
      return [ "symbol fa fa-", Spacebars.mustache(view.lookup("writeCheck")), "square-o" ];
    },
    style: "width:15px;"
  }), " Write"), HTML.Raw(' |  	\n	 <a class="confirm apikeyLink" rel="tooltip" data-placement="right" title="Revoke this access token"><i class="symbol fa fa-trash-o"></i></a>\n  '));
}));

Template.__checkName("cloud_api");
Template["cloud_api"] = new Template("Template.cloud_api", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Manage Access Tokens</h1>\n		"), HTML.DIV({
    "class": "relative well"
  }, "\n		", HTML.Raw('<img src="/api/api.png" style="float:right;width:180px;padding-left:20px">'), "\n		", HTML.Raw('<p>The access tokens gives your controller and applications access to MySensors cloud storage and control panel through our API. You can create up to 5 tokens with optional write access. They can be revoked by yourself at any time.<br>\n		Once your controller is setup with an access token you can also control and access your devices right here on the <a href="/cloud">dashboard page</a>.</p>'), "\n		", HTML.Raw("<p>The free service allows a maximum of 5 sensors reporting 50 datapoints per day.</p>"), "\n\n		", HTML.Raw('<p><a class="btn btn-lg btn-primary" style="margin-right:90px;" id="newToken" href="#" role="button">Generate New Access Token</a></p>'), "\n\n\n		", HTML.Raw("<h2>Your access tokens</h2>"), "\n		", HTML.UL({
    "class": "apiTable list-group"
  }, "\n\n		 ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("keys"));
  }, function() {
    return [ "\n		 	", Spacebars.include(view.lookupTemplate("api_key")), "\n\n	\n		 " ];
  }, function() {
    return [ "\n		 	  ", HTML.LI({
      "class": "list-group-item"
    }, "No tokens has been created yet."), "\n	     " ];
  }), "\n\n		"), "\n		 ", Blaze.If(function() {
    return Spacebars.call(view.lookup("keys"));
  }, function() {
    return [ "\n\n		 ", HTML.DIV({
      "class": "alert alert-info"
    }, HTML.I({
      "class": "fa fa-exclamation-triangle"
    }), HTML.STRONG(" NOTE: The access tokens you create for your controller must have write access enabled.")), " \n\n	     " ];
  }), "\n\n\n		"), "	\n	");
}));

}).call(this);
