$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top - 100
  },1000)
  
 })

$(".info button").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },750)
  
 })
