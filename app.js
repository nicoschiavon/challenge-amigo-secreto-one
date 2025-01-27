// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != "") {
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

    } else {
        alert("Por favor ingrese un nombre.");
        document.getElementById('amigo').focus();

    }
    mostrarAmigos(amigos);
}
// Función para mostrar la lista de nombres
function mostrarAmigos(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if (amigos.length > 0) {
        let ganador = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('listaAmigos').setAttribute('hidden', true);
        elemnto = document.getElementById('resultado');
        elemnto.innerHTML = ganador;
    } else {
        alert("No hay amigos en la lista.");
    }
}
