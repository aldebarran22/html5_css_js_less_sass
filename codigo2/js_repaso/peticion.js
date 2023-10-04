const urlMemes = "https://api.imgflip.com/get_memes";
const url2 = "https://jsonplaceholder.typicode.com/comments";

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

const medirTiempo = async () => {
  const inicio = performance.now();

  const respuesta = await fetch(url2);
  const resul = await respuesta.json();

  const fin = performance.now();
  console.log(`Tiempo: ${fin - inicio} mlsg`);
};

//getMemes();
medirTiempo();
