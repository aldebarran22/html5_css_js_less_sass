const mostrarInfo = (contenedor, info, color) => {
  contenedor.innerHTML = info;
  contenedor.style.color = color;
};

addEventListener("load", () => {
  let contenedor = document.querySelector("#contenedor");

  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (ubicacion) => {
        let fecha = new Date(ubicacion.timestamp);
        let lat = ubicacion.coords.latitude;
        let lon = ubicacion.coords.longitude;
        let info = fecha.toString() + "<br>";
        info += "Latitud: " + lat + "<br>";
        info += "Longitud: " + lon + "<br>";
        mostrarInfo(contenedor, info, "blue");
      },
      (error) => {
        mostrarInfo(contenedor, error.message, "red");
      }
    );
  });
});
