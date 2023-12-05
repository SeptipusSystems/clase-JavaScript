//Dollar USD
let cambios = [
  { nombre: "Dollar US", codigo: "USD", taza: "1" },
  { nombre: "Pesos Colombianos", codigo: "COP", taza: "4000" },
  { nombre: "Reales Brasileños", codigo: "BRL", taza: "5" },
  { nombre: "Pesos Argentinos", codigo: "ARP", taza: "800" },
  { nombre: "Pesos Mexicanos", codigo: "MXN", taza: "7" },
  { nombre: "Dollar Canadiense", codigo: "CAD", taza: "1.1" },
  { nombre: "Pesos Chilenos", codigo: "CLP", taza: "700" },
];

document.addEventListener("DOMContentLoaded", function () {
  let listas = document.querySelectorAll(".lista-monedas");

  listas.forEach((lista) => {
    cambios.forEach((moneda) => {
      let option = document.createElement("option");
      option.value = moneda.taza;
      option.textContent = moneda.codigo;
      lista.appendChild(option);
    });
  });

  let cambiar = document.getElementById("cambiar");

  cambiar.addEventListener("click", () => {
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let monedas_origen = document.getElementById("monedas_origen").value;
    let monedas_destino = document.getElementById("monedas_destino").value;

    destino = (origen / monedas_origen) * monedas_destino;
    document.getElementById("destino").value = destino;
    console.log(destino);
  });
});
