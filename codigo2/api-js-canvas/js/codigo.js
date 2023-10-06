function test1() {
  canvas.beginPath();
  canvas.fillStyle = "rgb(100,100,0)";
  canvas.moveTo(100, 100);
  canvas.lineTo(200, 200);
  canvas.lineTo(100, 200);
  canvas.fill();

  canvas.strokeRect(100, 100, 120, 120);
  canvas.fillRect(110, 110, 100, 100);
  canvas.clearRect(120, 120, 80, 80);
}

function test2(canvas) {
  canvas.fillStyle = "orange"; // Color de relleno
  canvas.strokeStyle = "blue"; // Color de trazado
  canvas.beginPath();
  canvas.strokeText("Título de la gráfica", 150, 20);
  canvas.fillText("Título de la gráfica", 150, 50);
  canvas.arc(100, 100, 50, 0, Math.PI * 2, true); // true -> arco en sentido horario
  canvas.closePath();
  canvas.stroke(); // Pintar sin relleno.
  //canvas.fill(); // Rellenar el círculo
}

addEventListener("load", () => {
  // Capturar el canvas y el contexto:
  let obj = document.getElementById("canvas");
  let canvas = obj.getContext("2d");

  //test1(canvas);
  test2(canvas);
});
