import { Ficha } from "./ficha.js";
export class Peon extends Ficha {
  constructor(color, posicion = [0, 0]) {
    super(color, posicion);
    this.tipo = "P";
    this.pintarEnTablero();
  }

  traerImagen(casilla) {
    casilla.textContent = "";
    const img = document.createElement("img");
    if (this.color == "N") {
      img.setAttribute("src", "img/peon_negro.png");
    } else if (this.color == "B") {
      img.setAttribute("src", "img/peon_blanco.png");
    }
    casilla.appendChild(img);
  }

  posiblesMovimientos() {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    if (this.color == "N") {
      if (i == 6) {
        i = i - 1;
        posibles = [...posibles, [i, j]];
      }
      i = i - 1;
      posibles = [...posibles, [i, j]];
    } else if (this.color == "B") {
      if (i == 1) {
        i = i + 1;
        posibles = [...posibles, [i, j]];
      }
      i = i + 1;
      posibles = [...posibles, [i, j]];
    }
    return this.estaDentroTablero(posibles);
  }
}
