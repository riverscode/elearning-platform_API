export class UserInsertException extends Error {
  status: number = 400;
  constructor(message: string) {
    super(UserInsertException.withMessage(message));
    this.name = "UserInsertException";
  }

  static withMessage(message: string): string {
    return `Error inserting new user: ${message}`;
  }
}
