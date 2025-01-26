// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != "") {
        amigos.push(nombre);
        document.getElementById('amigo').value = "";

    } else {
        alert("Por favor ingrese un nombre.");
    }
}