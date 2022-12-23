import { Course } from "./course";
import { Student } from "./sutudent";
export class Professor {
  student: Student;

  public teach(course: Course) {
    this.student.remember(course.getKnowledge());
  }
}
