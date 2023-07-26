import { Request, Response } from "express";
import { CourseCreationData } from "../domain/course";
import { CourseFactory } from "../domain/course.factory";
import { CourseInfrastructure } from "../infrastructure/course.infrastructure";
import { InsertCourseUseCase } from "../application/insert-course";
import HttpStatusCode from "../../../config/httpStatusCode";
import ErrorCode from "../../../config/errorCodes";

export default class CourseController {
  courseInfrastructure = new CourseInfrastructure();
  insertCourseUseCase = new InsertCourseUseCase(this.courseInfrastructure);

  constructor() {
    this.insertCourse = this.insertCourse.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async insertCourse(req: Request, res: Response) {
    const courseData: CourseCreationData = req.body;

    try {
      const courseToInsert = CourseFactory.create(courseData);
      const courseInserted = await this.insertCourseUseCase.execute(
        courseToInsert
      );
      res.status(HttpStatusCode.CREATED).json(courseInserted);
    } catch (error) {
      console.log(ErrorCode.CREATE_COURSE_ERROR, error);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const courses = await this.courseInfrastructure.getAll();
      return res
        .status(HttpStatusCode.OK)
        .json({ result: courses, error: null });
    } catch (error) {
      console.log(ErrorCode.GET_ALL_COURSES_ERROR, error);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}
