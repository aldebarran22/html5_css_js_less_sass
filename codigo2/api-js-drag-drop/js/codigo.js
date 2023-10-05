const testEventos = () => {
  let origen = document.getElementById("origen");
  let destino = document.getElementById("destino");

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
  testEventos();
});
