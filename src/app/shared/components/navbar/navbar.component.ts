import { Component } from '@angular/core';
import { Route } from '../../../models/routes.enum';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent {

  Route = Route;

  constructor(private authService: AuthService) {
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }
}
