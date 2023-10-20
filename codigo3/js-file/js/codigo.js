const cargaImg = (capa, fichero) => {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    capa.innerHTML = `<img src='${e.target.result}' alt='foto'>`;
  });
  reader.readAsDataURL(fichero);
};

const cargatxt = (capa, fichero) => {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    capa.innerHTML = `<p>${e.target.result}</p>`;
  });
  reader.readAsText(fichero, "iso-8859-1");
};

const cargaBin = (capa, fichero) => {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    capa.innerHTML = `<pre>${e.target.result}</pre>`;
  });
  reader.readAsBinaryString(fichero);
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
