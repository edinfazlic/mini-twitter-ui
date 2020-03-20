import { UserModel } from './user.model';

export interface AuthUserModel extends UserModel {
  password: string;
}
