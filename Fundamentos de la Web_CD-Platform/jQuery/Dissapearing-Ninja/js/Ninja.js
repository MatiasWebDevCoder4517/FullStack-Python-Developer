$(document).ready(function () {
  // ONLOAD OF PAGE
  $("#hidden1").hide();
  $("#hidden2").hide();
  $("#hidden3").hide();
  $("#hidden4").hide();
  $("#hidden5").hide();
  $("#hidden6").hide();
  $("#hidden7").hide();
  $("#hidden8").hide();
  $("#hidden9").hide();
  $("#hidden10").hide();
  $("#hidden11").hide();
  $("#hidden12").hide();

  // DISSAPERING NINJA ACTION
  $("#img1").click(function () {
    $("#img1").hide();
    $("#hidden1").show();
  });
  $("#img2").click(function () {
    $("#img2").hide();
    $("#hidden2").show();
  });
  $("#img3").click(function () {
    $("#img3").hide();
    $("#hidden3").show();
  });
  $("#img4").click(function () {
    $("#img4").hide();
    $("#hidden4").show();
  });
  $("#img5").click(function () {
    $("#img5").hide();
    $("#hidden5").show();
  });
  $("#img6").click(function () {
    $("#img6").hide();
    $("#hidden6").show();
  });
  $("#img7").click(function () {
    $("#img7").hide();
    $("#hidden7").show();
  });
  $("#img8").click(function () {
    $("#img8").hide();
    $("#hidden8").show();
  });
  $("#img9").click(function () {
    $("#img9").hide();
    $("#hidden9").show();
  });
  $("#img10").click(function () {
    $("#img10").hide();
    $("#hidden10").show();
  });
  $("#img11").click(function () {
    $("#img11").hide();
    $("#hidden11").show();
  });
  $("#img12").click(function () {
    $("#img12").hide();
    $("#hidden12").show();
  });

  // RESTORE BUTTON ACTION
  $("#res-btn").click(function () {
    $("#img1").show();
    $("#hidden1").hide();
    $("#img2").show();
    $("#hidden2").hide();
    $("#img3").show();
    $("#hidden3").hide();
    $("#img4").show();
    $("#hidden4").hide();
    $("#img5").show();
    $("#hidden5").hide();
    $("#img6").show();
    $("#hidden6").hide();
    $("#img7").show();
    $("#hidden7").hide();
    $("#img8").show();
    $("#hidden8").hide();
    $("#img9").show();
    $("#hidden9").hide();
    $("#img10").show();
    $("#hidden10").hide();
    $("#img11").show();
    $("#hidden11").hide();
    $("#img12").show();
    $("#hidden12").hide();
  });
});
