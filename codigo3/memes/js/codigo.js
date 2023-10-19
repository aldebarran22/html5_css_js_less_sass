const url = "https://api.imgflip.com/get_memes";

const clasePorDefecto = "col-4";
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

const procesarMemes = (memes) => {
  let capaFotos = document.querySelector("#fotos");
  let h1 = document.querySelector("header h1");
  h1.innerHTML = `Lista de Memes (${memes.length})`;

  for (const meme of memes) {
    let capaImg = document.createElement("div");
    capaImg.className = clasePorDefecto;
    let figure = document.createElement("figure");
    let figureCap = document.createElement("figcaption");
    let img = new Image();
    img.src = meme.url;
    img.height = 150;
    img.title = meme.name;
    let titulo =
      meme.name.length > 12 ? meme.name.substr(0, 12) + "..." : meme.name;
    let txtFigureCap = document.createTextNode(titulo);
    figureCap.appendChild(txtFigureCap);
    figure.appendChild(img);
    figure.appendChild(figureCap);
    capaImg.appendChild(figure);
    capaFotos.append(capaImg);
  }
};

const getMemes = () => {
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log("La respuesta es: " + response.statusText);
      }
    })
    .then((resul) => procesarMemes(resul.data.memes))
    .catch((err) => console.error(err))
    .finally(() => console.log("Petición realizada ..."));
};

addEventListener("load", () => {
  let combo = document.querySelector("#numMemes");
  cargaCombo(combo);
  combo.selectedIndex = opciones.get(clasePorDefecto) - 1;
  combo.addEventListener("change", () => {
    const nombreClase = combo.options[combo.selectedIndex].value;
    let capasImg = document.querySelectorAll("#fotos div");
    for (let capa of capasImg) {
      capa.className = nombreClase;
    }
  });
  getMemes();
});
