// Definir objetos:
const obj = { nombre: "Jose", edad: 29 };
console.log(obj);

// Desestructurar objetos:
const { nombre, edad } = obj;
console.log(nombre + " " + edad);

// Copiar objetos:
const { ...copia } = obj;
obj.edad++;
copia.edad--;
console.log(obj);
console.log(copia);

// Arrays de objetos:
const objetos = [
  { nombre: "Jose", edad: 29 },
  { nombre: "Eva", edad: 22 },
  { nombre: "Sandra", edad: 33 },
];

// Conversiones a JSON <--> obj JS
const str_json = JSON.stringify(objetos);
console.log("Cadena: ", str_json.length);
const array = JSON.parse(str_json);
console.log("Array: ", array.length);
