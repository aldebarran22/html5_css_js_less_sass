// Registro de eventos:

addEventListener("load", () => {
  // Al body:
  addEventListener(
    "click",
    (e) => {
      console.log("click en body");
    },
    false
  );

  // A la capa:
  let capa = document.getElementById("capa");
  capa.addEventListener(
    "click",
    (e) => {
      console.log("click en capa");
    },
    false
  );

  // Al botón:
  let boton = document.querySelector("#boton");
  boton.addEventListener(
    "click",
    (e) => {
      console.log("click en botón");
      // Cortar la propagación del evento:
      //e.stopPropagation();
    },
    false
  );

  // Añadir eventos a los párrafos:
  let parrafos = document.getElementsByTagName("p");
  for (let p of parrafos) {
    p.addEventListener("click", (e) => {
      console.log("click en: " + e.target.textContent);
      e.target.style.color = "red";
    });
  }
});
