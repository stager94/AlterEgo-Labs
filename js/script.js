
$(document).ready(function() {
  $(".member").hover((function() {
    console.log("Hover");
    return $("img.photo", this).stop().animate({
      top: "-30"
    });
  }), function() {
    return $("img.photo", this).stop().animate({
      top: "0"
    });
  });
  $("a[href^=\"#\"]").bind("click.smoothscroll", function(e) {
    var $target, target;
    e.preventDefault();
    target = this.hash;
    $target = $(target);
    return $("html, body").stop().animate({
      scrollTop: $target.offset().top - 70
    }, 500, "swing", function() {
      return window.location.hash = target;
    });
  });
  return $(document).scroll(function() {
    var scroll;
    scroll = $(document).scrollTop();
    if (scroll > 0) {
      return $(".main-menu").addClass("shadowed");
    } else {
      return $(".main-menu").removeClass("shadowed");
    }
  });
});

