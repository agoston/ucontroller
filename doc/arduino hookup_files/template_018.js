(function(){
Template.__checkName("buildTopMenuItem");
Template["buildTopMenuItem"] = new Template("Template.buildTopMenuItem", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return [ Spacebars.mustache(view.lookup("classActive")), " normal-nav" ];
    },
    style: "text"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    }
  }, HTML.I({
    "class": function() {
      return [ "fa fa-", Spacebars.mustache(view.lookup("icon")), " fa-fw" ];
    }
  }), HTML.Raw("<br>"), Blaze.View("lookup:title", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));
  })));
}));

Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    id: "navbar",
    "class": "navbar navbar-default navbar-fixed-top",
    role: "navigation"
  }, HTML.Raw('\n	 <!-- Brand and toggle get grouped for better mobile display -->\n		<div class="navbar-header">\n			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n				<span class="sr-only">Toggle navigation</span>\n				<span class="icon-bar"></span>\n				<span class="icon-bar"></span>\n				<span class="icon-bar"></span>\n			</button>\n			<a class="navbar-brand" href="/"><!--span class="solid">My</span><span class="sketch">Sensors</span-->\n			<img alt="MySensors" src="/MySensorsLogo.png"></a>\n		</div>\n\n		'), HTML.DIV({
    "class": "top-tavbar collapse navbar-collapse navbar-ex1-collapse"
  }, "\n			", HTML.UL({
    "class": "nav nav-justified"
  }, "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/about/"),
      icon: Spacebars.call("life-bouy"),
      title: Spacebars.call("Getting&nbsp;Started"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/controller/"),
      icon: Spacebars.call("gamepad"),
      title: Spacebars.call("Controller"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/build/"),
      icon: Spacebars.call("gears"),
      title: Spacebars.call("Build"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/hardware/"),
      icon: Spacebars.call("cubes"),
      title: Spacebars.call("Hardware"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/download/"),
      icon: Spacebars.call("download"),
      title: Spacebars.call("API&nbsp;&amp;&nbsp;Download"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("http://forum.mysensors.org"),
      icon: Spacebars.call("comment"),
      title: Spacebars.call("Forum"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n				", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("/store/"),
      icon: Spacebars.call("shopping-cart"),
      title: Spacebars.call("Store"),
      page: Spacebars.call(view.lookup("page"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("topMenu"));
  }), "\n			"), "\n\n			", HTML.Raw("<!--ul class=\"nav navbar-nav navbar-right\">\n						{{#if currentUser}}\n\n						 <li class=\"{{cloudActive}}\"><A href=\"{{pathFor 'cloud'}}\"><i class=\"fa fa-cloud fa-fw\"></i> {{signedInAs}}</A></li>\n\n						{{else}}\n							{{>topMenu url='/sign-in' icon='cloud' title='My Things' page=page}}\n						{{/if}}\n			</ul-->"), "\n\n		"), "\n	");
}));

Template.__checkName("menu_logged_in");
Template["menu_logged_in"] = new Template("Template.menu_logged_in", (function() {
  var view = this;
  return [ HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "cloud");
    }
  }, HTML.Raw('<i class="fa fa-tachometer"></i>'), " Dashboard")), "\n	", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "entrySignOut");
    }
  }, HTML.Raw('<i class="fa fa-sign-out"></i>'), " Sign Out")) ];
}));

Template.__checkName("menu_logged_out");
Template["menu_logged_out"] = new Template("Template.menu_logged_out", (function() {
  var view = this;
  return [ HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "entrySignIn");
    }
  }, HTML.Raw('<i class="fa fa-sign-in"></i>'), " Login")), "\n	", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "entrySignUp");
    }
  }, HTML.Raw('<i class="fa fa-pencil-square-o"></i>'), " Register")) ];
}));

Template.__checkName("menu_loading");
Template["menu_loading"] = new Template("Template.menu_loading", (function() {
  var view = this;
  return HTML.Raw('<div class="loading">&nbsp;</div>');
}));

}).call(this);
