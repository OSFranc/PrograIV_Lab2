let txt = "hola"
let respuesta = '-'
function ObtenerOpcion(respuesta){
    const imgPlaceHolder = document.getElementById('imgSelected')
    const txtPlaceHolder = document.getElementById('pruebaTxt')
    const imgSeleccionUsuario = document.getElementById(respuesta)
    txtPlaceHolder.innerText='queso'
    imgPlaceHolder.src = imgSeleccionUsuario.src
}



