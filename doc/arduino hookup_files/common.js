(function(){
scrollHash = function (hash) {
  if (hash == null) {
    hash = Session.get("hash"); 
  }
  if (hash != null) {
    //console.log(hash);
    if ($(hash).offset() != null) {
      $('html, body').animate({scrollTop: $(hash).offset().top-70}, 100);
    } else {
      $('html, body').animate({scrollTop: 0}, 100);
    }
  } 
};

}).call(this);
