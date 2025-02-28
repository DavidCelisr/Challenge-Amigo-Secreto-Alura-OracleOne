// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

let nombreAmigo = [];
console.log(nombreAmigo); 

function agregarAmigo() {
    let inputIngresoAmigo = document.getElementById("amigo").value;
    nombreAmigo.push(inputIngresoAmigo);
    console.log(nombreAmigo);
}