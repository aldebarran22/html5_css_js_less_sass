let capa;

addEventListener("load", () => {
  capa = document.getElementById("contenedor");
  let fichero1 = document.querySelector("#fichero1");
  fichero1.addEventListener("change", (e) => {
    console.log("change");
    //let ficheros = e.target.files;
    //console.log("numFich:" + ficheros.length);
  });
});
