import * as bcrypt from "bcryptjs";

export class CipherService {
  static hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  static compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
