// Productos disponible:
const productos = [
  { nombre: "Portatil 1", img: "./img/foto1.jpg", precio: 550 },
  { nombre: "Portatil 2", img: "./img/foto2.jpg", precio: 650 },
  { nombre: "Portatil 3", img: "./img/foto3.jpg", precio: 725 },
];

let carrito = [];
let capaCarrito;
let capaAlmacen;
let capaDestino;
let indexSeleccionado = -1;

const mostrarAlmacen = () => {
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    let div = document.createElement("div");
    let img = new Image();
    img.src = p.img;
    img.width = 75;
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("Text", i + "");
    });
    div.appendChild(img);
    let parrafo = document.createElement("p");
    let titulo = p.nombre + " " + p.precio + "€";
    parrafo.appendChild(document.createTextNode(titulo));
    div.appendChild(parrafo);
    capaAlmacen.appendChild(div);
  }
};

const configurarEventosDragDrop = () => {
  const eventosD = ["dragenter", "dragover", "drop"];
  for (let nombre of eventosD) {
    capaDestino.addEventListener(nombre, (event) => {
      // Cancela el comportamiento por defecto
      event.preventDefault();
    });
  }

  capaDestino.addEventListener("drop", (e) => {
    let index = new Number(e.dataTransfer.getData("Text"));
    indexSeleccionado = index;
    let pathImg = productos[index].img;
    capaDestino.innerHTML = "";
    let imagen = new Image();
    imagen.src = pathImg;
    imagen.width = 75;
    capaDestino.appendChild(imagen);
  });
};

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
  capaDestino = document.getElementById("destino");

  mostrarAlmacen();
  configurarEventosDragDrop();
  mostrarCarrito();
});
