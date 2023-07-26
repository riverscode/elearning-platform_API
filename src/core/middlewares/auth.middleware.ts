import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/token.service";
import HttpStatusCode from "../../config/httpStatusCode";

export class AuthMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const headerAuthorization = req.headers.authorization;

    const tokenService = new TokenService();

    if (
      headerAuthorization &&
      headerAuthorization?.split(" ").length === 2 &&
      headerAuthorization?.split(" ")[0] === "Bearer"
    ) {
      const token = headerAuthorization?.split(" ")[1];

      const tokenStatus = tokenService.validate(token);
    } else {
      res.status(HttpStatusCode.UNAUTHORIZED).json({ error: "Unauthorized" });
    }
  }
}
