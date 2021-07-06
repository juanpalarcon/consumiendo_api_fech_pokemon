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
        $("#url").html(
          $("#url").html() +
            ` <ul><button>'<a href=${item.url} >¡Quiero saber mas de este pokemon!'</a></button></ul> `
        );
      });

      function saberMas() {
        $("#mas").click(function () {});
      }
    },
    error: function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    },
  });
});

//  codigo que funciona con vainilla js|
// document.querySelector("#body").addEventListener("click", traerDatos());

// function traerDatos() {
//   var request = new XMLHttpRequest();
//   request.open("GET",, true);

//   request.send();
//   request.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       respuesta = JSON.parse(this.responseText);

//       //   console.log(respuesta.results);

//       let name = document.querySelector("#name");
//       name.innerHTML = "";

//       let characteristic = document.querySelector("#characteristic");
//       characteristic.innerHTML = "";

//       for (let item of respuesta.results) {
//         name.innerHTML += ` <ul>${item.name}</ul> `;
//         characteristic.innerHTML += ` <ul><a href= "${item.url}" ></a></ul> ${item.url}`;
//       }

//       //   var nombre = document.querySelector("#nombre-pokemon");
//     }
//   };
// }
