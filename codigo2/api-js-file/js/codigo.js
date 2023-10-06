let capa;

addEventListener("load", () => {
  capa = document.getElementById("contenedor");
  let ficheros = document.querySelectorAll("form input");
  for (let fich of ficheros) {
    fich.addEventListener("change", (e) => {
      let ficheros = e.target.files;
      let fichero = ficheros[0];
      console.log("type: " + fichero.type);

      
    });
  }
});
