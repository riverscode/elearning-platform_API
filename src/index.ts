import app from "./app";
import { DatabaseBootstrap } from "./bootstrap/databaseBootstrap";
import { ServerBootstrap } from "./bootstrap/serverBootstrap";

const start = async (): Promise<any> => {
  const server = new ServerBootstrap(app);
  const database = new DatabaseBootstrap();
  try {
    const listPromise = [server.initialize(), database.initialize()];
    await Promise.all(listPromise);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
    server.close();
    database.close();
  }
};

start();
