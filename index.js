import readline from "readline";
import { userAction } from "./selectOption.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opciones = [
  "1- Mostrar en formato de tabla todos los alumnos.",
  "2- Mostrar por consola la cantidad de alumnos que hay en clase.",
  "3- Mostrar por consola todos los nombres de los alumnos.",
  "4- Eliminar el último alumno de la clase.",
  "5- Eliminar un alumno aleatoriamente de la clase.",
  "6- Mostrar por consola todos los datos de los alumnos que son chicas.",
  "7- Mostrar por consola el número de chicos y chicas que hay en la clase.",
  "8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
  "9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
  "10- Añadir un alumno nuevo con los siguientes datos:\nnombre aleatorio.\nedad aleatoria entre 20 y 50 años.\ngénero aleatorio.\nlistado de calificaciones vacío.",
  "11- Mostrar por consola el nombre de la persona más joven de la clase.",
  "12- Mostrar por consola la edad media de todos los alumnos de la clase.",
  "13- Mostrar por consola la edad media de las chicas de la clase.",
  "14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.",
  "15- Ordenar el array de alumnos alfabéticamente según su nombre.\n",
];

/***** OBTENER NÚMERO DEL USUARIO *****/

function getUserInput() {
  const userInputPromise = new Promise((resolve, reject) => {
    rl.question(
      "Escoge un número del 1 al 15. Pulsa 0 para salir:\n",
      (input) => {
        rl.pause();
        if (Number.isInteger(Number.parseInt(input))) {
          input = Number.parseInt(input);
          resolve(input);
        } else {
          reject("Debe introducirse un número");
        }
      }
    );
  });
  return userInputPromise;
}

/***** FUNCIÓN PRINCIPAL *****/

async function main() {
  console.log(
    "Bienvenido/a! Las opciones disponibles en este programa son las siguientes:\n"
  );
  opciones.forEach((opcion) => console.log(opcion));

  let option;
  do {
    option = await getUserInput();
    try {
      userAction(option);
    } catch (error) {
      console.log("La opción no es válida");
    }
  } while (option > 0 && option < 16);
}

main();
