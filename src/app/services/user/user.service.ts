import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from '../../configs/api-config';
import { UserModel } from '../../models/user.model';

const URL = `${ApiConfig.API_URL}/user`;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  searchUsers(searchString: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(URL, {
      params: {
        searchString
      }
    });
  }
}
