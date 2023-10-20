// Importaciones.
const WebSocket = require("ws");
const http = require("http");

// Crear el servidor HTTP:
const server = http.createServer();

// Crear el servidor de Web Sockets
const wss = new WebSocket.Server({ server });

// Mapa de los clientes conectados:
mapa = new Map();

const NUEVO_USER = 1;
const BAJA_USER = 2;
const MENSAJE_PRIVADO = 3;
const MENSAJE_DIFUSION = 4;

function analizarMensaje(obj, socket) {
  let port = socket._socket.remotePort;

  switch (obj.type) {
    case NUEVO_USER:
      mapa[port] = obj.nick;

      // Enviar mensajes al cliente
      socket.send(
        JSON.stringify({ type: 0, contenido: "Bienvenido: " + obj.nick })
      );

      // Presentar el nuevo usuario al resto de clientes:
      wss.clients.forEach((cliente) => {
        if (cliente.readyState === WebSocket.OPEN) {
          if (cliente._socket.remotePort !== socket._socket.remotePort) {
            cliente.send(
              JSON.stringify({ type: 1, nick: mapa[socket._socket.remotePort] })
            );
          }
        }
      });
      break;

    case MENSAJE_PRIVADO:
      break;

    case MENSAJE_DIFUSION:
      // Mensaje para el resto de clientes:
      let mensaje = { type: 0, contenido: obj.nick + ":" + obj.contenido };

      wss.clients.forEach((cliente) => {
        if (cliente.readyState === WebSocket.OPEN) {
          if (cliente._socket.remotePort !== socket._socket.remotePort) {
            cliente.send(JSON.stringify(mensaje));
          }
        }
      });
      break;
  }
}

// Registrar eventos:
wss.on("connection", (socket) => {
  // El parámetro socket es el socket del cliente
  console.log("Se ha conectado un cliente: ", socket._socket.remotePort);
  //console.log("Address: ", socket._socket.address());
  //console.log("RemoteAddress: ", socket._socket.remoteAddress);
  console.log("Número de clientes conectados: ", wss.clients.size);

  // Comunicación con el cliente:
  socket.on("message", (data) => {
    console.log("mensaje recibido: ", data.toString());
    let obj = JSON.parse(data.toString());
    analizarMensaje(obj, socket);
  });

  // Un cliente se desconecta:
  socket.on("close", () => {
    let port = socket._socket.remotePort;
    console.log(`Se ha desconectado: ${mapa[port]}`);
    let nickBaja = mapa[port];
    // Dar de baja del mapa:
    mapa.delete(nickBaja);

    // Comunicar la baja al resto de usuarios:
    wss.clients.forEach((cliente) => {
      if (cliente.readyState === WebSocket.OPEN) {
        if (cliente._socket.remotePort !== socket._socket.remotePort) {
          cliente.send(`{type:2,nick:${nickBaja}}`);
        }
      }
    });
  });
});

// Activar el puerto del servidor:
server.listen(8081);
console.log("Servidor ok,  a la espera de clientes ...");
