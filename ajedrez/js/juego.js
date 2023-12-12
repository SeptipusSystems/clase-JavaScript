import { Tablero } from "./tablero.js";

export class Juego {
  constructor(contenedor) {
    this.table = new Tablero(contenedor);
    this.contenedor = contenedor;
    this.pintarTablero();
    this.posibles = [];
  }

  pintarTablero() {
    const casillas = document.querySelectorAll(".casilla");
    casillas.forEach((item) => {
      if (item.querySelector("img")) {
        let img = item.querySelector("img");
        img.addEventListener("click", () => {
          casillas.forEach(function (casilla) {
            casilla.classList.remove("seleccionado");
          });
          this.ficha = this.table.getFichaById(item.id);
          this.posibles = this.ficha.posiblesMovimientos(this.table.tablero);
          this.posibles.forEach((pos) => {
            let i = pos[0];
            let j = pos[1];
            let cid = "c" + i + j;
            let casillaPosible = document.getElementById(cid);
            casillaPosible.classList.add("seleccionado");

            let n = this.table.getFichaById(cid);
            if (typeof n !== "string") {
              if (this.ficha.color != n.color) {
                casillaPosible.innerHTML = "aqui hubo un enemigo";
                casillaPosible.addEventListener("click", () => {
                  this.table.mover(this.ficha, item.id, this.posibles, this);
                  console.log("casilla con enemigo clickeada");
                });
              }
            }
          });
        });
      } else {
        item.addEventListener("click", () => {
          this.table.mover(this.ficha, item.id, this.posibles, this);
          console.log("casilla sin ficha clickeada");
        });
      }
    });
  }
}
