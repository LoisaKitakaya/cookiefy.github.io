$(document).ready(function () {
  // Navigation function

  $("#cookie-showcase").hide();
  $("#aboutcontainer").hide();

  $("#cookie-nav").click(function () {
    $("#formfororder").hide();
    $("#aboutcontainer").hide();
    $("#cookie-showcase").show();
  });

  $("#home-nav").click(function () {
    $("#cookie-showcase").hide();
    $("#aboutcontainer").hide();
    $("#formfororder").show();
  });

  $("#about-nav").click(function () {
    $("#cookie-showcase").hide();
    $("#formfororder").hide();
    $("#aboutcontainer").show();
  });

  // card functions

  $(".card-detail").hide();

  $(".close-card").click(function () {
    $(".card-detail").fadeOut();
  });

  $("#card11").click(function () {
    $("#card1").fadeIn();
  });

  $("#card22").click(function () {
    $("#card2").fadeIn();
  });

  $("#card33").click(function () {
    $("#card3").fadeIn();
  });

  $("#card44").click(function () {
    $("#card4").fadeIn();
  });

  $("#card55").click(function () {
    $("#card5").fadeIn();
  });

  $("#card66").click(function () {
    $("#card6").fadeIn();
  });

  $("#card77").click(function () {
    $("#card7").fadeIn();
  });

  $("#card88").click(function () {
    $("#card8").fadeIn();
  });
});
