import { Ficha } from "./ficha.js";
export class Torre extends Ficha {
  constructor(color, posicion = [0, 0]) {
    super(color, posicion);
    this.tipo = "T";
    this.pintarEnTablero();
  }

  traerImagen(casilla) {
    casilla.textContent = "";
    const img = document.createElement("img");
    if (this.color == "N") {
      img.setAttribute("src", "img/torre_negro.png");
    } else if (this.color == "B") {
      img.setAttribute("src", "img/torre_blanco.png");
    }
    casilla.appendChild(img);
  }

  posiblesMovimientos(tablero) {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    let imas = true;
    let imenos = true;
    let jmas = true;
    let jmenos = true;

    for (let x = 1; x <= 7; x++) {
      if (jmas) {
        jmas = this.hastaEstaFicha(tablero, posibles, i, j + x);
      }
      if (jmenos) {
        jmenos = this.hastaEstaFicha(tablero, posibles, i, j - x);
      }
      if (imas) {
        imas = this.hastaEstaFicha(tablero, posibles, i + x, j);
      }
      if (imenos) {
        imenos = this.hastaEstaFicha(tablero, posibles, i - x, j);
      }
    }
    return this.estaDentroTablero(posibles);
  }
}
