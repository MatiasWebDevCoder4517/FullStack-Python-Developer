$(document).ready(function () {
  for (var i = 1; i <= 30; i++) {
    console.log(i);
    var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
    $.get(
      url,
      function (res) {
        console.log("res", res);
        console.log("id", res.id);
        $("#pokemons").append(
          "<img src='" + res.sprites.front_default + "' id='" + res.id + "'>"
        );
      },
      "json"
    );
  }
});
