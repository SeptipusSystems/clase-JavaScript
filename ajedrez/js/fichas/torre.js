class torre extends ficha {
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
}
