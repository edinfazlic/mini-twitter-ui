import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Logout } from '../../../auth/auth.action';
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

  constructor(private store: Store) {
    this.$currentUser.subscribe((user: string) => this.currentUser = user);
  }

  getCurrentUser(): string {
    return this.currentUser;
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
