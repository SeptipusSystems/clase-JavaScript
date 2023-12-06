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

  posiblesMovimientos(tablero) {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    let masmas = true;
    let masmenos = true;
    let menosmas = true;
    let menosmenos = true;

    for (let x = 1; x <= 7; x++) {
      if (masmas) {
        masmas = this.hastaEstaFicha(tablero, posibles, i + x, j + x);
      }
      if (masmenos) {
        masmenos = this.hastaEstaFicha(tablero, posibles, i + x, j - x);
      }
      if (menosmas) {
        menosmas = this.hastaEstaFicha(tablero, posibles, i - x, j + x);
      }
      if (menosmenos) {
        menosmenos = this.hastaEstaFicha(tablero, posibles, i - x, j - x);
      }
    }
    return this.estaDentroTablero(posibles);
  }
}
