document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector(".tablero");
  let table = new tablero(contenedor);

  const casillas = document.querySelectorAll(".casilla");

  casillas.forEach(function (item) {
    if (item.querySelector("img")) {
      item.addEventListener("click", function () {
        casillas.forEach(function (casilla) {
          casilla.classList.remove("seleccionado");
        });
        const posibles = table.posiblesMovimientos(item.id);
        console.log(posibles);
        posibles.forEach(function (pos) {
          let i = pos[0];
          let j = pos[1];
          let cid = "c" + i + j;
          let casillaPosible = document.getElementById(cid);
          casillaPosible.classList.add("seleccionado");
        });
      });
    }
  });
});
