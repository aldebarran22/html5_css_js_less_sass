
let boton = document.getElementById('boton');
let boton2 = document.getElementById('boton2');

boton.addEventListener("click", () => {
    const myImage = document.querySelector('img');
    const myRequest = new Request('logo.png');
    
    // A fetch se le puede enviar una url o un objeto Request
    fetch(myRequest)
    .then((response) => {
        
        if (response.ok){
            return response.blob();

        } else {
            throw new Error('No se encuentra la imagen');
        }
    })
    .then((foto) => {
        const objectURL = URL.createObjectURL(foto);
        myImage.src = objectURL;
    })
    .catch((error) => {
        alert(error);
    })

    /*
    fetch(myRequest)
    .then((response) => {
      console.log(response.status); // returns 200
      response.blob().then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });
    });*/
})

boton2.addEventListener("click", () => {
    fetch("logo.png")
    .then((response) => {
        
        console.log("ok: "+response.ok);
        console.log("status: "+response.status);
        console.log("statustext: "+response.statustext);
        console.log("type: "+response.type);
        console.log("url: "+response.url);
        console.log("bodyUsed: "+response.bodyUsed);
        console.log("body: "+response.body);

        console.log("Headers:\n");
        response.headers.forEach((v, k)=> {console.log(k+" "+v)});
    })
})
