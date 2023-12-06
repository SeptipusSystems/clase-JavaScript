let table;

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector(".tablero");
  table = new tablero(contenedor);

  const casillas = document.querySelectorAll(".casilla");

  casillas.forEach(function (item) {
    if (item.querySelector("img")) {
      item.addEventListener("click", function () {
        casillas.forEach(function (casilla) {
          casilla.classList.remove("seleccionado");
          casilla.removeEventListener("click", moverFicha);
        });
        const posibles = table.posiblesMovimientos(item.id);
        posibles.forEach(function (pos) {
          let i = pos[0];
          let j = pos[1];
          let cid = "c" + i + j;
          table.nuevaPosicion = [i, j];
          let casillaPosible = document.getElementById(cid);
          casillaPosible.classList.add("seleccionado");
          casillaPosible.addEventListener("click", moverFicha);
        });
      });
    }
  });
});

function moverFicha() {
  i = table.nuevaPosicion[0];
  j = table.nuevaPosicion[1];
  table.mover(table.ficha, i, j);
}
