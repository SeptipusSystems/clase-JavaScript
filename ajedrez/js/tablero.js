import { Peon } from "./fichas/peon.js";
import { Torre } from "./fichas/torre.js";
import { Alfil } from "./fichas/alfil.js";
import { Caballo } from "./fichas/caballo.js";
import { Rey } from "./fichas/rey.js";
import { Reina } from "./fichas/reina.js";

export class Tablero {
  constructor(contenedor) {
    this.generarTablero();
    this.rellenar(contenedor);
    this.turno = "B"; //Turno de las Blancas(B) o de las fichas Negras(N)
  }

  rellenar(contenedor) {
    // Crear una matriz de 8 por 8 llena de valores iniciales (por ejemplo, ceros)
    this.tablero = Array.from({ length: 8 }, (_, i) =>
      Array.from({ length: 8 }, (_, j) => this.cargar(contenedor, i, j))
    );
    console.log(this.tablero);
  }

  cargarcasilla(contenedor, posicion) {
    const i = posicion[0];
    const j = posicion[1];
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

  cargarFicha(contenedor, tipo, color, posicion = [0, 0]) {
    /*
       P: "peon",
       T: "torre",
       C: "caballo",
       A: "alfil",
       R: "rey",
       Q: "reina",
     */
    this.cargarcasilla(contenedor, posicion);
    let ficha = 0;
    switch (tipo) {
      case "P":
      case "p":
        ficha = new Peon(color, posicion);
        break;
      case "C":
      case "c":
        ficha = new Caballo(color, posicion);
        break;
      case "A":
      case "a":
        ficha = new Alfil(color, posicion);
        break;
      case "T":
      case "t":
        ficha = new Torre(color, posicion);
        break;
      case "R":
      case "r":
        ficha = new Rey(color, posicion);
        break;
      case "Q":
      case "q":
        ficha = new Reina(color, posicion);
        break;
    }
    return ficha;
  }

  generarTablero() {
    this.tablero = [
      ["T", "C", "A", "Q", "R", "A", "C", "T"],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["t", "c", "a", "q", "r", "a", "c", "t"],
    ];
  }

  cargar(contenedor, i, j) {
    let posicion = [i, j];
    if (this.tablero[i][j] !== undefined && this.tablero[i][j] !== 0) {
      let tipo = this.tablero[i][j];
      console.log(typeof tipo);
      if (typeof tipo !== "string") {
        this.cargarcasilla(contenedor, posicion);
        tipo.pintarEnTablero();
        return tipo;
      } else {
        try {
          let color = tipo === tipo.toUpperCase() ? "B" : "N";
          return this.cargarFicha(contenedor, tipo, color, [i, j]);
        } catch (error) {
          console.log(
            `No se pudieron cargar las ficha: ${tipo} error: `,
            error.message
          );
        }
      }
    }
    return this.cargarFicha(contenedor, 0, 0, [i, j]);
  }

  posiblesMovimientos(cid) {
    //Casilla id
    this.ficha = this.getFichaById(cid);
    return this.ficha.posiblesMovimientos(this.tablero);
  }

  getFichaById(cid) {
    const i = parseInt(cid.charAt(1));
    const j = parseInt(cid.charAt(2));
    return this.tablero[i][j];
  }

  borrarFicha(i, j) {
    let cid = "c" + i + j;
    let casilla = document.getElementById(cid);
    casilla.textContent = "";
  }

  //posibles = [[1,2],[1,1],[0,0],[3,4]]
  mover(ficha, cid, posibles, juego) {
    const i = parseInt(cid.charAt(1));
    const j = parseInt(cid.charAt(2));
    if (posibles.some((coord) => coord[0] === i && coord[1] === j)) {
      let x = ficha.posicion[0];
      let y = ficha.posicion[1];
      this.tablero[x][y] = 0;
      this.borrarFicha(x, y);

      this.tablero[i][j] = ficha;
      ficha.posicion = [i, j];

      ficha.pintarEnTablero();
      console.log(this.tablero);
    }
    juego.contenedor.innerHTML = "";
    this.rellenar(juego.contenedor);
    juego.pintarTablero();
  }
}
