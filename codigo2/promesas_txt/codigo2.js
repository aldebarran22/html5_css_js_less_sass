async function obtenerTexto(url){
    
    const response = setTimeout(()=>fetch(url),5000);
    if (response.ok){
        let texto = response.text()    
        return texto

    } else {
        throw new Error('No se encuentra el fichero: '+url+" RESP:"+response.status)
    }
}

window.onload= ()=>{
    let boton = document.getElementById('cambia')
    let capa = document.getElementById('contenidoTexto')
    boton.onclick = ()=>{
        let fichero = document.getElementById('selector').value
        // Obtener texto devuelve una promesa: then, catch
        console.log('Vamos a pedir el fichero: '+fichero)
        obtenerTexto(fichero)
        .then(texto=>{
            capa.innerHTML = texto
            capa.style.color = "black"
        })
        .catch(err =>{
            capa.innerHTML = err
            capa.style.color="red"
        })
    }
}