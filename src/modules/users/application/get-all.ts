import { User } from "../domain/user";
import UserRepository from "../domain/user.repository";

export class GetAllUsersUseCase {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
