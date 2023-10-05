// Registro de eventos:

addEventListener("load", () => {
  // Al body:
  addEventListener("click", (e) => {
    console.log("click en body");
  });

  // A la capa:
  let capa = document.getElementById("capa");
  capa.addEventListener("click", (e) => {
    console.log("click en capa");
  });

  capa.addEventListener("mouseover", (e) => {
    capa.style.border = "1px solid red";
  });

  capa.addEventListener("mouseout", (e) => {
    capa.style.border = "1px solid black";
  });

  // Al botón:
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", (e) => {
    console.log("click en boton");
    // Anular el evento
    //e.preventDefault();

    //console.log("click en botón");
    // Cortar la propagación del evento:
    //e.stopPropagation();
  });

  // Añadir eventos a los párrafos:
  let parrafos = document.getElementsByTagName("p");
  for (let p of parrafos) {
    p.addEventListener("click", (e) => {
      console.log("click en: " + e.target.textContent);
      e.target.style.color = "red";
    });
  }

  // Añadir evento keypress:
  let texto = document.querySelector("#texto");
  texto.addEventListener("keydown", (e) => {
    console.log("tecla: ", e.keyCode);
    if (e.key == "Enter") {
      console.log("enter");
      boton.click();
    }
  });
});
