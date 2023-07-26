import UserRepository from "../domain/user.repository";

export class GetCoursesByUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(userId: string) {
    const courses = await this.userRepository.getCoursesByUser(userId);
    return courses;
  }
}
