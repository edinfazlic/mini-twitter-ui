import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Route } from '../../../models/routes.enum';
import { TweetModel } from '../../../models/tweet.model';
import { TweetService } from '../../../services/tweet/tweet.service';

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {

  $tweets: Observable<TweetModel[]>;
  userName: string;

  constructor(private tweetService: TweetService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params[Route.PARAM_USERNAME];
      this.$tweets = this.tweetService.fetchForUser(this.userName);
    });
  }

}
