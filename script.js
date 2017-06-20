$(document).ready(function () {
  $("#card").flip();
  $('#card').click(function () {
    var x = "armandbancila" /*random comment so that the stupid spambots don't find out that this is my email*/ + "@" + "gmail" + "." + "com";
    $("#email").text(x);
  });
  $(".back").children().click(function (e) {
    e.stopPropagation();
  });
});