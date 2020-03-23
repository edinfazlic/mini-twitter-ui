import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ApiConfig } from '../../configs/api-config';
import { FormattedUserModel } from '../../models/formatted-user.model';
import { UserModel } from '../../models/user.model';

const URL = `${ApiConfig.API_URL}/user`;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  searchUsers(searchString: string): Observable<FormattedUserModel[]> {
    return this.http.get<UserModel[]>(URL, {
      params: {
        searchString
      }
    }).pipe(
      map((result: UserModel[]) => result.map(usr => new FormattedUserModel(usr)))
    );
  }

  followUser(username: string): Observable<void> {
    return this.http.post<void>(URL + '/follow/' + username, {});
  }

}
