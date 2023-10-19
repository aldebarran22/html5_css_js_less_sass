// Productos disponible:
const productos = [
  { nombre: "Portatil 1", img: "./img/foto1.jpg", precio: 550 },
  { nombre: "Portatil 2", img: "./img/foto2.jpg", precio: 650 },
  { nombre: "Portatil 3", img: "./img/foto3.jpg", precio: 725 },
];

let carrito = [];
let capaCarrito;
let capaAlmacen;

const mostrarAlmacen = () => {
  for (const p of productos) {
    let div = document.createElement("div");
    let img = new Image();
    img.src = p.img;
    img.width = 75;
    div.appendChild(img);
    let parrafo = document.createElement("p");
    let titulo = p.nombre + " " + p.precio + "€";
    parrafo.appendChild(document.createTextNode(titulo));
    div.appendChild(parrafo);
    capaAlmacen.appendChild(div);
  }
};

const configurarEventosDragDrop = () => {};

const mostrarCarrito = () => {
  let str = localStorage.getItem("carrito");
  if (str == null) {
    capaCarrito.innerHTML = "<h4>No hay productos en el carrito</h4>";
  }
};

addEventListener("load", () => {
  // Capturar los controles:
  capaCarrito = document.getElementById("carrito");
  capaAlmacen = document.getElementById("almacen");

  mostrarAlmacen();

  // Registrar eventos: drap and drop

  configurarEventosDragDrop();
  mostrarCarrito();
});
