// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

let nombreAmigo = [];
console.log(nombreAmigo); 

//funcion agregar y validacion datos entrada
function agregarAmigo() {
    let inputIngresoAmigo = document.getElementById("amigo").value.trim();
    let ingresoVacio = inputIngresoAmigo;
    
    if (ingresoVacio === "" || !isNaN(inputIngresoAmigo) || /\d/.test(inputIngresoAmigo)) {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    
    nombreAmigo.push(inputIngresoAmigo);
    console.log(nombreAmigo);
    renderizaAmigos();
    
    limpiar();
}

//funcion renderizar amigos lista
function renderizaAmigos() {
    let lisAmigos = document.getElementById("listaAmigos");
    lisAmigos.innerHTML = "";
    
    for (let i = 0; i < nombreAmigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombreAmigo[i];
        lisAmigos.appendChild(li);
    }
}

//funcion limpiar caja de texto
function limpiar() {
    document.getElementById("amigo").value = "";
}


//funcion sortear amigos 








