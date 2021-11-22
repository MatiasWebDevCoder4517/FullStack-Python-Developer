$(document).ready(function () {
  $("form").submit(function () {
    var api_key = "27f545313bc713e209e31926699352f7";
    var city = $("input:text[name=city]").val();
    $.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        api_key,
      function (res) {
        var html_str = "";
        html_str +=
          "<p>" +
          res["name"] +
          ": " +
          res["weather"][0]["description"] +
          "</p>";
        html_str += "<p>" + "Temperature: " + res["main"]["temp"] + " F</p>";
        $("#results").html(html_str);
      },
      "jsonp"
    );
    return false;
  });
});
