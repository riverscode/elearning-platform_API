export interface UserEssentialData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserOptionalData {
  avatar: string;
  googleId: string;
  courses: string[];
  workshops: string[];
  specializations: string[];
  certificates: string[];
  passwordResetCode: string;
  refreshToken: string;
}

export type UserCreationData = UserEssentialData & Partial<UserOptionalData>;

export class User {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string | undefined;
  googleId: string | undefined;
  courses: string[] | undefined;
  workshops: string[] | undefined;
  specializations: string[] | undefined;
  certificates: string[] | undefined;
  passwordResetCode: string | undefined;
  refreshToken: string | undefined;

  constructor(data: UserCreationData) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.role = data.role;
    this.avatar = data.avatar;
    this.googleId = data.googleId;
    this.courses = data.courses;
    this.workshops = data.workshops;
    this.specializations = data.specializations;
    this.certificates = data.certificates;
    this.passwordResetCode = data.passwordResetCode;
    this.refreshToken = data.refreshToken;
  }
}
