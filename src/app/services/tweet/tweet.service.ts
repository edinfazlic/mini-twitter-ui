import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TweetModel } from '../../models/tweet.model';

const ENDPOINT_BASE = '/api/tweets';

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE);
  }

  fetchForUser(username: string) {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE + '/' + username);
  }

  create(tweetContent: string) {
    return this.http.post<TweetModel>(ENDPOINT_BASE, tweetContent);
  }
}
