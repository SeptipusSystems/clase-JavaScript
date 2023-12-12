import { Ficha } from "./ficha.js";
export class Rey extends Ficha {
  constructor(color, posicion = [0, 0]) {
    super(color, posicion);
    this.tipo = "R";
    this.pintarEnTablero();
  }

  traerImagen(casilla) {
    casilla.textContent = "";
    const img = document.createElement("img");
    if (this.color == "N") {
      img.setAttribute("src", "img/rey_negro.png");
    } else if (this.color == "B") {
      img.setAttribute("src", "img/rey_blanco.png");
    }
    casilla.appendChild(img);
  }

  posiblesMovimientos(tablero) {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];

    [-1, 0, 1].forEach((x) => {
      [-1, 0, 1].forEach((y) => {
        if (x != 0 || y != 0) {
          this.hastaEstaFicha(tablero, posibles, i + x, j + y);
        }
      });
    });
    return this.estaDentroTablero(posibles);
  }
}
