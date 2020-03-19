import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Route } from '../../../models/routes.enum';
import { AuthService } from '../../../services/auth.service';
import { FetchState } from '../../fetch.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent {

  Route = Route;

  @Select(FetchState.isLoading) $loading: Observable<boolean>;

  constructor(private authService: AuthService) {
  }

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }
}
