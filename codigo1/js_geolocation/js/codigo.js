addEventListener("load", () => {
  let capa = document.getElementById("contenedor");
  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Va todo bien
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        capa.innerHTML =
          "Latitud: " + lat + "<br />" + "Longitud: " + lon + "<br />";
      },
      (error) => {
        // Se ha producido error
        alert(
          "Se ha producido un error al localizar: " +
            error.code +
            " " +
            error.message
        );
      }
    );
  });
});
