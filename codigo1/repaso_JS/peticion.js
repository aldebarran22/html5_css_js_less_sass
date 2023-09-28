// Petición fetch

const url = "https://api.imgflip.com/get_memes";
const url2 = "https://jsonplaceholder.typicode.com/comments";

const procesar = (memes) => {
  console.log("num memes: " + memes.length);
  for (let meme of memes) {
    console.log(meme.url);
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

const consultar = async () => {
  try {
    const respuesta = await fetch(url2);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (err) {
    console.error(err);
  }
};

const medirTiempo = async () => {
  const inicio = performance.now();

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  const fin = performance.now();

  console.log(`Tiempo de la petición: ${fin - inicio} mlsg`);
};

consultar();
getMemes();
medirTiempo();
