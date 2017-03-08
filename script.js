$(document).ready(function () {
  $("#card").flip();
  $('#card').click(function(){
    $("#email").text("armandbancila@gmail.com");
});
  $(".back").children().click(function(e){
    e.stopPropagation();
  });
});