$(document).ready(function () {
  // Add Class
  $("#add").click(function () {
    $("#red-p").addClass("changed-class");
  });

  // SlideToggle
  $("#slide").click(function () {
    $("#img-slide").slideToggle();
  });

  // APPEND
  $("#append").click(function () {
    $("#append-p").append("NEW PARAGRAPH WITH APPEND !!!");
  });
});
