$( document ).ready(function() {
  // header controller
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active-menu");
        $(".logo").addClass("logo-top-fixed");
        $(".main-link").addClass("link-top-fixed");
    } else {
       $(".header").removeClass("active-menu");
       $(".logo").removeClass("logo-top-fixed");
       $(".main-link").removeClass("link-top-fixed");
    }
  });
});
