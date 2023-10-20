// Importaciones.
const WebSocket = require("ws");
const http = require("http");

// Crear el servidor HTTP:
const server = http.createServer();

// Crear el servidor de Web Sockets
const wss = new WebSocket.Server({ server });

// Mapa de los clientes conectados:
mapa = new Map();

// Registrar eventos:
wss.on("connection", (socket) => {
  // El parámetro socket es el socket del cliente
  console.log("Se ha conectado un cliente: ", socket._socket.remotePort);
  //console.log("Address: ", socket._socket.address());
  //console.log("RemoteAddress: ", socket._socket.remoteAddress);
  console.log("Número de clientes conectados: ", wss.clients.size);

  // Comunicación con el cliente:
  socket.on("message", (data) => {
    let obj = JSON.parse(data.toString());
    let port = socket._socket.remotePort;
    mapa[port] = obj.nick;

    // Enviar mensajes al cliente
    socket.send("Bienvenido: " + obj.nick);

    // Presentar el nuevo usuario al resto de clientes:
    wss.clients.forEach((cliente) => {
      if (cliente.readyState === WebSocket.OPEN) {
        if (cliente._socket.remotePort !== socket._socket.remotePort) {
          cliente.send(`Se ha conectado: ${mapa[socket._socket.remotePort]}`);
        }
      }
    });
  });

  // Un cliente se desconecta:
  socket.on("close", () => {
    console.log("Se ha desconectado un cliente");
  });
});

// Activar el puerto del servidor:
server.listen(8081);
console.log("Servidor ok,  a la espera de clientes ...");
