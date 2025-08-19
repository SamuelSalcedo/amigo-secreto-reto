// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// //Aquí deberás desarrollar la lógica para resolver el problema.

///Agregar el nombre que los usuarios ingresan haciendo clic en el boton adicionar

//Valida que el input no este vacio si lo esta el sistema manda una alerta

//Ver la lista de los nombres ingresados en el campo de entrada

//Al hacer clic en el boton de sortear se seleccionara un nombe de la lista y se mostrara en la pagina
// id de lista: listaAmigos
// id:" resultado
//Funcion que valida el input
let listadoAmigos = [];
let input ="";
let listadoHTML = document.getElementById('listaAmigos');
let respuestaHTML = document.getElementById('resultado');
let botonParejas = document.getElementById("button-couples");
let botonAdd = document.getElementById('button-add');
let botonsorteo = document.getElementById('button-sort');

//Longitud como una variable para el fisher - yates y realmente no afecta (creo)

//VALIDACION de solo letras 
const regex = /^[a-zA-Z\s-.]+$/;

function validarInput(){
    input = document.getElementById('amigo').value;
    if(input === ""){
        
        mostrarAlerta('Por favor, inserte un nombre.');
        
        return false
    }if(!(regex.test(input))){
        
        mostrarAlerta('Por favor, Solo Ingrese letras.');
        return false

    }else{
        return true;
    }
}

function limpiarInput(){
    document.querySelector('#amigo').value = "";
}


function agregarAmigo(){
    //si no esta vacio agrega a la lista el amigo
    if(validarInput()){
        listadoAmigos.push(input);
        limpiarInput();
        listadoHTML.innerHTML = ""
        
        for(var i =0;i<listadoAmigos.length;i++){
            listadoHTML.innerHTML += `<li>${listadoAmigos[i]}</li>`    
        }
                //console.log(listadoAmigos)
    }else{
        limpiarInput();
    }
}


function sortearAmigo(){
    respuestaHTML.innerHTML = ""
    //valida que el array no este vacio
    if(listadoAmigos.length === 0){
        mostrarAlerta('La lista esta vacia ingrese un nombre');
    }else{
        //sortear algun amigo aleatorio
        let numAmigo = sortearAleatorio();
        respuestaHTML.innerHTML = `<li> ${listadoAmigos[numAmigo]}</li>`
        //console.log(numAmigo);
        //console.log(listadoAmigos[numAmigo]);
    }
}

function formarParejas(){
    respuestaHTML.innerHTML = ""

    if(listadoAmigos.length === 0){
        mostrarAlerta('La lista esta vacia ingrese un nombre');

    }else{ 
        /*
        //formar parejas 
        //Ver si el arreglo es par o impar si es par se deja
        //si es impar se hace push al arreglo 'sin pareja'
                //ANTIGUA LOGICA:
        //tomar numeros aleatorios del arreglo que no se repiten:
            //si  el num2 es igual del num1 saca otro 
            //agrega los elementos a un nueov arreglo para verficar que se sorteen todos
            //agrega al listado y num 1 y num 2 se vacian
            
            //haz esto while hasta que el nuevo arreglo sea igual al inicial
        */
        if(listadoAmigos.length%2 != 0){
            //es par no se hace nada
            listadoAmigos.push('Sin pareja');
        }
        
        //fisher - yates para un barajear todo el arreglo
        let numAmigo = 0;

        //recorrer el arreglo y restar en 1 cada vez que se complete 
        for (let i = listadoAmigos.length-1; i > 0; i--) {
            //tomar uno aleatorio
            numAmigo = sortearAleatorio();
            //INTERCAMBIO NUEVO (tomas 2 elementos y intercambias lugares)
            [listadoAmigos[i], listadoAmigos[numAmigo]] = [listadoAmigos[numAmigo], listadoAmigos[i]];
        }

        //Para rellenar el listado
        //recorre el arreglo de 2 en 2 
        for (let i = 0;i< listadoAmigos.length;i+=2) {
            let amigo1 = listadoAmigos[i];
            let amigo2 = listadoAmigos[i+1]
            respuestaHTML.innerHTML += `<li>${amigo1} - ${amigo2}</li>`        
        }
        botonParejas.disabled = true;
        botonAdd.disabled = true;        
        botonsorteo.disabled = true;
    }
}

function sortearAleatorio(){
    return Math.floor(Math.random()*listadoAmigos.length-1)+1;
}


function reiniciarJuego(){
    limpiarInput();
    botonParejas.disabled = false;
    botonAdd.disabled = false;
    botonsorteo.disabled = false;
    listadoAmigos = [];
    respuestaHTML.innerHTML = "";
    listadoHTML.innerHTML = "";
    console.log(listadoAmigos)
}

//Funcion para mostrar la alerta personalizada
function mostrarAlerta(mensaje){
    const contenedorAlerta = document.getElementById('custom-alert-container');
    const mensajeAlerta = document.getElementById('custom-alert-message');
    const botonContenedor = document.getElementById('custom-alert-button');

    mensajeAlerta.textContent = mensaje;
    contenedorAlerta.classList.remove('hidden');

    botonContenedor.onclick = function(){
        contenedorAlerta.classList.add('hidden');
    };
}