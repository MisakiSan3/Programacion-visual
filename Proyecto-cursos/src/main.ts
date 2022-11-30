import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Course } from "./entities/course";

function readFromHtml(id: string) {
  return (<HTMLInputElement>document.getElementById(id)).value;
}

function addStudent() {
  let students: Student[] = [];
  let currentStudent: Student = {
    name: readFromHtml("name"),
    identification: parseInt(readFromHtml("identification")),
    gmail: readFromHtml("mail"),
    adress: readFromHtml("adress"),
    enrollment: parseInt(readFromHtml("enrollment")),
    carrer: readFromHtml("career"),
    carrerLevel: parseInt(readFromHtml("careerLevel")),
  };
  students.push(currentStudent);
  console.log(currentStudent);
}

function addTeacher() {
  let teachers: Teacher[] = [];
  let currentTeacher: Teacher = {
    name: readFromHtml("nameTeacher"),
    identification: parseInt(readFromHtml("identificationTeacher")),
    gmail: readFromHtml("mailTeacher"),
    adress: readFromHtml("adressTeacher"),
    gradeLevel: readFromHtml("gradeLevel"),
    title: readFromHtml("title"),
    class: readFromHtml("class"),
  };
  teachers.push(currentTeacher);
  console.log(currentTeacher);
}

function addCourse() {
  let courses: Course[] = [];
  let currentCourse: Course = {
    numberStudents: parseInt(readFromHtml("numberStudents")),
    teacher: readFromHtml("teacher"),
    paralel: readFromHtml("paralel")
  }
  courses.push(currentCourse);
  console.log(currentCourse)

}