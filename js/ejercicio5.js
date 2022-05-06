let numElementos;
let miTabla = "<table><tr>";
let sumatoria = 0;
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
  modificar.innerHTML = miTabla + "<button onclick='sumar()'>Sumar</button><p id='suma'></p>";
}
function sumar(){
  for (let i = 0; i< numerosTabla.length; i++) {
    sumatoria = sumatoria + numerosTabla[i];
  }
  let modificar = document.getElementById("suma");
  modificar.innerHTML = "La sumatoria de la tabla es "+sumatoria;

}
