$(document).ready(function() {
  // Anonymous function
  $("div").click(function() {
    $(this).css("color", "purple");
  });

  $("div").mousedown(function() {
    $(this).css("background-color", "lightgreen");
  });

  $("div").mouseup(function() {
    $(this).css("background-color", "transparent");
  });

  $("div").mouseenter(function() {
    $(this).css("color", "yellow");
  });

  $("div").mouseleave(function() {
    $(this).css("color", "black");
  });

  $("#stop").click(function() {
    $("*").unbind("mouseleave");
  });
});