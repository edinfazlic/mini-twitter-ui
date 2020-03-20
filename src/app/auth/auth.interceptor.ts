import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Route } from '../models/routes.enum';
import { Logout } from './auth.action';
import { AuthState } from './auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  @Select(AuthState.getAuthToken) $authToken: Observable<string>;

  authToken: string;

  constructor(private store: Store) {
    this.$authToken.subscribe((token: string) => this.authToken = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.endsWith('/' + Route.SIGNUP)) {
      req = req.clone({
        setHeaders: {
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': 'Basic ' + this.authToken,
        }
      });
    }
    return next.handle(req).do((event: HttpEvent<any>) => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        this.store.dispatch(new Logout());
      }
    });
  }
}
