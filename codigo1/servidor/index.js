// Importaciones:
const WebSocket = require("ws");
const http = require("http");

// Creamos el servidor de HTTP
const server = http.createServer();
// A partir de servidor de HTTP creamos el Serv. web socket
const wss = new WebSocket.Server({ server });

// Eventos de la conexión
wss.on("connection", (socket) => {
  // Eventos entrantes
  console.log("hay una conexión: ");

  socket.on("message", (data) => {
    console.log("mensaje recibido: " + data.toString());
    socket.send("server: " + data.toString());
  });

  // Se desconecta un cliente:
  socket.on("close", () => {
    console.log("Cliente desconectado ...");
  });

  /*
    wss.clients.forEach((cliente) => {
      if (cliente.readyState === WebSocket.OPEN) {
        // Le enviamos lo mismo que hemos recibido
        console.log("enviar mensaje al cliente: " + data.toString());
        cliente.send(data.toString());
      }
    });*/
});

server.listen(8081);
console.log("Servidor ok!");
