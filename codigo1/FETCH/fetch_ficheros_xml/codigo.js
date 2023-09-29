let boton = document.getElementById('boton')

boton.addEventListener("click", ()=> {
    let url = './universidades2.xml';   

    // Para text:
    /* Para ver si se ha cargado correctamente    
    fetch(url)
        .then(response =>response.text())
        .then(datos => console.log(datos))
        .catch(err => console.error(err))
    */  

    // Para XML     
    fetch(url)
        .then(response =>response.text())
        .then(datos => new DOMParser().parseFromString(datos, "application/xml"))
        .then(data => console.log(data))
        .catch(err => console.error(err))  
})