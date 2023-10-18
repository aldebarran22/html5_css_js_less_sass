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

// Desestructuración de Arrays:
const array2 = ["hola", 234, true, "otro"];
const [saludo, , , cadena] = array2;
console.log(saludo, cadena);

const numeros2 = [2, 3, 4, 5, 11, 77, 44];
const n2 = numeros2.map((n) => n * 10);
console.log(n2);

const copia2 = [];
numeros2.forEach((n) => copia2.push(n));
console.log(numeros2);

// Buscar elementos en un array:
const resul2 = numeros2.includes(5);
console.log(resul2);
if (resul2) {
  // Obtener la posición que ocupa el 5:
  const indice = numeros2.findIndex((n) => n === 5);
  console.log(indice);
}

//console.log("5" == 5); -> true
//console.log("5" === 5); -> false

console.log(
  "some > 5: ",
  numeros2.some((n) => n > 5)
);
let i = 3;
console.log(
  `every > ${i}: `,
  numeros2.every((n) => n > i)
);

const alum = { nombre: "Javier" };
setTimeout(() => {
  alum.examen = { test: 9 };
  console.log("Nota test in: " + alum.examen?.test);
}, 3000);
console.log("Nota test out: " + alum.examen?.test);
