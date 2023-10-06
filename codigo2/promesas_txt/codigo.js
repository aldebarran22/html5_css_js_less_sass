function obtenerTexto(url){
    let p = new Promise((resolve,reject)=>{
        fetch(url)
        .then(response=>{
            if (response.ok){
               return response.text()                    
                                         
            } else {
                reject('No se encuentra el fichero: '+url+" RESP:"+response.status)
            }
        })
        .then(texto =>resolve(texto))
        .catch(err =>reject(err))
    })   
    return p
}

window.onload= ()=>{
    let boton = document.getElementById('cambia')
    let capa = document.getElementById('contenidoTexto')
    boton.onclick = ()=>{
        let fichero = document.getElementById('selector').value
        // Obtener texto devuelve una promesa: then, catch      
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