import {
  students,
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
} from "./data.js";
import {
  displayStudentsTable,
  displayNumberOfStudents,
  getStudentNames,
  removeLastStudent,
  removeRandomStudent,
  getStudentsOfaGender,
  getNumberOfStudentsByGender,
  areAllStudentsFemale,
  getStudentsAged,
  addRandomStudent,
  getYoungestStudent,
  getAverageAge,
  getAverageFemaleAge,
  addGrade,
  sortStudents,
} from "./doOption.js";

export function userAction(input) {
  switch (input) {
    case 1:
      displayStudentsTable(students);
      break;
    case 2:
      displayNumberOfStudents(students);
      break;
    case 3:
      getStudentNames(students);
      break;
    case 4:
      removeLastStudent(students);
      break;
    case 5:
      removeRandomStudent(students);
      break;
    case 6:
      console.log(getStudentsOfaGender(students, "female"));
      break;
    case 7:
      console.log(getNumberOfStudentsByGender(students));
      break;
    case 8:
      console.log(areAllStudentsFemale(students));
      break;
    case 9:
      console.log(getStudentsAged(students, 20, 25));
      break;
    case 10:
      addRandomStudent(
        students,
        availableMaleNames,
        availableFemaleNames,
        availableGenders
      );
      break;
    case 11:
      console.log(getYoungestStudent(students));
      break;
    case 12:
      console.log(getAverageAge(students));
      break;
    case 13:
      console.log(getAverageFemaleAge(students));
      break;
    case 14:
      addGrade(students);
      break;
    case 15:
      console.table(sortStudents(students));
      break;
  }
}
