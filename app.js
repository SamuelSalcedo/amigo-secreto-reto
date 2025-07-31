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
let listado = document.querySelector('listaAmigos');
let input ="";

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
    validarInput();
}

function sortearAmigo(){

}