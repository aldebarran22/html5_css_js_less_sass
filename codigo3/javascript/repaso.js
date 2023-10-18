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

const objetos = [
  { nombre: "Jose", edad: 29 },
  { nombre: "Eva", edad: 32 },
  { nombre: "Sandra", edad: 19 },
];

// Convertir un array de objetos a un str de json:
const str_json = JSON.stringify(objetos);
console.log(str_json.length + " chars");
console.log(str_json);
const array = JSON.parse(str_json);
console.log("Número de objetos: " + array.length);
