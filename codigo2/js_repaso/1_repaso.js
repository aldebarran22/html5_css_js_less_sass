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

// Bucle: for of
for (const o of array) {
  console.log(o);
}

// Borrar propiedades de un objeto:
const user = { nombre: "Jose", edad: 29, tno: 6069494939 };
delete user.tno;
console.log(user);

// Agrupar objetos:
const contacto = { email: "prueba@gmail.com", movil: 699594939 };
const todo = { user, contacto };
console.log(todo);

// Inyectar variables dentro de cadenas:
const valor = 10;
console.log(`valor = ${valor}`);

// Filtrado de arrays:
const numeros = [1, 4, 5, 3, 2, 6, 7, 8];
const may_4 = numeros.filter(function (n) {
  return n > 4;
});
console.log(may_4);
const may_6 = numeros.filter((n) => n > 6);
console.log(may_6);

// desestructuración de arrays:
const array2 = ["hola", 345, true, "otro"];
const [saludo, , , cadena] = array2;
console.log(saludo, cadena);

const numeros2 = [3, 4, 5, 9, 11];
// Incrementar en 1 los elementos del array:
const n2 = numeros2.map((n) => n + 1);
console.log(n2);

const copia2 = [];
numeros2.forEach((n) => copia2.push(n));
console.log(copia2);

// Buscar un elemento en un array:
const resul2 = numeros2.includes(5);
console.log(resul2);
if (resul2) {
  const indice = numeros2.findIndex((n) => n === 5);
  console.log(indice);
}

// some / every
console.log(
  "some > 5: ",
  numeros2.some((n) => n > 5)
);
console.log(
  "every > 5: ",
  numeros2.every((n) => n > 0)
);

const alum = { nombre: "Javier" };
setTimeout(() => {
  alum.examen = { test: 9 };
  console.log("Nota test in: " + alum.examen?.test);
}, 3000);
console.log("Nota test out: " + alum.examen?.test);

/*
console.log("2"==2);
console.log("2"===2);

function sumar(a = 10, b = 20) {
  return a + b;
}
console.log(sumar());
console.log(sumar(12,44));
*/
