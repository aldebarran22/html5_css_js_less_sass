// Importaciones:
const WebSocket = require("ws");
const http = require("http");

// Crear el servidor HTTP:
const server = http.createServer();

// Crear el servidor de web sockets a partir del servidor HTTP:
const wss = new WebSocket.Server({ server });

// Registrar eventos:
wss.on("connection", (socket) => {
  // El parámetro representa a un cliente que se ha conectado.
  console.log("Se ha conectado un cliente ...");
  console.log("address: ", socket._socket.address());
  console.log("IP: ", socket._socket.remoteAddress);
  console.log("Port: ", socket._socket.remotePort);
  console.log("Número de clientes conectados: ", wss.clients.size);

  // Recibir mensaje de un cliente:
  socket.on("message", (data) => {
    console.log("Recibe del cliente: " + data.toString());

    // Enviar mensaje de respuesta al cliente:
    socket.send("server: " + data.toString());
  });

  // Un cliente se desconecta:
  socket.on("close", () => {
    console.log("Se ha desconectado un cliente ...");
  });
});

server.listen(8081);
console.log("Servidor esperando clientes");
