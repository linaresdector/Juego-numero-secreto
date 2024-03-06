let numeroSecreto = 0;
let intentos = 0; 
let listaNuerosSorteados = []; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
document.querySelector('#valorUsuario'). value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNuerosSorteados);
    //Si ya sorteamos todos los numeros 
    if ( listaNuerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else [

    ]
    // Si el número generado esta incuido en la lista 
    if (listaNuerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNuerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
    }
}


function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del número secreto.');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos.
    condicionesIniciales();
    //deshabilitar boton de juego nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();
