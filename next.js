$(document).ready(function () {
  $("#mas").click(function (event) {
    $("#esconder").slideToggle("slow");
    $heightDown = $(window).height() - $("#esconder").height();

    $("html, body").animate(
      {
        scrollTop: $heightDown,
      },
      1000
    );
  });

  $("#name").html("");
  $("#url").html("");
  $.ajax({
    type: "get",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    data: "data",

    success: function (data) {
      $("#esconder").hide();
      console.log(data.results);
      $.each(data.results, function (i, item) {
        $("#n").html($("#n").html() + ` <ul>${item.name}</ul> `);
        $("#c").html($("#c").html() + ` <ul>${item.url}</ul> `);
      });
    },
    error: function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    },
  });
});
