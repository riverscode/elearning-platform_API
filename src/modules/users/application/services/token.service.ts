import { v4 as uuid } from "uuid";

export class TokenService {
  static generateRefreshToken(): string {
    return uuid();
  }
}
