let capa;

function cargaImg(fichero) {
  let reader = FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
  });
  reader.readAsDataURL(fichero);
}

function cargaTxt(fichero) {
  let reader = FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
  });
  reader.readAsText(fichero);
}

function cargaBin(fichero) {
  let reader = FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
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
