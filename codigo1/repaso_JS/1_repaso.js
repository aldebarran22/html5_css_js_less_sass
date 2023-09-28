// Definir objetos:
const obj = { nombre: "Jose", edad: 22 };
console.log(obj);

// Desestructuración del obj:
const { nombre, edad } = obj;
console.log(nombre + " " + edad);

// Copia de objetos:
const { ...copia } = obj;
obj.edad++;
copia.edad--;
console.log(copia);
console.log(obj);

// Arrays de objetos:
const objetos = [
  { nombre: "Jose", edad: 22 },
  { nombre: "Eva", edad: 44 },
  { nombre: "Gema", edad: 78 },
];
for (const item of objetos) {
  console.log(item);
}

// Borrar propiedades de los objetos:
const user = { nombre: "Jose", edad: 22, tno: 600404032 };
delete user.tno;
console.log(user);

// Agrupar objetos en otro objeto
const contacto = { email: "prueba@gmail.com", movil: 56704030 };
const todo = {
  user,
  contacto,
};
console.log(todo);

const valor = 10;
console.log(`valor = ${valor}`);

// Filtrado de arrays:
const numeros = [1, 3, 4, 5, 3, 2, 55];
const may_3 = numeros.filter(function (n) {
  return n > 3;
});
console.log(may_3);
const may_4 = numeros.filter((n) => n > 4);
console.log(may_4);

// Desestructurando arrays:
const array = ["hola", 345, true, "otro"];
const [saludo, , , cadena] = array;
console.log(saludo, cadena);

// Iteradores:
const resul = array.map(function (obj) {
  return obj;
});
console.log(resul);

const numeros2 = [1, 4, 3, 5, 6, 8];
const n2 = numeros2.map((n) => n + 1);
console.log(n2);

const copia2 = [];
numeros2.forEach((n) => copia2.push(n));
console.log(copia2);

function sumar(a = 10, b = 20) {
  return a + b;
}

console.log(sumar());
console.log(sumar(10, 20));

// Comprobar si tenemos un valor dentro de un array:
const resul2 = numeros2.includes(8);
console.log(resul2);

// Localizar el índice de un valor:
const indice = numeros2.findIndex((n) => n === 8);
console.log(indice);

// some / every
console.log(numeros2.some((n) => n > 5));
console.log(numeros2.every((n) => n > 0));

const alum = { nombre: "Javier" };
setTimeout(() => {
  alum.examen = { test: 10 };
  console.log("Nota test in: " + alum.examen?.test);
}, 3000);
console.log("Nota test out: " + alum.examen?.test);
