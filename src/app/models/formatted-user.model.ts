import { UserModel } from './user.model';

export class FormattedUserModel implements UserModel {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  private readonly formattedName: string;

  constructor(user: UserModel) {
    this.id = user.id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.formattedName = this.firstName + (this.lastName ? ' ' + this.lastName : '') + ' (' + this.username + ')';
  }

  getFormattedName = (): string => {
    return this.formattedName;
  }
}
