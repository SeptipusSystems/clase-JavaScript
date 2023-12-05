function generarArrayAleatorio(n, rangoInicio, rangoFin) {
  const arrayAleatorio = [];
  for (let i = 0; i < n; i++) {
    const numeroAleatorio =
      Math.floor(Math.random() * (rangoFin - rangoInicio + 1)) + rangoInicio;
    arrayAleatorio.push(numeroAleatorio);
  }
  return arrayAleatorio;
}

let array = generarArrayAleatorio(100, 0, 50);
console.log(array);
let buscar = 50;

function buscarlineal(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      console.log("encontrado en la posicion: " + i);
    }
  }
}

function busquedaBinaria(array, elemento) {
  array.sort();
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === elemento) {
      return medio; // Devuelve el índice del elemento si se encuentra
    } else if (array[medio] < elemento) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // Devuelve -1 si el elemento no se encuentra en el array
}

miArray.indexOf(elementoABuscar);

miArray.splice(indiceAEliminar, 1);

console.log(busquedaBinaria(array, buscar));