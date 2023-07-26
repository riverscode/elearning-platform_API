import * as jwt from "jwt-simple";

import { Config } from "../../config";
import HttpStatusCode from "../../config/httpStatusCode";
import { StatusToken, TokenStatus } from "../../config/tokenStatus";

export class TokenService extends Config {
  jwtSecret = this.getEnvironment("JWT_SECRET");

  validate(token: string): TokenStatus {
    try {
      const payload = jwt.decode(token, this.jwtSecret);
      if (payload.exp < Date.now() / 1000) {
        return {
          status: HttpStatusCode.BAD_REQUEST,
          message: StatusToken.TOKEN_EXPIRED,
        };
      }
      return {
        status: HttpStatusCode.OK,
        message: StatusToken.TOKEN_VALID,
        payload,
      };
    } catch (error) {
      return {
        status: HttpStatusCode.UNAUTHORIZED,
        message: StatusToken.TOKEN_INVALID,
      };
    }
  }
}
