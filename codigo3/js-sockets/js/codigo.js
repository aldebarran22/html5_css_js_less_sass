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
        console.log("enviar un mensaje");
      } else {
        alert("No estás conectado a un servidor");
      }
    }
  });
});
