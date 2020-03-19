export class FetchTweetsForUser {
  static readonly type = '[Tweets] FetchTweetsForUser';

  constructor(public payload: string) {
  }
}

export class FetchAllTweets {
  static readonly type = '[Tweets] FetchAllTweets';
}

export class CreateTweet {
  static readonly type = '[Tweets] CreateTweet';

  constructor(public payload: string) {
  }
}

export class ClearTweetSavedStatus {
  static readonly type = '[Tweets] ClearTweetSavedStatus';
}
