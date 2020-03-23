import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Route } from '../../../models/routes.enum';
import { TweetModel } from '../../../models/tweet.model';
import { UserOverviewModel } from '../../../models/user-overview.model';
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
  @Select(OverviewState.getUserHighlights) $userOverview: Observable<UserOverviewModel>;

  private pathUsername: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.pathUsername = params[Route.PARAM_USERNAME];
      this.store.dispatch(new FetchTweetsForUser(this.pathUsername));
      this.store.dispatch(new FetchUserHighlight(this.pathUsername));
    });
  }
}
