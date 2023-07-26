import { Request, Response } from "express";
import ErrorCode from "../../../config/errorCodes";
import HttpStatusCode from "../../../config/httpStatusCode";

// ✅ DOMAIN
import { InsertUserUseCase } from "../application/insert-user";
import { UserInsertException } from "../domain/exceptions/user-insert.exception";
import { User, UserCreationData } from "../domain/user";
import { UserFactory } from "../domain/user.factory";

// ✅ INFRASTRUCTURE
import { UserInfrastructure } from "../infrastructure/user.infrastructure";

// ✅ PRESENTATION
import { UserDto } from "./dtos/user.dto";

export default class UserController {
  userInfrastructure: UserInfrastructure = new UserInfrastructure();

  insertUserUseCase = new InsertUserUseCase(this.userInfrastructure);

  constructor() {
    this.insertUser = this.insertUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getCoursesByUser = this.getCoursesByUser.bind(this);
  }

  async insertUser(req: Request, res: Response) {
    const userData: UserCreationData = req.body;
    try {
      const userToInsert = UserFactory.create(userData);
      const userInserted = await this.insertUserUseCase.execute(userToInsert);
      res.status(HttpStatusCode.CREATED).json(userInserted);
    } catch (error) {
      console.log(ErrorCode.CREATE_USER_ERROR, error);
      if (error instanceof UserInsertException) {
        return res.status(error.status).json({
          result: null,
          error: { name: error.name, message: error.message },
        });
      }
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await this.userInfrastructure.getAll();
      const usersResponse = users.map((user: User) =>
        UserDto.FromDomainToPresentation(user)
      );
      return res
        .status(HttpStatusCode.OK)
        .json({ result: usersResponse, error: null });
    } catch (error) {
      console.log(ErrorCode.GET_ALL_USERS_ERROR, error);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async getCoursesByUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const courses = await this.userInfrastructure.getCoursesByUser(userId);
      return res
        .status(HttpStatusCode.OK)
        .json({ result: courses, error: null });
    } catch (error) {
      console.log(ErrorCode.GET_ALL_USERS_ERROR, error);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}
