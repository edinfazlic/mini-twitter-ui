import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Route } from '../models/routes.enum';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.getCurrentUser()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate([`/${Route.LOGIN}`]);
    return false;
  }
}
