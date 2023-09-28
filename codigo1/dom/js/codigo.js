window.onload = () => {
  let p1 = document.getElementById("p1");
  alert(p1.textContent);

  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    // Capturar todos los párrafos por el tag
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

  let boton3 = document.getElementById("boton3");
  boton3.addEventListener("click", () => {
    let capa = document.querySelector("#capa");
    let nuevoP = document.createElement("p");
    let texto = document.createTextNode("Contenido del párrafo");
    nuevoP.appendChild(texto);
    capa.appendChild(nuevoP);
  });
};
