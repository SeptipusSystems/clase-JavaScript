class caballo extends ficha {
  constructor(color, posicion = [0, 0]) {
    super(color, posicion);
    this.tipo = "C";
    this.pintarEnTablero();
  }

  traerImagen(casilla) {
    casilla.textContent = "";
    const img = document.createElement("img");
    if (this.color == "N") {
      img.setAttribute("src", "img/caballo_negro.png");
    } else if (this.color == "B") {
      img.setAttribute("src", "img/caballo_blanco.png");
    }
    casilla.appendChild(img);
  }

  posiblesMovimientos(tablero) {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    const desplazamientos = [-2, -1, 1, 2];

    desplazamientos.forEach((x) => {
      desplazamientos.forEach((y) => {
        if (Math.abs(x) !== Math.abs(y)) {
          this.hastaEstaFicha(tablero, posibles, i + x, j + y);
        }
      });
    });
    return this.estaDentroTablero(posibles);
  }
}
