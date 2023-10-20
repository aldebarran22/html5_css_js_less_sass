const url = "ws://localhost:8081";

let nick;

const SALUDO = 0;
const NUEVO_USER = 1;
const BAJA_USER = 2;
const MENSAJE_PRIVADO = 3;
const MENSAJE_DIFUSION = 4;

const analizarMensaje = (mensaje, contenedor, combo) => {
  console.log("mensaje:", mensaje);
  let obj = JSON.parse(mensaje);

  switch (obj.type) {
    case SALUDO:
      contenedor.innerHTML += `<p>${obj.contenido}</p>`;
      break;

    case NUEVO_USER:
      // Se le da de alta en el combo usuarios
      let option = document.createElement("option");
      option.text = obj.nick;
      option.value = obj.nick;
      combo.add(option);
      break;

    case BAJA_USER:
      // Se le da de alta en el combo usuarios
      break;

    case MENSAJE_PRIVADO:
      break;

    case MENSAJE_DIFUSION:
      break;
  }
};

const enviarMensaje = (texto, combo, socket) => {
  let nickDestino = combo.value;
  if (nickDestino === "*") {
    // Mensaje de difusion
    socket.send(JSON.stringify({ type: 4, nick: nick, contenido: texto }));
  } else {
    // Es un mensaje privado:
    socket.send(
      JSON.stringify({
        type: 3,
        nick: nick,
        nick2: nickDestino,
        contenido: texto,
      })
    );
  }
};

addEventListener("load", () => {
  let socket = null;
  let bconectar = document.getElementById("conectar");
  let bdesconectar = document.getElementById("desconectar");
  let texto = document.getElementById("texto");
  let contenedor = document.getElementById("contenedor");
  let combo = document.getElementById("usuarios");

  texto.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      // Comprobar si está conectado a un servidor
      if (socket != null && socket.readyState !== WebSocket.CLOSED) {
        enviarMensaje(texto.value, combo, socket);
        texto.value = "";
      } else {
        alert("No estás conectado a un servidor");
      }
    }
  });

  // Evento boton conectar
  bconectar.addEventListener("click", () => {
    // Solicitar un nick al usuario:
    nick = prompt("Teclea tu nick");

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
      analizarMensaje(mensaje, contenedor, combo);
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
