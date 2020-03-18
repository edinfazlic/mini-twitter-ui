import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TweetService } from '../../../services/tweet/tweet.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css'],
})
export class CreateTweetComponent {
  tweetSavedStatus = {fail: false, success: false};

  constructor(private tweetService: TweetService, private cd: ChangeDetectorRef) {
  }

  isSubmitButtonDisabled(form: NgForm): boolean {
    return form.invalid || form.submitted;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.tweetService.create(form.value.tweetContent).subscribe(
        () => {
          this.handleTweetSave(form, {fail: false, success: true});
        },
        () => {
          this.handleTweetSave(form, {fail: true, success: false});
        }
      );
    }
  }

  onTweetContentFocus() {
    this.tweetSavedStatus = {fail: false, success: false};
  }

  private handleTweetSave(form: NgForm, tweetSavedStatus: any) {
    this.tweetSavedStatus = tweetSavedStatus;
    form.resetForm();
    this.cd.detectChanges();
  }

}
