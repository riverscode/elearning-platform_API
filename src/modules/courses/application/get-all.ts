import { Course } from "../domain/course";
import { CourseRepository } from "../domain/course.repository";

export class GetAllCoursesUseCase {
  private courseRepository: CourseRepository;

  constructor(courseRepository: CourseRepository) {
    this.courseRepository = courseRepository;
  }

  async execute(): Promise<Course[]> {
    const courses = await this.courseRepository.getAll();
    return courses;
  }
}
