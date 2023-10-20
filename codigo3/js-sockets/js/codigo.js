const url = "ws://localhost:8081";

addEventListener("load", () => {
  let socket = null;
  let bconectar = document.getElementById("conectar");
  let bdesconectar = document.getElementById("desconectar");
  let texto = document.getElementById("texto");
  let contenedor = document.getElementById("contenedor");

  texto.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      // Comprobar si está conectado a un servidor
      if (socket != null && socket.readyState !== WebSocket.CLOSED) {
        socket.send(texto.value);
      } else {
        alert("No estás conectado a un servidor");
      }
    }
  });

  // Evento boton conectar
  bconectar.addEventListener("click", () => {
    // Crear la conexión con el Servidor:
    socket = new WebSocket(url);

    socket.addEventListener("open", () => {
      contenedor.innerHTML = "Conexión establecida<br>";
    });

    socket.addEventListener("message", async (e) => {
      // Salta cuando el cliente recibe un mensaje del servidor
      const mensaje = await e.data;
      contenedor.innerHTML += mensaje + "<br>";
    });

    socket.addEventListener("error", (e) => {
      contenedor.innerHTML += "ERROR: " + e.message;
      alert("ERROR: " + e.message);
    });

    socket.addEventListener("close", () => {
      contenedor.innerHTML += "Se ha desconectado del servidor";
    });
  });

  // Evento boton desconectar
  bdesconectar.addEventListener("click", () => {
    socket.close();
  });
});
