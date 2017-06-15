(function(){Template.welcome.events({
     'click .anim' : function(e, t) {
       		e.preventDefault();      
			$("#ballon").removeClass("ballonBefore").addClass("ballonAnim");
      }

});

}).call(this);
