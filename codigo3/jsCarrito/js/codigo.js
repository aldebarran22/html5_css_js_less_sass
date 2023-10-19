// Productos disponible:
const productos = [
  { nombre: "Portatil 1", img: "../img/foto1.jpg", precio: 550 },
  { nombre: "Portatil 2", img: "../img/foto2.jpg", precio: 650 },
  { nombre: "Portatil 3", img: "../img/foto3.jpg", precio: 725 },
];

let carrito = [];
let capaCarrito;

const mostrarAlmacen = () => {};

const configurarEventosDragDrop = () => {};

const mostrarCarrito = () => {
  let str = localStorage.getItem("carrito");
  if (str == null) {
    capaCarrito.innerHTML = "<h4>No hay productos en el carrito</h4>";
  }
};

addEventListener("load", () => {
  mostrarAlmacen();

  // Capturar los controles:
  capaCarrito = document.getElementById("carrito");

  // Registrar eventos: drap and drop

  configurarEventosDragDrop();
  mostrarCarrito();
});
