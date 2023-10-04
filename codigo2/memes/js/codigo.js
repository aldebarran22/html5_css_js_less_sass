const urlMemes = "https://api.imgflip.com/get_memes";
let capa;

const procesar = (memes) => {
  console.log("num. memes: " + memes.length);
  for (let meme of memes) {
    let figure = document.createElement("figure");
    let figCaption = document.createElement("figcaption");
    let img = new Image();
    img.src = meme.url;
    let titulo = document.createTextNode(meme.name);
    figCaption.appendChild(titulo);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    capa.appendChild(figure);
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
