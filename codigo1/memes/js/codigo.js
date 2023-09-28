const url = "https://api.imgflip.com/get_memes";
let capa;

const procesar = (memes) => {
  let parrafo;
  let img;
  let capaImg;
  let figure, figureCap;

  capa.innerHTML = `<h1>Memes(${memes.length})</h1>`;

  for (let meme of memes) {
    capaImg = document.createElement("div");
    figure = document.createElement("figure");
    figureCap = document.createElement("figcaption");
    figureCap.appendChild(document.createTextNode(meme.name));

    img = new Image(150);
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
  getMemes();
};
