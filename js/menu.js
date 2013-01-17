$(document).ready(function(){
  $("div.menu a").click(function(event){
    link = $(this).attr("href").slice(1);
    $("div.hidden").fadeOut(1000);
    $("div." + link).fadeIn(2000);
  });
});