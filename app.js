let amigos = [];

function agregarAmigo() {
    let ingresoAmigo = document.getElementById('amigo');

    if (ingresoAmigo.value === "") {
        alert("Por favor inserte un nombre");
    } else {
        amigos.push(ingresoAmigo.value);
        actualizarListaAmigos();
        ingresoAmigo.value = "";
    }
    
    console.log(amigos);
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
} 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function reiniciarJuego() {
    amigos = [];  // Vaciar el arreglo de amigos
    document.getElementById('listaAmigos').innerHTML = "";  // Limpiar la lista HTML
    document.getElementById('resultado').innerHTML = "";  // Limpiar el resultado del sorteo
}