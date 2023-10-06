addEventListener("load", () => {
  let carrito = [];

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
    // Grabar en LocalStorage:
    let str = JSON.stringify(carrito);
    localStorage.setItem("carrito", str);

    producto.value = "";
    cantidad.value = 0;
    importe.value = 0;
  });
});
