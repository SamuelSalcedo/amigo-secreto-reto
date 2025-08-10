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
        agregarListado(listadoAmigos)
        //console.log(listadoAmigos)
    }else{
        limpiarInput();
    }
}

function agregarListado(amigos = []){
    listadoHTML.innerHTML = ""
    for(var i =0;i<amigos.length;i++){
        listadoHTML.innerHTML += `<li>${amigos[i]}</li>`    
    }
    
}

function sortearAmigo(){
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
        //formar parejas 
        //Ver si el arreglo es par o impar si es par se deja
        //si es impar se hace push al arreglo 'sin pareja'
        //tomar numeros aleatorios del arreglo que no se repiten:
            //si  el num2 es igual del num1 saca otro 
            //agrega los elementos a un nueov arreglo para verficar que se sorteen todos
            //agrega al listado y num 1 y num 2 se vacian
            
            //haz esto while hasta que el nuevo arreglo sea igual al inicial
        if(listadoAmigos.length%2 != 0){
            //es par no se hace nada
            listadoAmigos.push('Sin pareja');
        }    
        let nuevaLista = [];
        let numAmigo = 0;
        let numAmigo2= 0;

        while(nuevaLista.length != listadoAmigos.length){
            
            //mientras que sea el mismo saca otro
            while(numAmigo2 == numAmigo || (nuevaLista.includes(numAmigo) || (nuevaLista.includes(numAmigo2)))){
                numAmigo2 = sortearAleatorio();
                //tomar un numero aleatorio
                numAmigo = sortearAleatorio();
                
            }

            //console.log(numAmigo);
            //console.log(numAmigo2);
            
            nuevaLista.push(numAmigo,numAmigo2);

            respuestaHTML.innerHTML += `<li> ${listadoAmigos[numAmigo]} - ${listadoAmigos[numAmigo2]} </li>`
           // console.log("Nueva lista: " + nuevaLista);
            numAmigo = 0;
            numAmigo2 = 0;
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