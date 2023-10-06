let socket = null;

addEventListener("load", () => {
  let bConectar = document.getElementById("conectar");
  let bDesconectar = document.getElementById("desconectar");
  let texto = document.getElementById("texto");

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
});
