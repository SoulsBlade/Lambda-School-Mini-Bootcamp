var lastScrollTop;
var scrollStatus;
var toggle = 0;

window.onscroll = function(){
if ($(window).width() <= 750){
        $(".nav-reversed").addClass( "nav");
        $(".nav-scrolled").addClass( "nav");
        $(".nav-scrolled").removeClass("nav-scrolled nav-reversed");
        $(".nav-reversed").removeClass("nav-scrolled nav-reversed");
      }
else if ($(window).scrollTop() <= 0){
      $(".nav-scrolled").addClass( "nav");
      $(".nav-reversed").addClass( "nav");
      $(".nav-scrolled").removeClass("nav-scrolled nav-reversed");
      $(".nav-reversed").removeClass("nav-scrolled nav-reversed");
      scrollStatus="start";
    }
else if ($(window).scrollTop() < lastScrollTop){
      $(".nav").addClass( "nav-scrolled");
      $(".nav-reversed").addClass( "nav-scrolled");
      $(".nav").removeClass("nav nav-reversed");
      $(".nav-reversed").removeClass("nav nav-reversed");
      scrollStatus="scrolled";
    }
else if ($(window).scrollTop() > lastScrollTop && scrollStatus=="scrolled"){
      $(".nav").addClass( "nav-reversed");
      $(".nav-scrolled").addClass( "nav-reversed");
      $(".nav").removeClass("nav nav-scrolled");
      $(".nav-scrolled").removeClass("nav nav-scrolled");
      scrollStatus="reversed";
    }
  lastScrollTop = $(window).scrollTop();
}

$( ".menuButton" ).click(function(){
  if ( toggle == 0){
   $(".nav").addClass( "expanded" );
   $(".nav").removeClass( "retracted" );
  toggle = 1;
  }
  else if ( toggle ==1){
    $(".nav").addClass( "retracted" );
    $(".nav").removeClass( "expanded" );
  toggle = 0;
  }
})
