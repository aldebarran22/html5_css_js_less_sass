const testEventos = (origen, destino) => {
  const eventosOrigen = ["dragstart", "drag", "dragend"];
  for (const nombreEvento of eventosOrigen) {
    origen.addEventListener(nombreEvento, () => {
      console.log("Origen: " + nombreEvento);
    });
  }

  const eventosDestino = ["dragenter", "dragover", "drop", "dragleave"];
  for (const nombreEvento of eventosDestino) {
    destino.addEventListener(nombreEvento, () => {
      console.log("Destino: " + nombreEvento);
    });
  }
};

addEventListener("load", () => {
  let imagen = document.getElementById("image");
  let origen = document.getElementById("origen");
  let destino = document.getElementById("destino");

  //testEventos(origen, destino);

  origen.addEventListener("dragstart", (e) => {
    let imgHTML = "<img src='" + imagen.getAttribute("src") + "'>";
    console.log(imgHTML);
    // Cargar el objeto en dataTransfer:
    e.dataTransfer.setData("Text", imgHTML);
  });

  destino.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });

  destino.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  destino.addEventListener("drop", (e) => {
    e.preventDefault();
    destino.innerHTML = e.dataTransfer.getData("Text");
    // Borrar la imagen origen:
    imagen.parentNode.removeChild(imagen);
  });
});
