let a = 0;
let b = 1000;
let c;
document.addEventListener("DOMContentLoaded", () => {
  generar_numero();
  let maquina = document.getElementById("numero_maquina");
  
  let b_mayor = document.getElementById("mayor"); 

  b_mayor.addEventListener("click",function(){
    a = c;
    generar_numero();
  });

  let b_menor = document.getElementById("menor"); 


});

function generar_numero() {
  //generar un aleatorio entre a y b
  c = Math.ceil(parseInt(a) + parseInt(b) / 2);
}
