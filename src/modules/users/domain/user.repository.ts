import { Course } from "../../courses/domain/course";
import { User } from "./user";

export default interface UserRepository {
  insert(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  getCoursesByUser(userId: string): Promise<Course[]>;
}
