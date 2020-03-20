import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { AuthState } from '../../../auth/auth.state';
import { Route } from '../../../models/routes.enum';
import { TweetModel } from '../../../models/tweet.model';
import { UserHighlightModel } from '../../../models/user-highlight.model';
import { FetchTweetsForUser } from '../../tweet.action';
import { TweetState } from '../../tweet.state';
import { FetchUserHighlight } from '../../user-overview/overview.action';
import { OverviewState } from '../../user-overview/overview.state';

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {

  @Select(TweetState.getUserTweets) $tweets: Observable<TweetModel[]>;
  @Select(AuthState.getCurrentUser) $currentUser: Observable<string>;
  @Select(OverviewState.getUserHighlights) $highlights: Observable<UserHighlightModel[]>;

  private pathUsername: string;
  private stateUser: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.$currentUser.subscribe((user: string) => this.stateUser = user);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.pathUsername = params[Route.PARAM_USERNAME];
      this.store.dispatch(new FetchTweetsForUser(this.pathUsername));
      if (this.isIAmUser()) {
        this.store.dispatch(new FetchUserHighlight(this.pathUsername));
      }
    });
  }

  isIAmUser(): boolean {
    return this.pathUsername === this.stateUser;
  }
}
