(function(){Template.cloudLayout.events({
    'click #menu-toggle' : function(e, t) {
     	  e.preventDefault();
     	  $("#wrapper").toggleClass("active");
     	}
});


Template.cloudmenu.menu =  function() {
	if (this.page != null) {
		this.classActive = this.page==this.url ?"active":"";
	}
	return Template.cloudMenuItem; 
}

}).call(this);
