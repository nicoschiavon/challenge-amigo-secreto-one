// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != "") {
        amigos.push(nombre);
        document.getElementById('amigo').value = "";

    } else {
        alert("Por favor ingrese un nombre.");
    }
    mostrarAmigos(amigos);
}

function mostrarAmigos(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}