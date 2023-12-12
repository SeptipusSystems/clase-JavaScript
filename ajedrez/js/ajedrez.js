import { Juego } from "./juego.js";

let table;

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector(".tablero");
  new Juego(contenedor);
});
