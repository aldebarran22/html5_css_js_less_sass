const url = "https://api.imgflip.com/get_memes";
let capa;

const procesar = (memes) => {
  let parrafo;
  capa.innerHTML = `<h1>Memes(${memes.length})</h1>`;

  for (let meme of memes) {
    parrafo = document.createElement("p");
    parrafo.appendChild(document.createTextNode(meme.name));
    capa.appendChild(parrafo);
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
