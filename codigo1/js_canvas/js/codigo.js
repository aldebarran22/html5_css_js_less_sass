let contexto;
let colorFondo = "#FFFFFF";
let color = "#FF0000";
let w;
let h;

function pintar() {
  contexto.fillStyle = color;
  contexto.fillRect(0, 0, h, w);
}

addEventListener("load", () => {
  let canvas = document.getElementById("canvas");
  w = canvas.width;
  h = canvas.height;
  console.log("w: " + w + " h: " + h);

  // Recuperar el contexto del canvas
  contexto = canvas.getContext("2d");

  let boton = document.getElementById("boton");
  boton.addEventListener("click", pintar);
});
