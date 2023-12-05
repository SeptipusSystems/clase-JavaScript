try {
  // Código que podría lanzar una excepción
  let result = 10 / w; // Intentando dividir por cero
  console.log(result); // Esta línea no se ejecutará si ocurre una excepción antes
  if (result < 0) {
    throw new Error("El numero debe ser mayor 0");
  }
} catch (error) {
  // Manejo de la excepción
  console.log(error);
} finally {
  // Este bloque se ejecutará independientemente de si se lanzó una excepción o no
  console.log("Finalizando...");
}
