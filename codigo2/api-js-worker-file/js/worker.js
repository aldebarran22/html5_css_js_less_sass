console.log("Worker inicializado...");

function cargaTxt(fichero) {
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    // Los datos están e.target.result
    postMessage(e.target.result);
  });
  reader.readAsText(fichero, "iso-8859-1");
}

onmessage = (e) => {
  cargaTxt(e.data);
};
