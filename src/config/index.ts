import * as dotenv from "dotenv";

export abstract class Config {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);

    dotenv.config({
      path: nodeNameEnv,
    });
  }

  getEnvironment(k: string): string {
    return process.env[k] ?? "";
  }

  getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }

  get nodeEnv(): string {
    return this.getEnvironment("NODE_ENV")?.trim() ?? "";
  }

  createPathEnv(path: string): string {
    const arrEnv: string[] = ["env"];

    if (path.length > 0) {
      const stringToArray = path.split(".");
      arrEnv.unshift(...stringToArray);
    }
    return "." + arrEnv.join(".");
  }
}
