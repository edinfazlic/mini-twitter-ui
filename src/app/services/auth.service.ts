import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from '../configs/api-config';
import { AuthUserModel } from '../models/auth-user.model';
import { UserModel } from '../models/user.model';

const URL = `${ApiConfig.API_URL}`;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: AuthUserModel): Observable<UserModel> {
    return this.http.post<UserModel>(URL + '/signup', user);
  }

}
