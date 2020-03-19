import { LoginUserModel } from '../models/login-user.model';

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public payload: LoginUserModel) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
