import express from "express";
import UserController from "./user.controllers";
import { AuthMiddleware } from "../../../core/middlewares/auth.middleware";

class Router {
  router: express.Router;
  controller: UserController;
  authentication: AuthMiddleware;

  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
    this.authentication = new AuthMiddleware();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post("/", this.controller.insertUser);
    this.router.get("/", this.controller.getAllUsers);
    this.router.get(
      "/courses",
      this.authentication.use,
      this.controller.getCoursesByUser
    );
  }
}

export default new Router().router;
