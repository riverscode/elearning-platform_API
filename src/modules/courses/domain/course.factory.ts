import { Course, CourseCreationData } from "./course";

export class CourseFactory {
  static create(data: CourseCreationData) {
    data.slug = data.name.split(" ").join("-").toLowerCase();
    return new Course(data);
  }
}
