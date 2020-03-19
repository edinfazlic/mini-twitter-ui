import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LoginUserModel } from '../models/login-user.model';
import { Route } from '../models/routes.enum';
import { Login, Logout } from './auth.action';


export class AuthStateModel {
  token: string;
  username: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null,
  },
})

export class AuthState {

  @Selector()
  static getAuthToken(state: AuthStateModel): string {
    return state.token;
  }

  @Selector()
  static getCurrentUser(state: AuthStateModel): string {
    return state.username;
  }

  constructor(private router: Router) {
  }

  @Action(Login)
  login(context: StateContext<AuthStateModel>, action: Login): void {
    const authToken = this.generateAuthToken(action.payload);
    context.patchState({
      token: authToken,
      username: action.payload.username,
    });

    this.router.navigate([`/${Route.APP}/${Route.TWEETS}`]);
  }

  @Action(Logout)
  logout(context: StateContext<AuthStateModel>, action: Logout): void {
    context.patchState({
      token: null,
      username: null,
    });

    this.router.navigate([`/${Route.LOGIN}`]);
  }

  private generateAuthToken(userModel: LoginUserModel): string {
    return btoa(userModel.username + ':' + userModel.password);
  }
}
