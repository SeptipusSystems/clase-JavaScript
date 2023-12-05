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

  posiblesMovimientos() {
    let posibles = [];
    let i = this.posicion[0];
    let j = this.posicion[1];
    const desplazamientos = [-2, -1, 1, 2];

    desplazamientos.forEach((desplazamientoFila) => {
      desplazamientos.forEach((desplazamientoColumna) => {
        if (Math.abs(desplazamientoFila) !== Math.abs(desplazamientoColumna)) {
          const nuevaFila = i + desplazamientoFila;
          const nuevaColumna = j + desplazamientoColumna;
          posibles.push([nuevaFila, nuevaColumna]);
        }
      });
    });
    return this.estaDentroTablero(posibles);
  }
}
