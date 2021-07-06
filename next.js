// aun no funciona

document.querySelector("#mas").addEventListener("click", traerDatos());

function traerDatos() {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    true
  );

  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      respuesta = JSON.parse(this.responseText);

      let name = document.querySelector("#name");
      name.innerHTML = "";

      let characteristic = document.querySelector("#characteristic");
      characteristic.innerHTML = "";

      for (let item of respuesta.results) {
        name.innerHTML += ` <ul>${item.name}</ul> `;
        characteristic.innerHTML += ` <ul><a href= "${item.url}" ></a></ul> ${item.url}`;
      }

      //   var nombre = document.querySelector("#nombre-pokemon");
    }
  };
}
