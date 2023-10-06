addEventListener("load", () => {
  let capa = document.getElementById("contenedor");
  capa.innerHTML = "";
  let mensaje = document.getElementById("mensaje");

  let worker = new Worker("./worker.js");

  // Registrar un evento para recibir mensajes:
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
    worker.terminate();
  });
});
