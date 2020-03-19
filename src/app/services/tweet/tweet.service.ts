import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from '../../configs/api-config';
import { TweetModel } from '../../models/tweet.model';

const URL = `${ApiConfig.API_URL}/tweets`;

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(URL);
  }

  fetchForUser(username: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(URL + '/' + username);
  }

  create(tweetContent: string): Observable<TweetModel> {
    return this.http.post<TweetModel>(URL, tweetContent);
  }
}
