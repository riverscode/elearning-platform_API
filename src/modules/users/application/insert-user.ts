// ✅ DOMAIN
import { User } from "../domain/user";
import UserRepository from "../domain/user.repository";

// ✅ APPLICATION
import { CipherService } from "./services/cipher.service";

export class InsertUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User> {
    user.password = await CipherService.hash(user.password);
    const newUser: User = await this.userRepository.insert(user);
    return newUser;
  }
}
