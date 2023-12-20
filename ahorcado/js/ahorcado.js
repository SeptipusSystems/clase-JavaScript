const palabras = [
  "javascript",
  "programacion",
  "desarrollo",
  "tecnologia",
  "computadora",
  "html",
  "css",
  "python",
  "codigo",
  "innovacion",
  "web",
  "api",
  "framework",
  "backend",
  "frontend",
  "base_datos",
  "seguridad",
  "servidor",
  "responsive",
  "interfaz",
  "git",
  "versionamiento",
  "javascript",
  "react",
  "angular",
  "vue",
  "node",
  "express",
  "mongo",
  "sql",
  "firebase",
  "redux",
  "typescript",
  "bootstrap",
  "jquery",
  "ajax",
  "json",
  "webpack",
  "heroku",
  "docker",
  "api_rest",
  "dominio",
  "hosting",
  "https",
  "ssl",
  "firebase",
  "cloud",
  "agil",
  "scrum",
  "kanban",
  "html5",
  "css3",
  "sass",
  "less",
  "webpack",
  "github",
  "bitbucket",
  "bash",
  "shell",
  "linux",
  "ubuntu",
  "centos",
  "apache",
  "nginx",
  "dns",
  "jwt",
  "oauth",
  "jwt",
  "cookies",
  "mvc",
  "mvvm",
  "graphql",
  "diseño",
  "usabilidad",
  "ux",
  "ui",
  "responsive",
  "pwa",
  "testing",
  "debugging",
  "analitica",
  "prototipo",
  "iteracion",
  "metodologia",
  "tipado",
  "tdd",
  "bdd",
  "herencia",
  "polimorfismo",
  "encapsulamiento",
  "abstraccion",
  "algoritmo",
  "eficiencia",
  "seguridad",
  "escalabilidad",
  "renderizado",
  "hooks",
  "estado",
  "props",
  "componente",
  "router",
  "modelo",
  "vista",
  "controlador",
  "clase",
  "objeto",
  "instancia",
  "metodo",
  "evento",
  "manipulacion",
  "asincrono",
  "promesa",
  "await",
  "fetch",
  "http",
  "estado",
  "componentDidMount",
  "redux",
  "useState",
  "useEffect",
  "map",
  "filter",
  "reduce",
  "arrow_function",
  "callback",
  "declaracion",
  "expresion",
  "hoisting",
  "closure",
  "scope",
  "callback",
  "es6",
];
/*  */

const adivina = palabras[Math.ceil(Math.random() * (palabras.length - 1))];
let erroneas = 0;
let completar = 0;
document.addEventListener("DOMContentLoaded", () => {
  let letras = document.getElementById("letras");
  "abcdefghijklmnñopqrstuvwxyz".split("").forEach(function (letra) {
    let boton = document.createElement("button");
    boton.textContent = letra;
    boton.addEventListener("click", () => {
      if (adivina.includes(letra)) {
        let seleccionada = document.querySelectorAll(".letra" + letra);
        seleccionada.forEach((sletra) => {
          letra = letra.toUpperCase();
          sletra.value = letra;
          completar++;
        });
        if (completar == adivina.length) {
          let ahorcado = document.getElementById("ahorcado");
          let texto = document.createElement("span");
          texto.textContent = "Felicidades has ganado el juego";
          ahorcado.appendChild(texto);
          //todo: agregar funcion para bloquear los botones
        }
      } else {
        erroneas++;
        let ahorcado = document.getElementById("ahorcado");
        if (erroneas == 7) {
          let texto = document.createElement("span");
          texto.textContent = "Jugador 234 has sido eliminado";
          ahorcado.appendChild(texto);
        } else {
          let img = document.createElement("img");
          ahorcado.textContent = "";
          img.src = "img/ahorcado-" + erroneas + ".png";
          ahorcado.appendChild(img);
          console.log("no hay " + letra + " en la palabra");
        }
      }
    });
    letras.appendChild(boton);
  });

  let palabra = document.getElementById("palabra");
  adivina.split("").forEach(function (letra) {
    let input = document.createElement("input");
    input.className = "letra" + letra;
    input.readOnly = true;
    palabra.appendChild(input);
  });
});
