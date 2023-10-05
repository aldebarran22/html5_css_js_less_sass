const urlMemes = "https://api.imgflip.com/get_memes";
let capa;
const clasePorDefecto = "col-4";

const procesar = (memes) => {
  console.log("num. memes: " + memes.length);
  for (let meme of memes) {
    let capaImg = document.createElement("div");
    capaImg.className = clasePorDefecto;
    let figure = document.createElement("figure");
    let figCaption = document.createElement("figcaption");
    let img = new Image();
    img.src = meme.url;
    img.height = 150;
    let titulo = document.createTextNode(meme.name);
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
  getMemes();
});
