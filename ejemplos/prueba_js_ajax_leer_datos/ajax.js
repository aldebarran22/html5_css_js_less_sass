var databox;

function initiate() {
  databox = document.getElementById("databox");
  var button = document.getElementById("button");
  var button2 = document.getElementById("button2");
  button.addEventListener("click", read1);
  button2.addEventListener("click", read2);
}

function read1() {
  // una peticion:
  let url = new Request("https://api.imgflip.com/get_memes");

  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => show(resp));
}

// De forma asincrona:
async function read1_2() {
  let url = new Request("https://api.imgflip.com/get_memes");

  await fetch(url)
    .then((resp) => resp.json())
    .then((resp) => show(resp));
}

function read2() {
  // Varias peticiones
  Promise.all([
    fetch("https://api.imgflip.com/get_memes").then((x) => x.json()),
    fetch("https://api.imgflip.com/get_memes").then((x) => x.json()),
  ]).then(([ejemplo1, ejemplo2]) => {
    console.log(ejemplo1, ejemplo2);
    show(ejemplo1);
  });
}

function show(e) {
  databox.innerHTML = JSON.stringify(e);
}

addEventListener("load", initiate);
