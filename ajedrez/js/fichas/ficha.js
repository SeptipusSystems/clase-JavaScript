class ficha {
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
  }

  verificarCoordenadas(i, j) {
    return dentroDelRango;
  }

  estaDentroTablero(posibles) {
    let nposibles = [];
    posibles.forEach((coo) => {
      const i = coo[0];
      const j = coo[1];
      if (i >= 0 && i <= 7 && j >= 0 && j <= 7) {
        nposibles.push([i, j]);
      }
    });
    return nposibles;
  }
}
