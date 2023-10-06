// Importaciones:
const WebSocket = require("ws");
const http = require("http");

// Mapa de clientes:
mapa = new Map();

// Crear el servidor HTTP:
const server = http.createServer();

// Crear el servidor de web sockets a partir del servidor HTTP:
const wss = new WebSocket.Server({ server });

// Registrar eventos:
wss.on("connection", (socket) => {
  // El parámetro representa a un cliente que se ha conectado.
  console.log("Se ha conectado el cliente: ", socket._socket.remotePort);
  /*
  console.log("address: ", socket._socket.address());
  console.log("IP: ", socket._socket.remoteAddress);
  console.log("Port: ", socket._socket.remotePort);*/
  console.log("Número de clientes conectados: ", wss.clients.size);

  // Recibir mensaje de un cliente:
  socket.on("message", (data) => {
    let obj = JSON.parse(data.toString());
    let port = socket._socket.remotePort;
    mapa[port] = obj.nick;

    console.log("Mapa", mapa.toString());

    // Presentar al resto de usuarios:
    wss.clients.forEach((cliente) => {
      if (cliente.readyState === WebSocket.OPEN) {
        if (cliente._socket.remotePort !== socket._socket.remotePort)
          cliente.send(`Se ha conectado: ${mapa[socket._socket.remotePort]}`);
      }
    });

    // Enviar mensaje de respuesta al cliente:
    socket.send("Bienvenido: " + obj.nick);
  });

  // Un cliente se desconecta:
  socket.on("close", () => {
    console.log("Se ha desconectado un cliente ...");
    // Presentar al resto de usuarios:
    wss.clients.forEach((cliente) => {
      if (cliente.readyState === WebSocket.OPEN) {
        if (cliente._socket.remotePort !== socket._socket.remotePort)
          cliente.send(
            `Se ha desconectado: ${mapa[socket._socket.remotePort]}`
          );
      }
    });
  });
});

server.listen(8081);
console.log("Servidor esperando clientes");
