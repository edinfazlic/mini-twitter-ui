import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { FormattedUserModel } from '../models/formatted-user.model';
import { TweetSaveStatusModel } from '../models/tweet-save-status.model';
import { TweetModel } from '../models/tweet.model';
import { TweetService } from '../services/tweet/tweet.service';
import { ToggleLoading } from '../store/fetch.action';
import { ClearTweetSavedStatus, CreateTweet, FetchAllTweets, FetchTweetsForUser } from './tweet.action';


export class TweetStateModel {
  userTweets: TweetModel[];
  allTweets: TweetModel[];
  tweetSaveStatus: TweetSaveStatusModel;
}

@State<TweetStateModel>({
  name: 'tweet',
  defaults: {
    userTweets: [],
    allTweets: [],
    tweetSaveStatus: {fail: false, success: false},
  },
})

export class TweetState {

  @Selector()
  static getUserTweets(state: TweetStateModel): TweetModel[] {
    return state.userTweets;
  }

  @Selector()
  static getAllTweets(state: TweetStateModel): TweetModel[] {
    return state.allTweets;
  }

  @Selector()
  static getTweetSaveStatus(state: TweetStateModel): TweetSaveStatusModel {
    return state.tweetSaveStatus;
  }

  constructor(
    private tweetService: TweetService,
    private store: Store,
  ) {
  }

  private static formatUser(tweet: TweetModel): void {
    tweet.author = new FormattedUserModel(tweet.author);
  }

  @Action(FetchTweetsForUser)
  fetchForUser(context: StateContext<TweetStateModel>, action: FetchTweetsForUser): void {
    this.store.dispatch(new ToggleLoading(true));

    this.tweetService.fetchForUser(action.payload).pipe(
      tap((result: TweetModel[]) => {
        result.forEach(TweetState.formatUser);
        context.patchState({
          userTweets: result,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }

  @Action(FetchAllTweets)
  fetchAll(context: StateContext<TweetStateModel>, action: FetchAllTweets): void {
    this.store.dispatch(new ToggleLoading(true));

    this.tweetService.fetch().pipe(
      tap((result: TweetModel[]) => {
        result.forEach(TweetState.formatUser);
        context.patchState({
          allTweets: result,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }

  @Action(CreateTweet)
  createTweet(context: StateContext<TweetStateModel>, action: CreateTweet): void {
    this.store.dispatch(new ToggleLoading(true));

    this.tweetService.create(action.payload).pipe(
      tap((result: TweetModel) => {
        context.patchState({
          tweetSaveStatus: {fail: false, success: true},
        });
      }),
      catchError((err) => {
        context.patchState({
          tweetSaveStatus: {fail: true, success: false},
        });
        return of([]);
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }

  @Action(ClearTweetSavedStatus)
  clearTweetSavedStatus(context: StateContext<TweetStateModel>, action: ClearTweetSavedStatus): void {
    context.patchState({
      tweetSaveStatus: {fail: false, success: false},
    });
  }
}
