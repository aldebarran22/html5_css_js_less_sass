let contexto;
let colorFondo = "#FFFFFF";
let color = "#000000";
let w = 300;
let h = 300;

function pintar() {
  contexto.fillStyle = color;
  //contexto.fillRect(0, 0, h - 1, w - 1);
  contexto.clearRect(0, 0, w, h);

  // Nuevo trazado:
  contexto.beginPath();
  contexto.moveTo(100, 100);
  contexto.lineTo(200, 200);
  contexto.lineTo(100, 200);
  contexto.closePath();

  contexto.beginPath();
  contexto.arc(60, 60, 50, 0, Math.PI * 2, true);
  //contexto.closePath();
  //contexto.moveTo(20, h - 20);
  //contexto.lineTo(w - 20, h - 20);
  //contexto.fill(); // Pintar con relleno
  contexto.stroke(); // Pintar sin relleno
  contexto.closePath();
}

addEventListener("load", () => {
  let canvas = document.getElementById("canvas");
  console.log("w: " + w + " h: " + h);

  // Recuperar el contexto del canvas
  contexto = canvas.getContext("2d");

  let boton = document.getElementById("boton");
  boton.addEventListener("click", pintar);
});
