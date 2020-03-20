import { AuthUserModel } from '../models/auth-user.model';
import { LoginUserModel } from '../models/login-user.model';

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public payload: LoginUserModel) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class Register {
  static readonly type = '[Auth] Register';

  constructor(public payload: AuthUserModel) {
  }
}
