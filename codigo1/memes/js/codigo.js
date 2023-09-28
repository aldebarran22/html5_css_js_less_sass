const url = "https://api.imgflip.com/get_memes";
let capa;
let opciones = new Map([
  ["col-12", 1],
  ["col-6", 2],
  ["col-4", 3],
  ["col-3", 4],
  ["col-2", 6],
]);
const clasePorDefecto = "col-4";

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
  let parrafo;
  let img;
  let capaImg;
  let figure, figureCap;
  let titulo;

  for (let meme of memes) {
    capaImg = document.createElement("div");
    capaImg.className = clasePorDefecto;
    figure = document.createElement("figure");
    figureCap = document.createElement("figcaption");
    titulo =
      meme.name.length > 15 ? meme.name.substring(0, 15) + "..." : meme.name;
    figureCap.appendChild(document.createTextNode(titulo));

    img = new Image();
    img.height = 100;
    img.src = meme.url;
    img.alt = meme.url;

    figure.appendChild(img);
    figure.appendChild(figureCap);
    capaImg.appendChild(figure);
    capa.appendChild(capaImg);
  }
};

const getMemes = () => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resul) => {
      procesar(resul.data.memes);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("petición realizada");
    });
};

window.onload = () => {
  capa = document.querySelector("#contenedor");
  let combo = document.getElementById("numMemes");
  cargaCombo(combo);
  combo.selectedIndex = opciones.get(clasePorDefecto) - 1;

  combo.addEventListener("change", () => {
    let nombreClase = combo.options[combo.selectedIndex].value;
    let capasImg = document.querySelectorAll("#contenedor div");
    if (capasImg != null) {
      for (let c of capasImg) {
        c.className = nombreClase;
      }
    }
  });
  getMemes();
};
