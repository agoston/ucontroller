(function(){
Template.__checkName("coming_soon");
Template["coming_soon"] = new Template("Template.coming_soon", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12"
  }, "\n		", HTML.DIV({
    "class": "jumbotron relative padright"
  }, "\n			", HTML.Raw("<h1>Coming soon...</h1>"), "\n			", HTML.Raw('<div class="sketchComingSoon"></div>'), "	\n			", HTML.Raw("<p>There are lots of bits and pieces that have to be put together to complete our site and services and we're working hard on them. Unfortunately we're not quite ready yet but please be sure to come back soon and keep an eye on the news section for announcements as we deploy additional features and services.</p>"), "\n			", HTML.P("\n			If you want to keep yourself updated with the latest news... ", Spacebars.include(view.lookupTemplate("MailChimpListSubscribe")), "\n		    "), "\n		"), "\n	");
}));

}).call(this);
