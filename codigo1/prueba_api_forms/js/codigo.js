function iniciar() {
  var tno1 = document.getElementById("fijo");
  var tno2 = document.getElementById("movil");

  tno1.addEventListener("input", validacion, false);
  tno2.addEventListener("input", validacion, false);
  validacion();
}

function validacion() {
  var tno1 = document.getElementById("fijo");
  var tno2 = document.getElementById("movil");

  if (tno1.value == "" && tno2.value == "") {
    tno1.style.background = "rgb(220, 56, 56)";
    tno2.style.background = "rgb(220, 56, 56)";
    tno1.setCustomValidity("Al menos tiene que rellenar un teléfono");
  } else {
    tno1.style.background = "white";
    tno2.style.background = "white";
    tno1.setCustomValidity("");
  }
}

window.addEventListener("load", iniciar, false);
