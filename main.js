$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top - 60
  },750)
  
 })

$(".info button").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },750)
  
 })

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $overlay = $(".overlay");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $overlay.height() - $nav.height());
  });
});

