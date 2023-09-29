addEventListener("load", () => {
    

    // Evento input para todos los campos del form
  document.datos.addEventListener("input", (e) => {
    let  elemento = e.target
    if (elemento.validity.valid){
        e.style.backgroundColor = "red";
    } else {
        e.style.backgroundColor ="white";
    }

  });

  if (document.datos.checkValidity()) {
    document.datos.submit();
  }
});
