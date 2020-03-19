import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { TweetModel } from '../models/tweet.model';
import { TweetService } from '../services/tweet/tweet.service';
import { ToggleLoading } from '../shared/fetch.action';
import { FetchTweetsForUser } from './tweet.action';


export class TweetStateModel {
  userTweets: TweetModel[];
}

@State<TweetStateModel>({
  name: 'tweet',
  defaults: {
    userTweets: [],
  },
})

export class TweetState {

  @Selector()
  static getUserTweets(state: TweetStateModel): TweetModel[] {
    return state.userTweets;
  }

  constructor(
    private tweetService: TweetService,
    private store: Store,
  ) {
  }

  @Action(FetchTweetsForUser)
  fetch(context: StateContext<TweetStateModel>, action: FetchTweetsForUser): void {
    this.store.dispatch(new ToggleLoading(true));

    this.tweetService.fetchForUser(action.payload).pipe(
      tap((result: TweetModel[]) => {
        context.patchState({
          userTweets: result,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }
}
