export class FetchTweetsForUser {
  static readonly type = '[UsersTweets] FetchTweetsForUser';

  constructor(public payload: string) {
  }
}
