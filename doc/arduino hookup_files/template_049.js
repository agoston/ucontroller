(function(){
Template.__checkName("cloud");
Template["cloud"] = new Template("Template.cloud", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, "\n	  ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("Takbelysning Almas rum med taklampa")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("sensor"));
  }), "\n\n	  ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("Takbelysning Almas rum med taklampa")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("sensor"));
  }), "\n\n	  ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("Takbelysning Almas rum med taklampa")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("sensor"));
  }), "\n\n	  ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("Takbelysning Almas rum med taklampa")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("sensor"));
  }), HTML.Raw('\n\n	  <div class="clearfix"></div>\n\n	'));
}));

Template.__checkName("sensor");
Template["sensor"] = new Template("Template.sensor", (function() {
  var view = this;
  return HTML.DIV({
    "class": "sensor"
  }, HTML.Raw('\n	    <div class="buttons">\n	    	<a href=""><i class="fa fa-bar-chart-o"></i></a>\n	    	<a href=""><i class="fa fa-wrench"></i></a>\n	    	<a href=""><i class="fa fa-times"></i></a>\n	    </div>\n\n	  '), HTML.DIV({
    "class": "heading"
  }, "\n	  	\n		", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), "\n	  "), HTML.Raw('\n	  <div class="body">\n\n	\n\n			<div id="the-one" class="make-switch">\n			    <input type="checkbox" disabled="">\n			</div>\n\n			<p>\n	     \n  		  </p>\n  		  <p>\n		<br>\n		<div id="slider" class="slider"></div>	\n		</p>\n	  </div>\n	'));
}));

}).call(this);
