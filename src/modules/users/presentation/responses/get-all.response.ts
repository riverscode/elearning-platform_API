export class GetAllUsersResponse {
  name: string;
  email: string;
  role: string;
  avatar: string | undefined;

  constructor(
    name: string,
    email: string,
    role: string,
    avatar: string | undefined
  ) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.avatar = avatar;
  }
}
