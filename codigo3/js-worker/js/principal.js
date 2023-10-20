addEventListener("load", () => {
  let capa = document.getElementById("contenedor");
  let mensaje = document.getElementById("mensaje");

  // Crear el worker:
  let worker = new Worker("./hilo.js");

  worker.addEventListener("message", (e) => {
    capa.innerHTML += e.data + "<br>";
  });

  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    worker.postMessage(mensaje.value);
    mensaje.value = "";
  });

  let boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", () => {
    worker.terminate(); // Terminar el worker
  });
});
