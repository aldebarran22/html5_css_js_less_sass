
window.onload = () => {
    let boton = document.querySelector("#boton")
    let imgHTML = document.querySelector("img")

    boton.onclick = () => {
        let imagen = 'logo.png'
        let request = new Request(imagen)
        
        let headers = new Headers()
        headers.append('Content-Type', 'image/png');
        request.headers = headers
        
        console.log(request.url)
        console.log(request.method)        
        headers.forEach((k,v)=>{
            console.log(k,v)
        })

        fetch(request)
        .then(response => response.blob())
        .then(datos=>{
            const objIMG = URL.createObjectURL(datos)
            imgHTML.src = objIMG
        })
        .catch(err => console.log(err))
    }
}