const url = "https://api.imgflip.com/get_memes";

const procesarMemes = (memes) => {
  console.log("Memes descargados: ", memes.length);
  for (const meme of memes) {
    console.log(meme.url);
  }
};

const getMemes2 = () => {
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        console.log("Descarga ok: " + response.statusText);
      } else {
      }
    })
    .catch((err) => console.error(err))
    .finally(() => console.log("Petición realizada ..."));
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

getMemes();
