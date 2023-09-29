// EJEMPLO DE PETICION GET CON FETCH:

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

// Definir la lista donde se almacenaran los autores
const ul = document.getElementById('autores');

// La URL para obtener los datos de los autores
const url = "https://randomuser.me/api/?results=10";

// Con fetch hace la peticion a los datos de los autores
// Cuando los obtiene los convierte en json con el método json() 
// Cuando ya tiene los datos de los autores, itera con map
// aplicando una función para autor

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let autores = data.results;
        return autores.map(function(autor){
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = autor.picture.medium;
            span.innerHTML = `${autor.name.first} ${autor.name.last}`;
            append(li, img);
            append(li,span);
            append(ul, li);
        })
    })
    .catch(function(error){
        console.log(error);
    });