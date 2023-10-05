const mostrarInfo = (capa, info, color) => {
  capa.innerHTML = info;
  capa.style.color = color;
};

addEventListener("load", () => {
  let capa = document.querySelector("#contenedor");
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        let instante = new Date(posicion.timestamp);
        let info = "Latitud: " + posicion.coords.latitude + "<br>";
        info += "Longitud: " + posicion.coords.longitude + "<br>";
        info += "Fecha/Hora: " + instante.toString();
        mostrarInfo(capa, info, "blue");

        const enlace = document.querySelector("#map-link");
        enlace.href = `https://openstreetmap.org/?mlat=${posicion.coords.latitude}&mlon=${posicion.coords.longitude}#map=20/${posicion.coords.latitude}/${posicion.coords.longitude}`;
      },
      (error) => {
        mostrarInfo(capa, error.message, "red");
      },
      { enabledHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
});
