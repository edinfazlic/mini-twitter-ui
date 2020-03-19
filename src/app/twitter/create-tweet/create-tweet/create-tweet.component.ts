import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { TweetSaveStatusModel } from '../../../models/tweet-save-status.model';
import { ClearTweetSavedStatus, CreateTweet } from '../../tweet.action';
import { TweetState } from '../../tweet.state';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css'],
})
export class CreateTweetComponent {

  @Select(TweetState.getTweetSaveStatus) $tweetSaveStatus: Observable<TweetSaveStatusModel>;

  @ViewChild('f') formElement: NgForm;

  constructor(private store: Store) {
    this.$tweetSaveStatus.subscribe(this.onTweetSaveStatusChange);
  }

  isSubmitButtonDisabled(form: NgForm): boolean {
    return form.invalid || form.submitted;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(new CreateTweet(form.value.tweetContent));
    }
  }

  onTweetContentFocus() {
    this.store.dispatch(new ClearTweetSavedStatus());
  }

  private onTweetSaveStatusChange = (tweetSaveStatus: TweetSaveStatusModel) => {
    if (!tweetSaveStatus) {
      return;
    }
    if (this.formElement) {
      this.formElement.resetForm();
    }
  }

}
