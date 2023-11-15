function numero(n) {
  let display = document.getElementById("display");
  if (operacion === "=") {
    display.value = "";
    operacion = "";
  }
  display.value = display.value + `${n}`;
  console.log(`Un numero: ${n}`);
}

function borrar_numero() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function borrar_todo() {
  let display = document.getElementById("display");
  display.value = "";
}

var memoria = null;

var operacion = "";

function operar(op) {
  let display = document.getElementById("display");
  operacion = op;
  if (memoria !== null) {
    igualar(display.value, false);
  } else {
    memoria = display.value;
  }
  display.value = "";
  console.log(memoria);
}

function igualar(valor, final) {
  let display = document.getElementById("display");
  if (final === true) {
    igualar(display.value, false);
    if (operacion !== "=") {
      display.value = memoria;
      memoria = null;
    }
    operacion = "=";
  } else {
    if (operacion == "s") {
      memoria = parseFloat(memoria) + parseFloat(valor);
    }
    if (operacion == "r") {
      memoria = memoria - valor;
    }
    if (operacion == "x") {
      memoria = memoria * valor;
    }
    if (operacion == "d") {
      memoria = memoria / valor;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Termino de cargar...");
  let numeros = document.querySelectorAll(".numero"); // Selecciono todos los elementos que tienen la clase 'numero'
  numeros.forEach((element) => {
    element.onclick = function () {
      let n = parseInt(this.innerHTML);
      numero(n);
    };
  });

  let sumar = document.getElementById("sumar");
  sumar.onclick = () => {
    operar("s");
  };

  let resta = document.getElementById("resta");
  resta.onclick = () => {
    operar("r");
  };

  let multiplicacion = document.getElementById("multiplicar");
  multiplicacion.onclick = function () {
    operar("x");
  };

  let division = document.getElementById("division");
  division.onclick = function () {
    operar("d");
  };

  let punto = document.getElementById("punto");
  punto.onclick = () => {
    let display = document.getElementById("display");
    if (display.value == "") {
      numero("0.");
    }
    if (!display.value.includes(".")) {
      numero(".");
    }
  };

  let igual = document.getElementById("igual");
  igual.onclick = () => {
    igualar(0, true);
  };

  let borrar = document.querySelectorAll("#borrar");
  borrar[1].onclick = () => {
    borrar_numero();
  };

  borrar[0].onclick = function () {
    borrar_todo();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key >= "0" && e.key <= "9") {
      numero(e.key);
    }
    if (e.key === "Backspace") {
      borrar_numero();
    }
  });
});
