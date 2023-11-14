document.addEventListener("DOMContentLoaded", function () {
  console.log("Termino de cargar...");
  let numeros = document.querySelectorAll(".numero"); // Selecciono todos los elementos que tienen la clase 'numero'
  numeros.forEach((element) => {
    element.onclick = function () {
      let n = parseInt(this.innerHTML);
      let display = document.getElementById("display");
      display.value = display.value + `${n}`;
      console.log(`Un numero: ${n}`);
    };
  });
});
