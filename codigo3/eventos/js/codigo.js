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
});
