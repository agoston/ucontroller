(function(){
Template.__checkName("admin");
Template["admin"] = new Template("Template.admin", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, HTML.Raw("\n		<h1>Administrate Users</h1>\n		"), HTML.DIV({
    "class": "relative well"
  }, "\n        ", Spacebars.include(view.lookupTemplate("accountsAdmin")), "\n\n		"), "	\n	");
}));

}).call(this);
