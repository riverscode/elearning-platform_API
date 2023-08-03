// ✅ DOMAIN
import { User } from "../../domain/user";

// ✅ PRESENTATION
import { GetAllUsersResponse } from "../responses/get-all.response";

export class UserDto {
  static FromDomainToPresentation(user: User): GetAllUsersResponse {
    const { name, email, role, avatar, refreshToken } = user;
    return new GetAllUsersResponse(name, email, role, avatar, refreshToken);
  }
}
