export interface UserModel {
  id: string;
  username: string;
  firstName: string;
  lastName: string;

  getFormattedName(): string;
}
