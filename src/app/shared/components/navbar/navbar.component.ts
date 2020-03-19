import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { AuthState } from '../../../auth/auth.state';
import { Route } from '../../../models/routes.enum';
import { FetchState } from '../../../store/fetch.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  preserveWhitespaces: false,
})
export class NavbarComponent {

  Route = Route;

  @Select(FetchState.isLoading) $loading: Observable<boolean>;
  @Select(AuthState.getCurrentUser) $currentUser: Observable<string>;

  private currentUser: string;

  constructor() {
    this.$currentUser.subscribe((user: string) => this.currentUser = user);
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
