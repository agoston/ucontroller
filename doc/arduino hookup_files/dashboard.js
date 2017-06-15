(function(){
/*
$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});
*/


/*if (Meteor.isClient) {
  Meteor.startup(function () {
    $(document).ready(function (){
    $('.slider').slider()
         .on('slide', function(ev){
            console.print(ev);
        });
  });
}*/

Template.sensor.rendered = function() {
      //          $('#the-one').bootstrapSwitch();

console.log("running");
this.$(".slider").noUiSlider({
    start: 40,
    orientation: "horizontal",
    range: {
        'min': 0,
        'max': 100
    }
});

    /*
            .on('slide', function(ev){
        console.print(ev);
    });*/
}
}).call(this);
