function selectionSort(array) {
  let a = 0;
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Encontrar el índice del elemento mínimo en el resto del array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      a++;
    }

    // Intercambiar el elemento mínimo con el elemento en la posición actual
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log(a);
  return array;
}

function sort_enclase(array) {
  let a = 0;
  let veces = 0;
  while (veces < array.length) {
    let v = 0;
    for (const k in array) {
      e = array[k];
      w = parseInt(k) + 1;
      if (e > array[w]) {
        array[k] = array[w];
        array[w] = e;
        v++;
      }
      a++;
    }
    if (v == 0) {
      break;
    }
    veces++;
  }
  console.log(a);
}

function insertionSort(array) {
  const n = array.length;
  let a = 0;
  for (let i = 1; i < n; i++) {
    // Guardar el valor actual para insertarlo en la posición correcta
    const valorActual = array[i];

    // Inicializar el índice para comparar con el valor actual
    let j = i - 1;

    // Mover los elementos mayores que el valor actual a la derecha
    while (j >= 0 && array[j] > valorActual) {
      array[j + 1] = array[j];
      j--;
      a++;
    }

    // Insertar el valor actual en la posición correcta
    array[j + 1] = valorActual;
  }
  console.log(a);
  return array;
}

var a = 0;
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Seleccionar un elemento pivote (puede ser el primer elemento)
  const pivote = array[0];

  // Dividir el array en dos partes: elementos menores que el pivote y elementos mayores que el pivote
  const menores = [];
  const mayores = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivote) {
      menores.push(array[i]);
    } else {
      mayores.push(array[i]);
    }
    a++;
  }

  // Concatenar recursivamente los arrays menores, el pivote y los arrays mayores
  return quickSort(menores).concat(pivote, quickSort(mayores));
}

function generarArrayAleatorio(n, rangoInicio, rangoFin) {
  const arrayAleatorio = [];
  for (let i = 0; i < n; i++) {
    const numeroAleatorio =
      Math.floor(Math.random() * (rangoFin - rangoInicio + 1)) + rangoInicio;
    arrayAleatorio.push(numeroAleatorio);
  }
  return arrayAleatorio;
}

let array = generarArrayAleatorio(250, 0, 100);
console.log(array);

console.log("selectionSort");
selectionSort(array);

console.log("sort_enclase");
sort_enclase(array);

console.log("insertionSort");
insertionSort(array);

console.log("quickSort");
quickSort(array);
console.log(a);
