let numElementos;
let miTabla;
let sumatoria;
const numerosTabla = [];
function generarTabla(){
  numElementos = document.getElementById("numElemntos").value;
  console.log(numElementos);
  for (let i = 0; i < numElementos; i++) {
    numerosTabla[i] = Math.floor(Math.random() * 200);
  }
  console.log(numerosTabla); 
}
