$(document).ready(function () {
  $("#name").html("");
  $("#url").html("");
  $.ajax({
    type: "get",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: "https://pokeapi.co/api/v2/pokemon/",
    data: "data",

    success: function (data) {
      console.log(data.results);
      $.each(data.results, function (i, item) {
        $("#name").html($("#name").html() + ` <ul>${item.name}</ul> `);
        $("#url").html($("#url").html() + ` <ul>${item.url}</ul> `);
      });
    },
    error: function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    },
  });
});
