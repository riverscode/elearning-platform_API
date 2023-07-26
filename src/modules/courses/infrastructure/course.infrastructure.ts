import { Course } from "../domain/course";
import { CourseRepository } from "../domain/course.repository";

import CourseModel from "./course.entity";

export class CourseInfrastructure implements CourseRepository {
  async getAll(): Promise<Course[]> {
    const courses = await CourseModel.find();
    return courses;
  }

  async insert(course: Course): Promise<Course> {
    const newCourse = await CourseModel.create(course);
    return newCourse;
  }
}
