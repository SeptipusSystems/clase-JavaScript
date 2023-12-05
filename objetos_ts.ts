class ControlRemoto {
  private colorCarcasa: string;
  constructor(
    public carcasa: string,
    public pilas: string,
    public botones: number
  ) {
    this.colorCarcasa = "";
  }

  setColorCarcasa(color: string): void {
    this.colorCarcasa = color;
  }

  presentar(): void {
    console.log(
      `Hola, soy un control de ${this.carcasa}, uso pilas ${this.pilas}, tengo ${this.botones} botones, y soy de color ${this.colorCarcasa}`
    );
  }
}

const controlTv = new ControlRemoto("plastico", "AA", 30);
controlTv.setColorCarcasa("Negro");
controlTv.presentar();

const controlAire = new ControlRemoto("Madera", "AAA", 7);
controlAire.setColorCarcasa("Blanco");
controlAire.presentar();
