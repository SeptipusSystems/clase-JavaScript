const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function adivinaNumero() {
  rl.question("Adivina el numero del 1 al 100: ", (numUsuario) => {
    console.log(`Has ingresado: ${numUsuario}`);
    console.log(parseInt(numUsuario) < numAleatorio);
    if (numUsuario < numAleatorio) {
      console.log("Mas...");
    } else {
      console.log("Menos...");
    }
    if (numAleatorio != numUsuario) {
      adivinaNumero();
    } else {
      rl.close();
    }
  });
  rl.on("close", () => {
    console.log("Adivinaste!!!");
    process.exit(0);
  });
}

var numAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio);
adivinaNumero();
