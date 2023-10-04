window.onload = () => {
  let p1 = document.getElementById("p1");
  alert(p1.textContent);

  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    let parrafos = document.getElementsByTagName("p");
    for (let p of parrafos) {
      p.style.color = "red";
    }
  });

  let boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", () => {
    let parrafosAzul = document.querySelectorAll(".azul p");
    for (let p of parrafosAzul) {
      p.style.color = "blue";
    }
  });

  let boton3 = document.querySelector("#boton3");
  boton3.addEventListener("click", () => {
    let capa = document.querySelector("#capa");
    let p = document.createElement("p");
    let texto = document.createTextNode("texto de prueba");
    p.appendChild(texto);
    capa.appendChild(p);
  });

  let boton4 = document.querySelector("#boton4");
  boton4.addEventListener("click", () => {
    let capa = document.querySelector("#capa");
    let img = new Image();
    img.src = "./img/foto1.jpg";
    img.alt = "foto1.jpg";

    capa.appendChild(img);
  });
};
