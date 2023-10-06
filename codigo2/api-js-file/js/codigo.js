let capa;

function cargaImg(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
    capa.innerHTML += `<img src='${e.target.result}' alt='foto'>`;
  });
  reader.readAsDataURL(fichero);
}

function cargaTxt(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
    capa.innerHTML += "<p>" + e.target.result + "</p>";
  });
  reader.readAsText(fichero, "iso-8859-1");
}

function cargaBin(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
    capa.innerHTML += "<pre>" + e.target.result + "</pre>";
  });
  reader.readAsBinaryString(fichero);
}

addEventListener("load", () => {
  capa = document.getElementById("contenedor");
  let ficheros = document.querySelectorAll("form input");
  for (let fich of ficheros) {
    fich.addEventListener("change", (e) => {
      let ficheros = e.target.files;
      let fichero = ficheros[0];
      capa.innerHTML =
        "type: " +
        fichero.type +
        " name: " +
        fichero.name +
        " size: " +
        fichero.size +
        " bytes";

      // Filtrar el tipo de archivo:
      if (fichero.type.match(/image.*/i)) {
        cargaImg(fichero);
      } else if (fichero.type == "text/plain") {
        cargaTxt(fichero);
      } else {
        cargaBin(fichero);
      }
    });
  }
});
