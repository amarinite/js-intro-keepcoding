/***** FUNCIONES DE REQUISITOS *****/

// 1- Mostrar en formato de tabla todos los alumnos.
export function displayStudentsTable(allStudents) {
  return console.table(allStudents);
}

// 2- Mostrar por consola la cantidad de alumnos que hay en clase.
export function displayNumberOfStudents(allStudents) {
  return console.log(allStudents.length);
}

// 3- Mostrar por consola todos los nombres de los alumnos.
export function getStudentNames(allStudents) {
  return allStudents.map((student) => console.log(student.name));
}

// 4- Eliminar el último alumno de la clase.
export function removeLastStudent(allStudents) {
  allStudents.pop();
}

// 5- Eliminar un alumno aleatoriamente de la clase.
export function removeRandomStudent(allStudents) {
  allStudents.splice(Math.random() * allStudents.length, 1);
}

// 6- Mostrar por consola todos los datos de los alumnos que son chicas (versión para ambos géneros para poder reutilizarla).
export function getStudentsOfaGender(allStudents, gender) {
  return allStudents.filter((student) => student.gender === gender);
}

// 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
export function getNumberOfStudentsByGender(allStudents) {
  const femaleStudents = getStudentsOfaGender(allStudents, "female");
  const maleStudents = getStudentsOfaGender(allStudents, "male");
  return `Male students: ${maleStudents.length}\nFemale students:  ${femaleStudents.length}`;
}

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
export function areAllStudentsFemale(allStudents) {
  return allStudents.every((student) => student.gender === "female");
}

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export function getStudentsAged(allStudents, min, max) {
  return allStudents.filter(
    (student) => student.age >= min && student.age <= max
  );
}

/* 10- Añadir un alumno nuevo con los siguientes datos:
  
  nombre aleatorio.
  edad aleatoria entre 20 y 50 años.
  género aleatorio.
  listado de calificaciones vacío.
  
  ¡OJO!, el nombre y el género tienen que ir acordes. */
export function addRandomStudent(allStudents, maleNames, femNames, genders) {
  let newStudent = {};
  newStudent.age = Math.floor(Math.random() * (50 - 20 + 1) + 20);
  newStudent.examScores = [];

  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  newStudent.gender = randomGender;

  if (randomGender === "female") {
    newStudent.name = femNames[Math.floor(Math.random() * femNames.length)];
  } else {
    newStudent.name = maleNames[Math.floor(Math.random() * maleNames.length)];
  }

  allStudents.push(newStudent);
  console.log(allStudents);
}

/* 11- Mostrar por consola el nombre de la persona más joven de la clase.
  
  ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida. */
export function getYoungestStudent(allStudents) {
  return allStudents.reduce((prev, curr) =>
    prev.age < curr.age ? prev : curr
  );
}

// 12- Mostrar por consola la edad media de todos los alumnos de la clase.
export function getAverageAge(allStudents) {
  const ages = [];
  allStudents.map((student) => ages.push(student.age));

  return ages.reduce((prev, curr) => prev + curr) / ages.length;
}

// 13- Mostrar por consola la edad media de las chicas de la clase.
export function getAverageFemaleAge(allStudents) {
  const femaleStudents = getStudentsOfaGender(allStudents, "female");
  return getAverageAge(femaleStudents);
}

// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
export function addGrade(allStudents) {
  allStudents.forEach((student) =>
    student.examScores.push(Math.floor(Math.random() * 10))
  );
  console.log(allStudents);
}

// 15- Ordenar el array de alumnos alfabéticamente según su nombre.
export function sortStudents(allStudents) {
  return allStudents.sort((a, b) => a.name.localeCompare(b.name));
}
