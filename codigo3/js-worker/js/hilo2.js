/*
function cargaFichero(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Enviar al hilo principal
    postMessage(e.target.result);
  });
  reader.readAsText(fichero, "iso-8859-1");
}*/

const cargaImg = (fichero) => {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    postMessage(e.target.result);
  });
  reader.readAsDataURL(fichero);
};

console.log("Worker2 img inicializado ...");

onmessage = (e) => {
  setTimeout(() => {
    cargaImg(e.data);
  }, 20000);
};
