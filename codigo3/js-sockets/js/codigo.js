const url = "ws://localhost:8081";

const SALUDO = 0;
const NUEVO_USER = 1;
const BAJA_USER = 2;

const analizarMensaje = (mensaje, contenedor) => {
  let obj = JSON.parse(mensaje);
  let combo = document.getElementById("usuarios");

  switch (obj.type) {
    case SALUDO:
      contenedor.innerHTML += `<p>${obj.contenido}</p>`;
      break;

    case NUEVO_USER:
      // Se le da de alta en el combo usuarios
      let option = document.createElement("option");
      option.text = obj.nick;
      combo.add(option);

      break;

    case BAJA_USER:
      // Se le da de alta en el combo usuarios
      break;
  }
};

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
        texto.value = "";
      } else {
        alert("No estás conectado a un servidor");
      }
    }
  });

  // Evento boton conectar
  bconectar.addEventListener("click", () => {
    // Solicitar un nick al usuario:
    let nick = prompt("Teclea tu nick");

    // Crear la conexión con el Servidor:
    socket = new WebSocket(url);

    socket.addEventListener("open", () => {
      contenedor.innerHTML = "Conexión establecida<br>";
      texto.value = "";

      socket.send(JSON.stringify({ type: 1, nick: nick }));
    });

    socket.addEventListener("message", async (e) => {
      // Salta cuando el cliente recibe un mensaje del servidor
      const mensaje = await e.data;
      analizarMensaje(mensaje, contenedor);
    });

    socket.addEventListener("error", (e) => {
      contenedor.innerHTML += "ERROR: " + e.message + "<br>";
      alert("ERROR: " + e.message);
    });

    socket.addEventListener("close", () => {
      contenedor.innerHTML += "Se ha desconectado del servidor<br>";
    });
  });

  // Evento boton desconectar
  bdesconectar.addEventListener("click", () => {
    socket.close();
  });
});
