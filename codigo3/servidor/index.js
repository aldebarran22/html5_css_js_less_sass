// Importaciones.
const WebSocket = require("ws");
const http = require("http");

// Crear el servidor HTTP:
const server = http.createServer();

// Crear el servidor de Web Sockets
const wss = new WebSocket.Server({ server });

// Registrar eventos:
wss.on("connection", (socket) => {
  // El parámetro socket es el socket del cliente
  console.log("Se ha conectado un cliente");

  // Comunicación con el cliente:
  socket.on("message", (data) => {
    // Recibir mensajes del cliente
    console.log("El cliente dice: " + data.toString());

    // Enviar mensajes al cliente
    socket.send("Servidor: " + data.toString());

  });

  // Un cliente se desconecta:
  socket.on("close", () =>{
    console.log("Se ha desconectado un cliente")
  })
});

// Activar el puerto del servidor:
server.listen(8081);
console.log("Servidor ok,  a la espera de clientes ...");
