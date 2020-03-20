import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from '../../configs/api-config';
import { UserOverviewModel } from '../../models/user-overview.mode';

const URL = `${ApiConfig.API_URL}/overview`;

@Injectable()
export class OverviewService {

  constructor(private http: HttpClient) {
  }

  fetchForUser(username: string): Observable<UserOverviewModel> {
    return this.http.get<UserOverviewModel>(URL + '/' + username);
  }
}
