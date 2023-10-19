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

addEventListener("load", () => {
  let origen = document.querySelector("#origen");
  let destino = document.querySelector("#destino");

  testEventos(origen, destino);
});
