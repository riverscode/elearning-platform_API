import express from "express";
import morgan from "morgan";
import userRoutes from "./modules/users/presentation/user.routes";
import courseRoutes from "./modules/courses/presentation/course.routes";

class App {
  app: express.Application;
  constructor() {
    this.app = express();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountRoutes() {
    this.app.use("/users", userRoutes);
    this.app.use("/courses", courseRoutes);
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  mountMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }
}

export default new App().app;
