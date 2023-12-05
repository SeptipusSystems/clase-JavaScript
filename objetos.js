function Control_remoto(carcasa, pilas, botones) {
  this.carcasa = carcasa;
  this.pilas = pilas;
  this.botones = botones;
}

Control_remoto.prototype.set_color_carcasa = function (color) {
  this.color_carcasa = color;
};

Control_remoto.prototype.presentar = function () {
  console.log(
    `Hola, soy un control de ${this.carcasa}, uso pilas ${this.pilas}, tengo ${this.botones} botones, y soy de color ${this.color_carcasa}`
  );
};

var control_tv = new Control_remoto("plastico", "AA", 30);
control_tv.set_color_carcasa("Negro");
control_tv.presentar();

var control_aire = new Control_remoto("Madera","AAA","7");
control_aire.set_color_carcasa("Blanco");
control_aire.presentar();

