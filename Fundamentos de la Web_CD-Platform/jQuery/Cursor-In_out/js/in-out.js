$(document).ready(function () {
  // ONLOAD OF PAGE
  $("#hidden1").hide();
  $("#hidden2").hide();
  $("#hidden3").hide();
  $("#hidden4").hide();

  // DISSAPERING NINJA ACTION
  $("#img1").hover(function () {
    $("#img1").hide();
    $("#hidden1").show();
  });
  $("#img2").hover(function () {
    $("#img2").hide();
    $("#hidden2").show();
  });
  $("#img3").hover(function () {
    $("#img3").hide();
    $("#hidden3").show();
  });
  $("#img4").hover(function () {
    $("#img4").hide();
    $("#hidden4").show();
  });

  // RESTORE BUTTON ACTION
  $("#res-btn").hover(function () {
    $("#img1").hide();
    $("#hidden1").show();
    $("#img2").hide();
    $("#hidden2").show();
    $("#img3").hide();
    $("#hidden3").show();
    $("#img4").hide();
    $("#hidden4").show();
  });

  $("#res-btn2").hover(function () {
    $("#img1").show();
    $("#hidden1").hide();
    $("#img2").show();
    $("#hidden2").hide();
    $("#img3").show();
    $("#hidden3").hide();
    $("#img4").show();
    $("#hidden4").hide();
  });
});
