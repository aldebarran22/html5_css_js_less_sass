window.onload = () => {
  let p1 = document.getElementById("p1");
  //alert(p1.textContent);

  let capa = document.querySelector("#capa");
  capa.innerHTML = "<h2>Capa</h2>";

  let boton = document.querySelector("#button");
  boton.addEventListener("click", () => {
    let parrafos = document.getElementsByTagName("p");
    for (let p of parrafos) {
      p.style.color = "red";
    }
  });

  let boton2 = document.querySelector("#button2");
  boton2.addEventListener("click", () => {
    let parrafos2 = document.querySelectorAll(".azul p");
    for (let p of parrafos2) {
      p.style.color = "blue";
    }
  });

  let boton3 = document.querySelector("#button3");
  boton3.addEventListener("click", () => {
    let nuevoP = document.createElement("p");
    let texto = document.createTextNode("otro párrafo");
    nuevoP.appendChild(texto);
    capa.appendChild(nuevoP);
  });

  let boton4 = document.querySelector("#button4");
  boton4.addEventListener("click", () => {
    let img = new Image();
    img.src = "img/foto1.jpg";
    img.alt = "foto";

    capa.appendChild(img);
  });
};
