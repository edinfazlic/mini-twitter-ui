import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Route } from '../models/routes.enum';
import { AuthState } from './auth.state';

@Injectable()
export class AuthGuard implements CanActivate {

  @Select(AuthState.getCurrentUser) $currentUser: Observable<string>;

  private currentUser: string;

  constructor(private router: Router) {
    this.$currentUser.subscribe((user: string) => this.currentUser = user);
  }

  canActivate() {
    if (this.currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate([`/${Route.LOGIN}`]);
    return false;
  }
}
