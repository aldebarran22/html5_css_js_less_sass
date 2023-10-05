const urlMemes = "https://api.imgflip.com/get_memes";
let capa;
const clasePorDefecto = "col-4";
// Las opciones del combo: número de memes por fila
const opciones = new Map([
  ["col-12", 1],
  ["col-6", 2],
  ["col-4", 3],
  ["col-3", 4],
]);

const cargaCombo = (combo) => {
  let opcion;

  opciones.forEach((value, key) => {
    opcion = document.createElement("option");
    opcion.value = key;
    opcion.appendChild(document.createTextNode(value));
    combo.appendChild(opcion);
  });
};

const procesar = (memes) => {
  let h1 = document.querySelector(".header h1");
  h1.innerHTML = "Memes (" + memes.length + ")";

  for (let meme of memes) {
    let capaImg = document.createElement("div");
    capaImg.className = clasePorDefecto;
    let figure = document.createElement("figure");
    let figCaption = document.createElement("figcaption");
    let img = new Image();
    img.src = meme.url;
    img.height = 150;
    img.title = meme.name;
    let strTitulo =
      meme.name.length > 15 ? meme.name.substring(0, 15) + " ..." : meme.name;
    let titulo = document.createTextNode(strTitulo);
    figCaption.appendChild(titulo);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    capaImg.appendChild(figure);

    // Añadir al contenedor principal:
    capa.appendChild(capaImg);
  }
};

const getMemes = () => {
  fetch(urlMemes)
    .then((respuesta) => respuesta.json())
    .then((resul) => procesar(resul.data.memes))
    .catch((err) => console.error(err))
    .finally(() => console.log("petición realizada"));
};

addEventListener("load", () => {
  capa = document.getElementById("contenedor");
  let combo = document.getElementById("numMemes");
  cargaCombo(combo);

  // Seleccionar el número de memes por defecto:
  combo.selectedIndex = opciones.get(clasePorDefecto) - 1;

  // Registrar un evento change:
  combo.addEventListener("change", () => {
    // Extraer el nombre de la clase seleccionada del combo:
    let nombreClase = combo.options[combo.selectedIndex].value;

    // Seleccionar las capas que contienen las imágenes:
    let capasImg = document.querySelectorAll("#contenedor div");
    if (capasImg != null) {
      for (let c of capasImg) {
        c.className = nombreClase;
      }
    }
  });
  getMemes();
});
