import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TweetService } from '../services/tweet/tweet.service';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TweetState } from './tweet.state';
import { TwitterRoutingModule } from './twitter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TwitterRoutingModule,
    NgxsModule.forFeature([
      TweetState,
    ]),
  ],
  declarations: [
    MainComponent,
  ],
  providers: [TweetService]
})
export class TwitterModule {
}
