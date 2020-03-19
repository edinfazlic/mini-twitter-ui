import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Route } from '../../../models/routes.enum';
import { TweetModel } from '../../../models/tweet.model';
import { FetchTweetsForUser } from '../../tweet.action';
import { TweetState } from '../../tweet.state';

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {

  @Select(TweetState.getUserTweets) $tweets: Observable<TweetModel[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userName = params[Route.PARAM_USERNAME];
      this.store.dispatch(new FetchTweetsForUser(userName));
    });
  }

}
