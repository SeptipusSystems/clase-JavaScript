function aumentarCoordenadas(coordenadas, factorAumento) {
  const nuevasCoordenadas = [];

  for (let i = 0; i < coordenadas.length - 1; i++) {
    const puntoActual = coordenadas[i];
    const puntoSiguiente = coordenadas[i + 1];

    nuevasCoordenadas.push(puntoActual);

    for (let j = 1; j < factorAumento; j++) {
      const nuevoPunto = [
        puntoActual[0] +
          (j / factorAumento) * (puntoSiguiente[0] - puntoActual[0]),

        puntoActual[1] +
          (j / factorAumento) * (puntoSiguiente[1] - puntoActual[1]),
      ];

      nuevasCoordenadas.push(nuevoPunto);
    }
  }

  nuevasCoordenadas.push(coordenadas[coordenadas.length - 1]);

  return nuevasCoordenadas;
}

function calcularTangente(pos1, pos2) {
  const dx = pos1[0] - pos2[0];
  const dy = pos1[1] - pos2[1];

  // Calcula el ángulo de la tangente en radianes
  const tangente = -Math.atan2(dy, dx);
  return tangente;
}

let pistaazul = [
  [315, 220],
  [315, 105],
  [315, 70],
  [285, 60],
  [170, 60],
  [135, 75],
  [120, 105],
  [120, 145],
  [135, 170],
  [170, 185],
  [210, 185],
  [240, 215],
  [225, 240],
  [205, 245],
  [115, 245],
  [75, 265],
  [65, 300],
  [65, 340],
  [100, 385],
  [125, 395],
  [155, 385],
  [165, 355],
  [175, 345],
  [225, 345],
  [245, 390],
  [260, 395],
  [300, 395],
  [320, 380],
  [315, 345],
  [315, 220],
];
/*
let pistaazul = [
  [215, 90],
  [165, 90],
  [115, 90],
  [65, 115],
  [70, 165],
  [120, 190],
  [170, 205],
  [215, 255],
  [195, 305],
  [175, 355],
  [195, 405],
  [245, 430],
  [295, 410],
  [345, 330],
  [365, 280],
  [365, 230],
  [365, 180],
  [360, 130],
  [335, 100],
  [285, 90],
  [235, 90],
];
*/
let pistaroja = [
  [335, 220],
  [335, 105],
  [315, 70],
  [285, 60],
  [170, 60],
  [135, 75],
  [120, 105],
  [120, 145],
  [135, 170],
  [170, 185],
  [210, 185],
  [240, 215],
  [225, 240],
  [205, 245],
  [115, 245],
  [75, 265],
  [65, 300],
  [65, 340],
  [100, 385],
  [125, 395],
  [155, 385],
  [165, 355],
  [175, 345],
  [225, 345],
  [245, 390],
  [260, 395],
  [300, 395],
  [320, 380],
  [335, 345],
  [335, 220],
];
/*
let pistaroja = [
  [215, 110],
  [165, 110],
  [115, 110],
  [90, 115],
  [110, 165],
  [190, 190],
  [215, 205],
  [235, 255],
  [225, 305],
  [195, 355],
  [230, 405],
  [280, 395],
  [295, 375],
  [315, 330],
  [345, 280],
  [345, 230],
  [345, 180],
  [340, 130],
  [315, 110],
  [285, 110],
  [235, 110],
];
*/

let c1 = 0;
let c2 = 0;
pistaazul = aumentarCoordenadas(pistaazul, 10);
pistaroja = aumentarCoordenadas(pistaroja, 10);

document.addEventListener("DOMContentLoaded", () => {
  /*[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(() => {
    let numero = Math.random() * 100045;
    let enteroCien = Math.ceil(numero / 100) * 100;
    let enteroCien2 = Math.floor(numero / 100) * 100;
    //console.log(numero, enteroCien, enteroCien2);
  });*/

  let cAzul = document.getElementById("corredor1");
  let cRojo = document.getElementById("corredor2");

  document.addEventListener("keypress", function (e) {
    if (e.key == "z") {
      c1++;
      c1 = c1 % (pistaazul.length - 1);
      let ca = Math.abs((c1 - 1) % (pistaazul.length - 1));
      let cd = (c1 + 1) % (pistaazul.length - 1);
      let pos0 = pistaazul[ca];
      let pos1 = pistaazul[c1];
      let pos2 = pistaazul[cd];
      let angulo = calcularTangente(pos0, pos2);
      if (pos1 == pistaazul[0]) {
        let pAzul = document.getElementById("puntaje1");
        pAzul.textContent = parseInt(pAzul.textContent) + 1;
      }
      cAzul.style.transform = "rotate(" + angulo + "rad)";
      cAzul.style.top = pos1[0] + "px";
      cAzul.style.left = pos1[1] + "px";
    }
  });

  document.addEventListener("keypress", function (e) {
    if (e.key == "m") {
      c2++;
      c2 = c2 % (pistaroja.length - 1);
      let ca = Math.abs((c2 - 1) % (pistaroja.length - 1));
      let cd = (c2 + 1) % (pistaroja.length - 1);
      let pos0 = pistaroja[ca];
      let pos1 = pistaroja[c2];
      let pos2 = pistaroja[cd];
      console.log(pos0, pos2);
      let angulo = calcularTangente(pos0, pos2);
      if (pos1 == pistaroja[0]) {
        let pRoja = document.getElementById("puntaje2");
        pRoja.textContent = parseInt(pRoja.textContent) + 1;
      }
      cRojo.style.transform = `rotate(${angulo}rad)`;
      cRojo.style.top = pos1[0] + "px";
      cRojo.style.left = pos1[1] + "px";
    }
  });
});
