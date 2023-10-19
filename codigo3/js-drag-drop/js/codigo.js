const testEventos = (origen, destino) => {
  const eventosO = ["dragstart", "dragend", "drag"];
  for (let e of eventosO) {
    origen.addEventListener(e, () => {
      console.log("Origen: " + e);
    });
  }

  const eventosD = ["dragenter", "dragover", "drop", "dragleave"];
  for (let e of eventosD) {
    destino.addEventListener(e, () => {
      console.log("Destino: " + e);
    });
  }
};

const dragDrop = (origen, destino, imagen) => {
  // Anular los eventos del destino
  const eventosD = ["dragenter", "dragover", "drop"];
  for (let nombre of eventosD) {
    destino.addEventListener(nombre, (event) => {
      // Cancela el comportamiento por defecto
      event.preventDefault();
    });
  }

  // dragstart en origen: cargar el texto que representa la imagen
  // en dataTransfer
  origen.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("Text", imagen.src);
  });

  // drop: copiar el datatransfer en el destino
  // borrar la imagen del origen: DOM
  destino.addEventListener("drop", (e) => {
    let objImg = new Image();
    objImg.src = e.dataTransfer.getData("Text");
    destino.innerHTML = "";
    destino.appendChild(objImg);
    origen.removeChild(imagen);
    // imagen.parentNode.removeChild(imagen)
  });
};

addEventListener("load", () => {
  let origen = document.querySelector("#origen");
  let destino = document.querySelector("#destino");
  let imagen = document.querySelector("#origen img");

  //testEventos(origen, destino);
  dragDrop(origen, destino, imagen);
});
