// Registro de eventos:

addEventListener("load", () => {
  // Al body:
  addEventListener("click", () => {
    console.log("click en body");
  });

  // A la capa:
  let capa = document.getElementById("capa");
  capa.addEventListener("click", () => {
    console.log("click en capa");
  });

  // Al botón:
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    console.log("click en botón");
  });
});
