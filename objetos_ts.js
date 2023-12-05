"use strict";
class ControlRemoto {
    constructor(carcasa, pilas, botones) {
        this.carcasa = carcasa;
        this.pilas = pilas;
        this.botones = botones;
        this.colorCarcasa = "";
    }
    setColorCarcasa(color) {
        this.colorCarcasa = color;
    }
    presentar() {
        console.log(`Hola, soy un control de ${this.carcasa}, uso pilas ${this.pilas}, tengo ${this.botones} botones, y soy de color ${this.colorCarcasa}`);
    }
}
const controlTv = new ControlRemoto("plastico", "AA", 30);
controlTv.setColorCarcasa("Negro");
controlTv.presentar();
const controlAire = new ControlRemoto("Madera", "AAA", 7);
controlAire.setColorCarcasa("Blanco");
controlAire.presentar();
