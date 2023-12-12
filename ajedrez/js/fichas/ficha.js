export class Ficha {
  constructor(color, posicion = [0, 0]) {
    this.color = color;
    this.posicion = posicion;
  }

  pintarEnTablero() {
    //console.log(`${this.color} , ${this.tipo}, ${this.posicion}`);
    const id = "#c" + this.posicion[0] + this.posicion[1];
    const casilla = document.querySelector(id);
    this.traerImagen(casilla);
  }

  traerImagen(casilla) {
    console.log("No hay metodo de pintar para la subcalse" + this.tipo);
  }

  posiblesMovimientos() {
    console.log("No hay movimientos para la subcalse" + this.tipo);
    return [];
  }

  verificarCoordenadas(i, j) {
    return dentroDelRango;
  }

  estaDentroTablero(posibles) {
    let nposibles = [];
    posibles.forEach((coo) => {
      const i = coo[0];
      const j = coo[1];
      if (this.dentroTablero(i, j)) {
        nposibles.push([i, j]);
      }
    });
    return nposibles;
  }

  dentroTablero(i, j) {
    return i >= 0 && i <= 7 && j >= 0 && j <= 7;
  }

  hayFichaPosicion(tablero, i, j) {
    if (this.dentroTablero(i, j)) {
      return tablero[i][j] != 0;
    }
    return false;
  }

  hastaEstaFicha(tablero, posibles, i, j) {
    if (this.hayFichaPosicion(tablero, i, j)) {
      let ficha = tablero[i][j];
      if (ficha.color != this.color) {
        posibles.push([i, j]);
      }
      return false;
    } else {
      posibles.push([i, j]);
    }
    return true;
  }
}
