const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Genera un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinaNumero() {
  rl.question("Adivina el número (entre 1 y 100): ", (respuesta) => {
    const intento = parseInt(respuesta);

    if (isNaN(intento) || intento < 1 || intento > 100) {
      console.log("Por favor, ingresa un número válido entre 1 y 100.");
    } else {
      intentos++;

      if (intento === numeroSecreto) {
        console.log(
          `¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`
        );
        rl.close();
      } else {
        const pista = intento < numeroSecreto ? "demasiado bajo" : "demasiado alto";
        console.log(`Incorrecto. El número es ${pista}. Intenta nuevamente.`);
        adivinaNumero(); // Llamada recursiva para permitir más intentos
      }
    }
  });
}

// Inicia el juego
console.log("¡Bienvenido a Adivina el Número!");
adivinaNumero();