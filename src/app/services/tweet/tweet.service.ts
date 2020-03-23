import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { ApiConfig } from '../../configs/api-config';
import { FormattedUserModel } from '../../models/formatted-user.model';
import { TweetModel } from '../../models/tweet.model';

const URL = `${ApiConfig.API_URL}/tweet`;

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  private static formatUser(tweet: TweetModel): void {
    tweet.author = new FormattedUserModel(tweet.author);
  }

  fetch(): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(URL).pipe(
      tap((result: TweetModel[]) => {
        result.forEach(TweetService.formatUser);
      })
    );
  }

  fetchForUser(username: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(URL + '/' + username).pipe(
      tap((result: TweetModel[]) => {
        result.forEach(TweetService.formatUser);
      })
    );
  }

  create(tweetContent: string): Observable<TweetModel> {
    return this.http.post<TweetModel>(URL, tweetContent);
  }
}
