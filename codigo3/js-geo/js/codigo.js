const mostrarInfo = (contenedor, info, color) => {
  contenedor.innerHTML = info;
  contenedor.style.color = color;
};

const convertir = (coor, dir) => {
  let letra, g, m;
  if (dir == "lat") letra = coor > 0 ? "N" : "S";
  else letra = coor > 0 ? "E" : "W";

  coor = Math.abs(coor);
  g = Math.trunc(coor);
  m = Math.round((coor - g) * 60);
  return `${g} ${letra} ${m}`;
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
        info += "Latitud: " + convertir(lat, "lat") + "<br>";
        info += "Longitud: " + convertir(lon, "lon") + "<br>";
        mostrarInfo(contenedor, info, "blue");

        const enlace = document.querySelector("#map-link");
        enlace.href = `https://openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=20/${lat}/${lon}`;
      },
      (error) => {
        mostrarInfo(contenedor, error.message, "red");
      }
    );
  });
});
