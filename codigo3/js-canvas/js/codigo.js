const test1 = (context) => {
  context.beginPath();

  // Color de relleno
  context.fillStyle = "rgb(255,255,0)";

  // Color de trazado:
  context.strokeStyle = "black";

  // Posicionar, pintar:
  context.moveTo(30, 30);
  context.lineTo(30, 270);
  context.lineTo(270, 270);
  context.closePath();
  context.stroke();
  context.strokeText("Título de la gráfica", 150, 30);
  //context.fill();
  context.fillStyle = "rgb(255,0,255)";

  context.beginPath();
  context.arc(150, 150, 75, 0, Math.PI * 2, true);

  // Cerrar el figura:
  context.closePath();
  context.stroke();
};

addEventListener("load", () => {
  // Capturar el contexto del Canvas:
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  test1(context);
});
