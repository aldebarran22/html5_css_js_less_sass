/* Peticiones fetch */

function solicitarTexto(){
	let nombreFichero;
	let combo = document.getElementById("selector");
    let capa = document.getElementById("contenidoTexto");
	
	// Seleccionar el nombre del fichero
    nombreFichero = combo.value;    

    fetch(nombreFichero)
    .then((response) => response.text())
    .then((text) => { 
        capa.innerHTML = text;
    })   
    .catch(err => {
        alert('Se ha producido el siguiente error: '+err);
    })
}

