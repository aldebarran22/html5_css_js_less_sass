addEventListener("load", () => {
  let bConectar = document.getElementById("conectar");
  let bDesconectar = document.getElementById("desconectar");
  let texto = document.getElementById("texto");
  let capa = document.getElementById("contenedor");
  let socket = null;

  texto.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      // Comprobar si está conectado con el servidor antes
      // de enviar el mensaje:
      if (socket != null && socket.readyState !== WebSocket.CLOSED) {
        socket.send(texto.value);
        texto.value = "";
      } else {
        alert("No estás conectado al servidor!");
      }
    }
  });

  bConectar.addEventListener("click", () => {
    // Crear el WebSocket para conectar con el servidor:
    socket = new WebSocket("ws://localhost:8081");

    socket.addEventListener("open", () => {
      console.log("Cliente conectado!");
    });

    // Cuando recibimos un mensaje del servidor:
    socket.addEventListener("message", async (e) => {
      const mensaje = await e.data;
      capa.innerHTML += mensaje + "<br>";
    });

    socket.addEventListener("error", (e) => {
      console.error("ERROR: " + e);
      alert("Error: " + e);
    });

    socket.addEventListener("close", () => {
      console.log("Desconectado  del servidor");
    });
  });

  bDesconectar.addEventListener("click", () => {
    console.log("Cerrar la conexión");
    socket.close();
  });
});
