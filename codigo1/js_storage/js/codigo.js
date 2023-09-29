addEventListener("load", () => {
  let carrito = [];
  let datosStore;
  let str;

  // Recuperar datos del localStorage
  datosStore = localStorage.getItem("carrito");
  if (datosStore != null) {
    carrito = JSON.parse(datosStore);
    console.log(carrito);
  }

  // Eventos del boton:
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    let producto = document.querySelector("#producto");
    let cantidad = document.querySelector("#cantidad");

    obj = { producto: producto.value, cantidad: cantidad.value };
    carrito.push(obj);
    str = JSON.stringify(carrito);
    localStorage.setItem("carrito", str);

    producto.value = "";
    cantidad.value = 0;
  });
});
