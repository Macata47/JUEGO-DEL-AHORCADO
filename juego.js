let palabra_adivinar = '';
let cantidad_errores = 0;
let cantidad_aciertos = 0;

const palabras = [
        "programacion",
        "ordenador",
        "desarrollo",
        "website",
        "phpmyadmin",
        "javascript",
        "html",
        "css",
        "ooouuyeah",
        "tecnologia",
        "internet",
        "seguridad",
        "aplicacion",
        "framework",
        "mysql",
        "ingenieria",
        "codigo",
        "proyecto",
        "programador",
        "openai" 
];

const btn = id( 'juego' );
const imagen = id( 'ahorcado' );
const btn_letras = document.querySelectorAll( "#letras button" );

btn.addEventListener( 'click', iniciar );

function id( str ){
    return document.getElementById( str );
}



function obtener_random( num_min, num_max ){
    const total_palabras = num_max - num_min;
    const palabra_aleatoria = Math.floor ( Math.random() * total_palabras ) 
    + num_min;
    return palabra_aleatoria;
}


// Funcion del juego

function iniciar( event ){
    imagen.src = 'imagenes/ahorcado_0.png';
    btn.disabled = true;
    id('resultado_juego').innerHTML = '';
    cantidad_errores = 0;
    cantidad_aciertos = 0;

    const parrafo = id( 'palabra' );
    parrafo.innerHTML = '';

    const cantidad_palabras = palabras.length;
    const primera_palabra = 0;
    const palabra_aleatoria = obtener_random( primera_palabra, cantidad_palabras );
   
    palabra_adivinar = palabras[ palabra_aleatoria ];
    const cantidad_letras = palabra_adivinar.length;
    for( let i = 0; i < btn_letras.length ; i++){
    btn_letras[ i].disabled = false;

}



    for( let i = 0; i < cantidad_letras; i++){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }
}



for( let i = 0; i < btn_letras.length ; i++){
    btn_letras[ i].addEventListener( 'click', click_letras );
}

function click_letras( event ){ 
    const spans = document.querySelectorAll( '#palabra span' );
    const button = event.target; //para saber que letra ha sido pulsada
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabra_adivinar.toLowerCase();


    let acierto = false;
    for( let i = 0; i < palabra.length; i++ ){
        if( letra == palabra[i] ){ // la variable i = posicion letra en palabra y span
            spans[i].innerHTML = letra;
            cantidad_aciertos++;
            acierto = true;
        }
    }

    if( acierto == false ){
        cantidad_errores++;
        const source = `imagenes/ahorcado_${cantidad_errores}.png`;
        const imagen = id( 'ahorcado' );
        imagen.src = source;
    }

    if( cantidad_errores == 6 ){
        id('resultado_juego').innerHTML = "¡Ahorcado!, la palabra era " 
        + palabra_adivinar;
        game_over();

    }else if( cantidad_aciertos == palabra_adivinar.length ){
        id('resultado_juego').innerHTML = "Te salvaste de la horca";
        game_over();
    }

}

function game_over(){
    for( let i = 0; i < btn_letras.length ; i++){
    btn_letras[ i].disabled = true;

    }

    btn.disabled = false;

}

