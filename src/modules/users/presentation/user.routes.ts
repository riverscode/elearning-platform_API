import express from "express";
import UserController from "./user.controllers";

class Router {
  router: express.Router;
  controller: UserController;

  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post("/", this.controller.insertUser);
    this.router.get("/", this.controller.getAllUsers);
  }
}

export default new Router().router;
