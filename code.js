let txtHobby = "Mi hobby favorito es el mundo de los videojuegos, en especial las consolas portatiles, su combinación de conveniencia y portabilidad son lo mejor, mi consola favorita actualmente es la nintendo switch!"
let txtFood = "Mi comida favorita son las hamburguesas, conveniente, personalizable, nutritivas, facil en su ejecución y consumo, no hay quien no les guste"
let txtShow = "Mi serie favorita es Hajime no Ippo! Un anime Japones centrado en un joven boxeador, muy divertida, emocionante e incluso inspiradora"
let txtColor = "Mi color favorito es el anaranjado. Muy vistoso, confortable, moderno, fuerte, el mejor color simplemente"
let txtArtista = "Mi artista favorito es MF DOOM (En mayúsculas), compositor y productor discográfico británico-estadounidense. Su nombre real es Daniel Dumile, sus generos son underground hip hop y alternative hip hop"
let txtPais = "El pais que quiero visitar es Argentina, no conozco mucho mas de este país pero lo que he visto es suficiente para querer ir alguna vez, parece tener buen clima y gastronomía exquisita"
let txtAboutMe= "Soy estudiante de Ingeniería en Sistemas con una gran pasión por la tecnología y el análisis de datos. Actualmente, estoy completando la certificación Google Data Analytics Professional Certificate, lo que ha fortalecido mis habilidades en SQL, Python y visualización de datos."
let respuesta = '-'

function ObtenerOpcion(respuesta){
    const imgPlaceHolder = document.getElementById('imgSelected')
    const txtPlaceHolder = document.getElementById('txtExplicacion')
    const imgSeleccionUsuario = document.getElementById(respuesta)
    imgPlaceHolder.src = imgSeleccionUsuario.src

    switch (respuesta){
        case "imgHobby":
            txtPlaceHolder.innerText=txtHobby
            break;
        case "imgComidaFav":
            txtPlaceHolder.innerText=txtFood
            break;
        case "imgShowFav":
            txtPlaceHolder.innerText=txtShow
            break;
        case "imgColorFav":
            txtPlaceHolder.innerText=txtColor
            break;
        case "imgArtistaFav":
            txtPlaceHolder.innerText=txtArtista
            break;
        case "imgPaisFav":
            txtPlaceHolder.innerText=txtPais
            break;
    }

}

function ClicBtnAboutMe(){
    const imgPlaceHolder = document.getElementById('imgSelected')
    const txtPlaceHolder = document.getElementById('txtExplicacion')
    imgPlaceHolder.src = "imagenes/Oscar.png"
    txtPlaceHolder.innerText=txtAboutMe
}



