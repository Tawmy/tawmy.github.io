$(document).ready(function(){
  
  $(".title").each(function(){
    var totalwidth = $(this).parent(".tile").width();
    if($(this).width() > (totalwidth / 1.25)){
      $(this).next(".score").css({"border-top" : "0.625em solid transparent"});
      $(this).next(".score").next(".description").css({"margin-top" : "1.25em"});
    }
  });
});