import { Course } from "../domain/course";
import { CourseRepository } from "../domain/course.repository";

export class InsertCourseUseCase {
  private courseRepository: CourseRepository;

  constructor(courseRepository: CourseRepository) {
    this.courseRepository = courseRepository;
  }

  async execute(courseData: Course): Promise<Course> {
    const createdCourse = await this.courseRepository.insert(courseData);
    return createdCourse;
  }
}
