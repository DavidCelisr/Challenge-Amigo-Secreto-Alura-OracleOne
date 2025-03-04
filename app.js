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
    
    // Si ya se ha sorteado antes, reiniciar todo
    if (document.getElementById("resultado").innerHTML !== "") {
        nombreAmigo = [];  // Reiniciar la lista
        document.getElementById("resultado").innerHTML = "";  // Borrar el resultado
        renderizaAmigos(); // Limpiar la lista en pantalla
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
function sortearAmigos() {
    if (nombreAmigo.length === 0) {
        alert("Por favor, ingrese al menos un amigo.");
        return;
    }
    
    let amigosSorteados = nombreAmigo[Math.floor(Math.random() * nombreAmigo.length)];
    let resultadoMostrar = document.getElementById("resultado");
    resultadoMostrar.innerHTML = `El amigo sorteado es: ${amigosSorteados}`;  

    resetearLista();
}


//funcion resetear lista
function resetearLista() {
    nombreAmigo = [];
    renderizaAmigos();
    document.getElementById("listaAmigos").innerHTML = "";
}





