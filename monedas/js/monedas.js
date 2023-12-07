//Dollar USD
/*let cambios = [
  { nombre: "Dollar US", codigo: "USD", taza: "1" },
  { nombre: "Pesos Colombianos", codigo: "COP", taza: "4000" },
  { nombre: "Reales Brasileños", codigo: "BRL", taza: "5" },
  { nombre: "Pesos Argentinos", codigo: "ARP", taza: "800" },
  { nombre: "Pesos Mexicanos", codigo: "MXN", taza: "7" },
  { nombre: "Dollar Canadiense", codigo: "CAD", taza: "1.1" },
  { nombre: "Pesos Chilenos", codigo: "CLP", taza: "700" },
];*/

document.addEventListener("DOMContentLoaded", function () {
  let listas = document.querySelectorAll(".lista-monedas");
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?from=USD`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let cambios = data.rates;
      listas.forEach((lista) => {
        let option = document.createElement("option");
        option.value = 1;
        option.textContent = "USD";
        lista.appendChild(option);
        Object.entries(cambios).forEach(([moneda, taza]) => {
          let option = document.createElement("option");
          option.value = taza;
          option.textContent = moneda;
          lista.appendChild(option);
        });
      });
    })
    .catch((error) => {
      console.error("Error al obtener tasas de cambio:", error);
    });

  /*listas.forEach((lista) => {
    cambios.forEach((moneda) => {
      let option = document.createElement("option");
      option.value = moneda.taza;
      option.textContent = moneda.codigo;
      lista.appendChild(option);
    });
  });*/

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

const url = "https://airport-info.p.rapidapi.com/airport?iata=MDE";

const headers = {
  "X-RapidAPI-Key": "ee591069b1msh0c3b9106de58b4ap129cebjsnb5eea140f504",
  "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
};

const options = {
  method: "GET",
  headers: headers,
};

try {
  fetch(url, options)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("destino").value = data.county;
      console.log(data);
    });
} catch (error) {
  console.error(error);
}
