import express from "express";
import { Config } from "../config";
import IBootstrap from "./IBootstrap";

export class ServerBootstrap extends Config implements IBootstrap {
  port: number = this.getNumberEnv("PORT") ?? 3000;
  app: express.Application;
  constructor(app: express.Application) {
    super();
    this.app = app;
  }

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.app
        .listen(this.port, () => {
          console.log(`Server running on port ${this.port}`);
          resolve(`Server is listening on port ${this.port}`);
        })
        .on("error", (err) => {
          reject(err);
          console.log("Server error", err);
          process.exit(1);
        });
    });
  }

  close(): void {
    process.exit(1);
  }
}
