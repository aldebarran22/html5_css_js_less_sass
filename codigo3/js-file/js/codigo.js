const cargaImg = (capa, fichero) => {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    capa.innerHTML = `<img src='${e.target.result}' alt='foto'>`;
  });
  reader.readAsDataURL(fichero);
};

addEventListener("load", () => {
  let capa = document.getElementById("contenedor");
  let ficheros = document.querySelectorAll("form input");
  for (let f of ficheros) {
    f.addEventListener("change", (e) => {
      let fichero = e.target.files[0];
      capa.innerHTML =
        "type: " +
        fichero.type +
        "name: " +
        fichero.name +
        "bytes: " +
        fichero.size;

      if (fichero.type.match(/image.*/i)) cargaImg(capa, fichero);
      else if (fichero.type == "text/plain") cargatxt(capa, fichero);
      else cargaBin(capa, fichero);
    });
  }
});
