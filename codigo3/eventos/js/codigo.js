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
    texto.value = "";
  });
  capa2.addEventListener("mousemove", (e) => {
    texto.value = e.clientX + ", " + e.clientY;
  });

  let parrafos = document.getElementsByTagName("p");
  for (let p of parrafos) {
    p.addEventListener("click", (e) => {
      e.target.style.color = "red";
      console.log(e.target.textContent);
    });
  }
});
