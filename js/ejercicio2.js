function invertir(){
    let input = document.getElementById('input').value;
    document.getElementById("respuesta").innerHTML = input.split("").reverse().join("");
}