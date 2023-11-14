let saludo;
let idioma;
let saludos = {
  español: "Hola mundo",
  ingles: "Hello word",
  portugues: "Bom dia",
  griego: "Hola Cesar",
  frances: "Hola Franco",
};

for ([idioma, saludo] of Object.entries(saludos)) {
  console.log(idioma + " : " + saludo);
}

idioma = "español";

if (idioma in saludos) {
  saludo = saludos[idioma];
} else {
  saludo = "No hay saludo";
}
