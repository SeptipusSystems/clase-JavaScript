class tablero {
  constructor(contenedor) {
    // Crear una matriz de 8 por 8 llena de valores iniciales (por ejemplo, ceros)
    //
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.classList.add("casilla");
        if ((i + j) % 2 == 0) {
          nuevoElemento.classList.add("blanca");
        } else {
          nuevoElemento.classList.add("negra");
        }
        nuevoElemento.id = "c" + i + j;
        nuevoElemento.textContent = "c" + i + j;
        contenedor.appendChild(nuevoElemento);
      }
    }

    this.tablero = this.rellenar();
    this.turno = "B"; //Turno de las Blancas(B) o de las fichas Negras(N)
  }

  rellenar() {
    let tablero = Array.from({ length: 8 }, (_, i) =>
      Array.from({ length: 8 }, (_, j) => this.ficha(i, j))
    );
    console.log(tablero);
    return tablero;
  }

  cargarFicha(tipo, color, posicion = [0, 0]) {
    /*
       P: "peon",
       T: "torre",
       C: "caballo",
       A: "alfil",
       R: "rey",
       Q: "reina",
     */
    let ficha;
    switch (tipo) {
      case "P":
      case "p":
        ficha = new peon(color, posicion);
        break;
      case "C":
      case "c":
        ficha = new caballo(color, posicion);
        break;
      case "A":
      case "a":
        ficha = new alfil(color, posicion);
        break;
      case "T":
      case "t":
        ficha = new torre(color, posicion);
        break;
      case "R":
      case "r":
        ficha = new rey(color, posicion);
        break;
      case "Q":
      case "q":
        ficha = new reina(color, posicion);
        break;
    }
    return ficha;
  }

  ficha(i, j) {
    let blancas = [
      [0, 0, "T"],
      [0, 7, "T"],
      [0, 1, "C"],
      [0, 6, "C"],
      [0, 2, "A"],
      [0, 5, "A"],
      [0, 3, "R"],
      [0, 4, "Q"],
      [1, 0, "P"],
      [1, 1, "P"],
      [1, 2, "P"],
      [1, 3, "P"],
      [1, 4, "P"],
      [1, 5, "P"],
      [1, 6, "P"],
      [1, 7, "P"],
    ];
    let negras = [
      [7, 0, "t"],
      [7, 7, "t"],
      [7, 1, "c"],
      [7, 6, "c"],
      [7, 2, "a"],
      [7, 5, "a"],
      [7, 3, "r"],
      [7, 4, "q"],
      [6, 0, "p"],
      [6, 1, "p"],
      [6, 2, "p"],
      [6, 3, "p"],
      [6, 4, "p"],
      [6, 5, "p"],
      [6, 6, "p"],
      [6, 7, "p"],
    ];
    for (let k = 0; k < 16; k++) {
      if (blancas[k][0] == i && blancas[k][1] == j) {
        let tipo = blancas[k][2];
        try {
          return this.cargarFicha(tipo, "B", [i, j]);
        } catch (error) {
          console.log(
            `No se pudieron cargar las ficha: ${tipo} error: `,
            error.message
          );
        }
        //return blancas[k][2];
      }
      if (negras[k][0] == i && negras[k][1] == j) {
        let tipo = negras[k][2];
        try {
          return this.cargarFicha(tipo, "N", [i, j]);
        } catch (error) {
          console.log(
            `No se pudieron cargar las ficha: ${tipo} error: `,
            error.message
          );
        }
        //return negras[k][2];
      }
    }
    return 0;
  }

  posiblesMovimientos(cid) {
    //Casilla id
    const i = parseInt(cid.charAt(1));
    const j = parseInt(cid.charAt(2));
    this.ficha = this.tablero[i][j];
    return this.ficha.posiblesMovimientos(this.tablero);
  }

  borrarFicha(i, j) {
    let cid = "c" + i + j;
    let casilla = document.getElementById(cid);
    casilla.textContent = "";
  }

  mover(ficha, i, j) {
    let x = ficha.posicion[0];
    let y = ficha.posicion[1];
    this.tablero[x][y] = 0;
    this.borrarFicha(x, y);

    this.tablero[i][j] = ficha;
    ficha.posicion = [i, j];

    ficha.pintarEnTablero();
    console.log(this.tablero);
  }
}
