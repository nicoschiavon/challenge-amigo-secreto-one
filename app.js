// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (amigos.length == 0) {
        document.getElementById('titulo-lista').removeAttribute('hidden');

    }
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
        let indiceGanador = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indiceGanador];
        amigos.splice(indiceGanador, 1);
        mostrarAmigos(amigos);
        elemnto = document.getElementById('resultado');
        elemnto.innerHTML = ganador;
        let audio = document.getElementById('sonidoBoton');
        audio.currentTime = 0;
        audio.play();
    } else {
        alert("No hay amigos en la lista.");
    }
}

// Funcion para iniciar el sorteo
function iniciarSorteo() {
    document.getElementById('button-start').setAttribute('hidden', true);
    document.getElementById('button-draw').removeAttribute('hidden');
    document.getElementById('input-nombre').style.display = 'none';
    document.getElementById('section-title').textContent = 'Sorteo de Amigos';
}


document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');

    inputAmigo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});