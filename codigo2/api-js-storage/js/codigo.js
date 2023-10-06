function actualizarVista(carrito, visor) {
  let total = 0;
  for (const prod of carrito) {
    total += prod.cantidad * prod.importe;
  }
  visor.innerHTML = `<h3>Importe: ${total} &euro;</h3>`;
}

addEventListener("load", () => {
  let carrito = [];
  let strCarrito;

  let visor = document.querySelector("#visor");
  strCarrito = localStorage.getItem("carrito");
  if (strCarrito == null) {
    visor.innerHTML = "Carrito vacío";
  } else {
    carrito = JSON.parse(strCarrito);
    actualizarVista(carrito, visor);
  }

  let vaciar = document.querySelector("#vaciar");
  vaciar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    carrito = [];
    visor.innerHTML = "Carrito vacío";
  });

  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    let producto = document.querySelector("#producto");
    let cantidad = document.querySelector("#cantidad");
    let importe = document.querySelector("#importe");

    obj = {
      producto: producto.value,
      cantidad: cantidad.value,
      importe: importe.value,
    };

    carrito.push(obj);
    actualizarVista(carrito, visor);

    // Grabar en LocalStorage:
    let str = JSON.stringify(carrito);
    localStorage.setItem("carrito", str);

    producto.value = "";
    cantidad.value = 0;
    importe.value = 0;
  });
});
