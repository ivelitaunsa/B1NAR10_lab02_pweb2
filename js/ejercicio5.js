let numElementos;
let miTabla = "<table><tr>";
let sumatoria;
const numerosTabla = [];
function generarTabla(){
  numElementos = document.getElementById("numElemntos").value;
  console.log(numElementos);
  for (let i = 0; i < numElementos; i++) {
    numerosTabla[i] = Math.floor(Math.random() * 200);
  }
  console.log(numerosTabla); 
  let j = 0;
  for (let i = 0; i < numerosTabla.length; i++) {
    miTabla = miTabla + "<th>"+numerosTabla[i]+"</th>";
    j++;
    if(j % 5 == 0) {
      miTabla = miTabla + "</tr><tr>"
    }
  }
  miTabla = miTabla + "</tr></table>"
  let modificar = document.getElementById("modificar");
  modificar.innerHTML = miTabla + "<button onclick='sumar()'>Sumar</button>";
}
