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

// Bucle:
for (const o of array) {
  console.log(o);
}

// borrar propiedades de un objeto:
const user = { nombre: "Eva", edad: 32, tno: 688696955 };
delete user.tno;
console.log(user);

// Agrupar objetos:
const contacto = { email: "web@gmail.com", movil: 66733445 };
const todo = { user, contacto };
console.log(todo.user.nombre + " " + todo.contacto.movil);

// Filtrar arrays:
const numeros = [2, 3, 4, 5, 11, 77, 44];
const may10 = numeros.filter(function (n) {
  return n > 10;
});
console.log(may10);
// (n)=>{}
const min10 = numeros.filter((n) => n < 10);
console.log(min10);
