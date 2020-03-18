import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TweetModel } from '../../../models/tweet.model';
import { TweetService } from '../../../services/tweet/tweet.service';

@Component({
  selector: 'app-tweets-view',
  templateUrl: './tweets-view.component.html',
  styleUrls: ['./tweets-view.component.css']
})
export class TweetsViewComponent implements OnInit {

  $tweets: Observable<TweetModel[]>;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.$tweets = this.tweetService.fetch();
  }

}
