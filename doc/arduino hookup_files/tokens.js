(function(){
Meteor.subscribe("keys", {});
var Keys = new Meteor.Collection("api_keys");


Template.api_key.writeCheck = function() {
	return this.write?"check-":"";
}

Template.api_key.date = function () {
	return moment(this.issued).format("YYYY-MM-D HH:mm");
}

Template.api_key.rendered = function () {
    this.$('a[rel=tooltip]').tooltip(); 
    this.$('span[rel=tooltip]').tooltip(); 
    

    this.$(".copy").clipboard({
      path:'/jquery.clipboard.swf',
      copy:function() {
        return $(this).attr("id");
      },
      afterCopy:function(){
        $(this).css('color','green');
      }
    });


  var self = this;
 
	 this.$('.confirm').confirmation({
      singleton:true, 
      popout:true,
      placement:"left",
      onConfirm     : function(event, element) {
            event.preventDefault();
            Meteor.call("removeToken", self.data.key, function(error, success) {
              if (!success) {
                // Notify
              }
              return false;
            })}
    });
}

Template.api_key.events({
    'click #write': function(e, t) {
       	Meteor.call("updateToken", t.data.key, !t.data.write, function(error, success) {
       		if (!success) { }
       	});
    }
});

Template.cloud_api.keys = function (){
   return Keys.find({}, {sort: {issued: -1}});
}

Template.cloud_api.events({
     'click #newToken' : function(e, t) {
       		e.preventDefault();      
       		Meteor.call("newToken", true, function(error, success) {
       			if (!success) { } 
       		});
      }

});

cloud_api_rendered = function () {

};
}).call(this);
