function cargaFichero(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Enviar al hilo principal
    postMessage(e.target.result);
  });
  reader.readAsText(fichero, "iso-8859-1");
}

console.log("Worker2 inicializado ...");

onmessage = (e) => {
  setTimeout(() => {
    cargaFichero(e.data);
  }, 20000);
};
