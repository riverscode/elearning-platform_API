// ✅ DOMAIN
import { UserInsertException } from "./exceptions/user-insert.exception";
import { User, UserCreationData } from "./user";

export class UserFactory {
  static readonly patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  static create(data: UserCreationData): User {
    if (!data.name)  throw new UserInsertException("Name is required");
    if (!data.email) throw new UserInsertException("Email is required");
    if (!data.password) throw new UserInsertException("Password is required");
    if (!data.role) throw new UserInsertException("Role is required");

    if (data.name.length < 3) throw new UserInsertException("Name must have at least 3 characters");
    if (data.email && !this.patternEmail.test(data.email)) throw new UserInsertException("Invalid email");
    if (data.password.length < 6) throw new UserInsertException("Password must have at least 6 characters");
    if(!["admin", "student"].includes(data.role)) throw new UserInsertException("Role must be admin or user")

    return new User(data);
  }
}
