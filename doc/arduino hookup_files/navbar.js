(function(){
Meteor.startup(function() {
  $(window).resize(function(evt) {
	  $(document.body).css('padding-top', $('#navbar').height() + 20);
      $("#sidebar-wrapper").css('top', $('#navbar').height());

  });
});

Template.navbar.rendered = function() {
  	$(document.body).css('padding-top', $('#navbar').height() + 20);
    $("#sidebar-wrapper").css('top', $('#navbar').height());
}

Template.navbar.cloudActive = function() {
	this.path = "/cloud";
	if (this.page) {
		return this.page.substring(0, this.path.length) === this.path ? 'active' : '';
	}
    return ''; 
}


UI.registerHelper('topMenu', function() {
  if (this.page != null) {
    this.classActive = this.page.substring(0, this.url.length) === this.url ? 'active' : '';
  }
 return Template.buildTopMenuItem; 
});

}).call(this);
