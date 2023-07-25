import { User } from "./user";

export default interface UserRepository {
  insert(user: User): Promise<User>;
  getAll(): Promise<User[]>;
}
