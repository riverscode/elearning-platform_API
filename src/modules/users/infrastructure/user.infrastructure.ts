// ✅ DOMAIN
import { User } from "../domain/user";
import UserRepository from "../domain/user.repository";

// ✅ INFRASTRUCTURE
import UserModel from "./user.entity";

export class UserInfrastructure implements UserRepository {
  async insert(user: User) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  async getAll() {
    const users = await UserModel.find();
    return users;
  }

  async getCoursesByUser(userId: string) {
    const courses = await UserModel.findById(userId).populate({
      path: "courses",
      select: "name slug students image",
      match: {
        published: { $eq: true },
      },
      populate: {
        path: "instructor",
      },
    });

    return courses;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({ email }).select("name email password role");

    if (!user) throw new Error("User not found");
    return user[0];
  }
}
