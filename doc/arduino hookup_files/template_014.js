(function(){
Template.__checkName("cloudmenu");
Template["cloudmenu"] = new Template("Template.cloudmenu", (function() {
  var view = this;
  return HTML.UL({
    id: "buildnav",
    "class": "nav nav-pills nav-stacked "
  }, "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call(""),
      icon: Spacebars.call("tachometer"),
      title: Spacebars.call("Dashboard"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), "\n		", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("api"),
      icon: Spacebars.call("key"),
      title: Spacebars.call("Access Tokens"),
      page: Spacebars.call(view.lookup("id"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menu"));
  }), HTML.Raw('\n\n		<li style="padding-top:30px"><a href="/sign-out"><i class="fa fa-sign-out"></i> &nbsp;Sign Out</a></li>\n		'), Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdminUser"));
  }, function() {
    return [ "\n  		", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "admin");
      }
    }, HTML.I({
      "class": "fa fa-cube"
    }), " Admin")), "\n    	" ];
  }), "\n\n\n	");
}));

Template.__checkName("cloudMenuItem");
Template["cloudMenuItem"] = new Template("Template.cloudMenuItem", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("classActive"));
    }
  }, HTML.A({
    href: function() {
      return [ "/cloud/", Spacebars.mustache(view.lookup("url")) ];
    }
  }, HTML.I({
    "class": function() {
      return [ "fa fa-", Spacebars.mustache(view.lookup("icon")) ];
    }
  }), " ", HTML.Raw("&nbsp;"), Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })));
}));

}).call(this);
