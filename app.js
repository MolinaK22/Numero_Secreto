
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento ('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento ('p', 'el número secreto es mayor')
        } else {
            asignarTextoElemento ('p', 'El número secreto es menor')
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja (){
    document.querySelector('#ValorUsuario').value = ''; 
    return;
}

function generarNumeroSecreto () {
    let numeroGenerado =  Math.floor(Math.random ()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
    

function condicionesIniciales () {
    asignarTextoElemento ('h1','Juego del número secreto!');
    asignarTextoElemento ('p', `Indique un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego () {
   // para reiniciar el juego se deben aplicar practicamente todas las funciones creadas.
    limpiarCaja ();
    condicionesIniciales ();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}

condicionesIniciales (); // es importante debido a que muestra todo los textos, por algo son las condiciones iniciales.
