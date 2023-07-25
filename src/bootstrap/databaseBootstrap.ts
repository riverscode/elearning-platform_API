import { Config } from "../config";
import IBootstrap from "./IBootstrap";
import mongoose from "mongoose";

export class DatabaseBootstrap extends Config implements IBootstrap {
  mongoUri: string = this.getEnvironment("DATABASE_URL");

  async initialize(): Promise<any> {
    return await mongoose.connect(this.mongoUri);
  }
  close(): void {
    mongoose.connection.close();
  }
}
