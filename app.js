let numeroSecreto;
let intentos = 0;
let listaNumeroSorteados=[];
let numeroMaximo=10;
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el Número en ${intentos} ${(intentos ===1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero Secreto es Menor");
        }else{
            asignarTextoElemento("p","El numero Secreto es Mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
   
}

function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
 
    if (listaNumeroSorteados.length== 2) {
        asignarTextoElemento("p","se han sorteado todos los posibles números");
    } else {
        
    
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1","Juego de numero secreto!");
    asignarTextoElemento("p",`indica un numero del 1-${numeroMaximo}`);
    intentos=1;
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //empezar condicione iniciales
    condicionesIniciales();

    
    // desabilitare el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
