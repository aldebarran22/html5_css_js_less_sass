const url = "https://api.imgflip.com/get_memes";


const clasePorDefecto = "col-4";
const opciones = new Map([
    ['col-12',1],
    ['col-6',2],
    ['col-4',3],
    ['col-3',4]
]);


const procesarMemes = (memes) => {
    let h1 = document.querySelector("header h1");
    h1.innerHTML = `Lista de Memes (${memes.length})`;
  /*
  for (const meme of memes) {
    console.log(meme.url);
  }*/
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


addEventListener("load", ()=>{
   getMemes(); 

});