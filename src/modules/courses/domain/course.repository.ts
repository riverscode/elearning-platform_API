import { Course } from "./course";

export interface CourseRepository {
  insert(course: Course): Promise<Course>;
  getAll(): Promise<Course[]>;
}
