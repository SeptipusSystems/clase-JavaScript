class alfil extends ficha {
  constructor(color, posicion = [0, 0]) {
    super(color, posicion);
    this.tipo = "A";
    this.pintarEnTablero();
  }

  traerImagen(casilla) {
    casilla.textContent = "";
    const img = document.createElement("img");
    if (this.color == "N") {
      img.setAttribute("src", "img/alfil_negro.png");
    } else if (this.color == "B") {
      img.setAttribute("src", "img/alfil_blanco.png");
    }
    casilla.appendChild(img);
  }

  hayFichaPosicion(tablero, posibles, i, j) {
    if (tablero[i][j] != 0) {
      let ficha = tablero[i][j];
      console.log(ficha);
      //if (ficha.color != this.color) {
      posibles.push([i, j]);
      // }
      return true;
    } else {
      posibles.push([i, j]);
    }
    return false;
  }

  posiblesMovimientos(tablero) {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    let masmas = true;
    let masmenos = true;
    let menosmas = true;
    let menosmenos = true;

    for (let x = 1; x <= 7; x++) {
      if (this.hayFichaPosicion(tablero, posibles, i + x, j + x) || masmas) {
        masmas = false;
      }
      if (this.hayFichaPosicion(tablero, posibles, i + x, j - x) || masmenos) {
        masmenos = false;
      }
      if (this.hayFichaPosicion(tablero, posibles, i - x, j + x) || menosmas) {
        menosmas = false;
      }
      if (
        this.hayFichaPosicion(tablero, posibles, i - x, j - x) ||
        menosmenos
      ) {
        menosmenos = false;
      }
    }
    return this.estaDentroTablero(posibles);
  }
}
