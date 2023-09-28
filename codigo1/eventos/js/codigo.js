addEventListener("load", () => {
  let capa = document.getElementById("capa");
  capa.addEventListener("click", (e) => {
    console.log("click en capa");
    e.stopPropagation();
  });

  let boton = document.getElementById("boton");
  boton.addEventListener("click", (e) => {
    console.log("click boton");
    console.log(e.target);
    //e.stopPropagation();
  });

  boton.addEventListener("mouseover", () => {
    console.log("over boton");
  });
});

addEventListener("click", () => {
  console.log("click en body");
});
