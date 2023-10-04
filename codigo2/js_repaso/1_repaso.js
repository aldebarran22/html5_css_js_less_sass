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


