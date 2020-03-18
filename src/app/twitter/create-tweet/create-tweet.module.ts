import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CreateTweetComponent],
  exports: [CreateTweetComponent]
})
export class CreateTweetModule {
}
