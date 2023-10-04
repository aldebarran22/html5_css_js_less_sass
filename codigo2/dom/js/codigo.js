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
};
