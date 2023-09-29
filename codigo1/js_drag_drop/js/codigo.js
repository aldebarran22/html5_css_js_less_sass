addEventListener("load", () => {
  // Fuente donde está la imagen:
  let source = document.getElementById("image");
  source.addEventListener("dragstart", (e) => {
    let imgHTML = "<img src='" + source.getAttribute("src") + "'>";
    // Cargamos el código HTML para una imagen en el objeto dataTransfer
    e.dataTransfer.setData("Text", imgHTML);
  });

  // Destino: donde soltamos la imagen:
  let drop = document.getElementById("dropbox");

  // Tenemos que anular el comportamiento por defecto del navegador:
  // son los eventos: dragenter, dragover, drop
  eventos = ["dragenter", "dragover", "drop"];
  for (let nombreEvento of eventos) {
    drop.addEventListener(nombreEvento, (e) => {
      e.preventDefault(); // Eliminar el comportamiento por defecto!
      console.log(nombreEvento);
      if (nombreEvento === "drop") {
        // Recuperamos del objeto dataTransfer la imagen:
        drop.innerHTML = e.dataTransfer.getData("Text");

        // Borramos la imagen del origen:
        source.parentNode.removeChild(source);
      }
    });
  }

  /*
  drop.addEventListener("dragenter", (e) => {
    e.preventDefault(); // Anula el evento
    console.log("dragenter");
  });

  drop.addEventListener("dragover", (e) => {
    e.preventDefault(); // Anula el evento
    console.log("dragover");
  });

  drop.addEventListener("drop", (e) => {
    e.preventDefault();
    // Recuperamos del objeto dataTransfer la imagen:
    drop.innerHTML = e.dataTransfer.getData("Text");
  });*/
});
