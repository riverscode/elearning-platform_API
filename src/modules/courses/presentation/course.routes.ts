import express from "express";
import CourseController from "./course.controllers";

class Router {
  router: express.Router;
  controller: CourseController;

  constructor() {
    this.router = express.Router();
    this.controller = new CourseController();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post("/", this.controller.insertCourse);
    this.router.get("/", this.controller.getAll);
  }
}

export default new Router().router;
