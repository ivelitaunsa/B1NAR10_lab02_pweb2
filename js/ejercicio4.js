var input
let parameters
let url = ""
let codigo= ""

function returnCodigo() {
    //Obteniendo etiquetas con id
    let box = document.getElementById("box-content")
    input = document.getElementById("input")
    //Opteniendo valores y resteando input
    url = input.value
    input.value = ""
    //Haciendo match y extrayendo valores con Regex
    let expresion = /(https:\/\/)?(meet.google.com\/)(...)-(....)-(...)(.+)?/i
    parameters = url.match(expresion)
    if(parameters != null) {
        //Creando salida
        codigo = `${parameters[3]}${parameters[4]}${parameters[5]}`
        box.innerHTML = 
        `<h1>El código es: ${codigo}</h1>
        <div>
        <button onclick='location.reload()'>Volver</button>
        </div>`
    }


}