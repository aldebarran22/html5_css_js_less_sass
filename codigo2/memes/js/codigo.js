const urlMemes = "https://api.imgflip.com/get_memes";

const procesar = (memes) => {
  console.log("num. memes: " + memes.length);
  for (let meme of memes) {
    console.log(meme.url);
  }
};

const getMemes = () => {
  fetch(urlMemes)
    .then((respuesta) => respuesta.json())
    .then((resul) => procesar(resul.data.memes))
    .catch((err) => console.error(err))
    .finally(() => console.log("petición realizada"));
};
