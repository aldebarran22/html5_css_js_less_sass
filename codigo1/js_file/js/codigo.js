let capa;

addEventListener("load", () => {
  capa = document.querySelector("#contenedor");
  let fichero = document.querySelector("#fichero");
  fichero.addEventListener("change", cargaFichero);
});

function cargaFichero(e) {
  let files = e.target.files;
  let fich = files[0];
  if (fich.type === "text/plain") {
    cargaTxt(fich);
  } else if (fich.type.match(/image.*/i)) {
    cargaImg(fich);
  } else {
    capa.innerHTML = "El fichero no se puede cargar";
  }
}

function cargaTxt(fich) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    let resul = e.target.result;
    capa.innerHTML = resul;
  });
  reader.readAsText(fich);
}

function cargaImg(fich) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    let resul = e.target.result;
    capa.innerHTML =
      "Nombre: " + fich.name + "<br>" + fich.size + " bytes" + "<br>";
    capa.innerHTML += "<img src='" + resul + "' alt='foto'>";
  });
  reader.readAsDataURL(fich);
}
