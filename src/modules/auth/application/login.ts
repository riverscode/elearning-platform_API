import UserRepository from "../../users/domain/user.repository";

export class LoginUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
  }
}
