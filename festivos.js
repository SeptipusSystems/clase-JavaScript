function pascua(año) {
  let a, b, c, M, N, d, e, dia, mes;

  // Constantes mágicas
  [M, N] = [24, 5];
  [a, b, c] = [año % 19, año % 4, año % 7];
  d = (19 * a + M) % 30;
  e = (2 * b + 4 * c + 6 * d + N) % 7;
  // Decidir entre los 2 casos:
  if (d + e < 10) {
    dia = d + e + 22;
    mes = 3; // marzo
  } else {
    dia = d + e - 9;
    mes = 4; //abril
  }
  // Excepciones especiales (según artículo)
  if (dia == 26 && mes == 4) {
    // 4 = abril
    dia = 19;
  }
  if (dia == 25 && mes == 4 && d == 28 && e == 6 && a > 10) {
    // 4 = abril
    dia = 18;
  }
  const diaFormateado = dia.toString().padStart(2, "0");
  const mesFormateado = mes.toString().padStart(2, "0");

  const pascua = `{diaFormateado}-{mesFormateado}-{año}`;
  return [año, mes, dia];
}

const festivos = {
  "Reyes Magos Enero": [1, 6],
  "San Jose Marzo 19": [3, 19],
  "San Pedro y San Pablo Junio 29": [6, 29],
  "Asunción Agosto 15": [8, 15],
  "Descubrimiento de América Oct 12": [10, 12],
  "Todos los santos Nov 1": [11, 1],
  "Independencia de Cartagena Nov 11": [11, 11],
};
const caculados = {
  "Primero de Enero": [1, 1],
  "Dia del Trabajo 1 de Mayo": [5, 1],
  "Independencia 20 de Julio": [7, 20],
  "Batalla de Boyacá 7 de Agosto": [8, 7],
  "Maria Inmaculada 8 diciembre": [12, 8],
  "Navidad 25 de diciembre": [12, 25],
};

const religiosos = {
  "Jueves santo": [-3, false],
  "Viernes santo": [-2, false],
  "Ascención el Señor pascua": [43, true],
  "Corpus Cristi": [64, true],
  "Sagrado Corazón": [71, true],
};

function listar_festivos(año) {
  for ([festivo, [mesFestivo, diaFestivo]] of Object.entries(festivos)) {
    calculaEmiliani(año, mesFestivo, diaFestivo, festivo);
  }
  for ([festivo, [mesFestivo, diaFestivo]] of Object.entries(religiosos)) {
    calcularOtrasFechas(año, mesFestivo, diaFestivo, festivo);
  }
}

function calculaEmiliani(
  año,
  mesFestivo,
  diaFestivo,
  festivo = "festivo generico"
) {
  const fecha = new Date(año, mesFestivo - 1, diaFestivo); // Restamos 1 a mesFestivo porque los meses en JavaScript se indexan desde 0 (enero = 0, febrero = 1, etc.).
  const w = fecha.getDay(); // Obtenemos el día de la semana (0 para domingo, 1 para lunes, etc.).
  const diaF = diaFestivo + ((8 - w) % 7);
  const fechaCalculada = new Date(año, mesFestivo - 1, diaF);

  const mes = fechaCalculada.getMonth() + 1; // Sumamos 1 para obtener el mes en formato de 1 a 12.
  const dia = fechaCalculada.getDate();
  console.log(`${mes}, ${dia}, ${festivo}`);
  return { mes, dia, festivo };
}

function calcularOtrasFechas(
  año,
  cantidadDias = 0,
  siguienteLunes = false,
  nombre = "festivo generico"
) {
  [año, mespascua, diapascua] = pascua(año);

  let diaFestivo = diapascua + cantidadDias;
  let mesFestivo = mespascua;

  if (diaFestivo < 1) {
    diaFestivo = 1;
  } else if (diaFestivo > 31) {
    diaFestivo = 31;
    mesFestivo++;
  }

  if (siguienteLunes) {
    // Mover al siguiente lunes si es necesario
    const fecha = new Date(año, mesFestivo - 1, diaFestivo);
    const diaSemana = fecha.getDay();
    if (diaSemana !== 1) {
      // 1 es lunes
      diaFestivo += (8 - diaSemana) % 7;
    }
  }
  console.log(`${mesFestivo}, ${diaFestivo}, ${nombre}`);
  return { mesFestivo, diaFestivo, nombre };
}

listar_festivos(2023);
