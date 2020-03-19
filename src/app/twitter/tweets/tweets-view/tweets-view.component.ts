import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { TweetModel } from '../../../models/tweet.model';
import { FetchAllTweets } from '../../tweet.action';
import { TweetState } from '../../tweet.state';

@Component({
  selector: 'app-tweets-view',
  templateUrl: './tweets-view.component.html',
  styleUrls: ['./tweets-view.component.css']
})
export class TweetsViewComponent implements OnInit {

  @Select(TweetState.getAllTweets) $tweets: Observable<TweetModel[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchAllTweets());
  }

}
