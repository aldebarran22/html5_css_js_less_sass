addEventListener("load", () => {
  addEventListener(
    "click",
    () => {
      console.log("click body");
    },
    true
  );

  let capa = document.getElementById("capa");
  capa.addEventListener(
    "click",
    () => {
      console.log("click div");
    },
    true
  );

  let boton = document.getElementById("boton");
  boton.addEventListener(
    "click",
    () => {
      console.log("click button");
    },
    true
  );

  let texto = document.getElementById("texto");
  texto.addEventListener("keydown", (e) => {
    console.log("e.keyCode:" + e.key);
    if (e.key == "Enter") {
      console.log("Pulsa enter");
    }
  });

  let capa2 = document.getElementById("capa2");
  capa2.addEventListener("mouseover", (e) => {
    capa2.style.border = "2px solid red";
  });
  capa2.addEventListener("mouseout", (e) => {
    capa2.style.border = "2px solid black";
  });
});
