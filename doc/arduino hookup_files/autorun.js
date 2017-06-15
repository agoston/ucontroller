(function(){
// Scroll top top when switching page
Deps.autorun(function () {
  var current = Router.current();

  Deps.afterFlush(function () {
    $('.content-inner').scrollTop(0);
    $(window).scrollTop(0);
  });
});

}).call(this);
