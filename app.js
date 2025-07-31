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

function validarInput(){
    input = document.getElementById('amigo').value;
    if(input == ""){
        alert("Por favor, inserte un nombre.");
        return false
    }else{
        console.log(input);
        return true
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
        console.log(listadoAmigos)
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
        console.log("Esta vacio: ");
    }else{
        //sortear algun amigo aleatorio
        let numAmigo = Math.floor(Math.random()*listadoAmigos.length-1)+1;
        respuestaHTML.innerHTML = `<li> ${listadoAmigos[numAmigo]}</li>`
        console.log(numAmigo);
        console.log(listadoAmigos[numAmigo]);
    }
}