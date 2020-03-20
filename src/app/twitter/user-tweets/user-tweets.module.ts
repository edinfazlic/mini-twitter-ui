import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateTweetModule } from '../create-tweet/create-tweet.module';
import { UserOverviewModule } from '../user-overview/user-overview.module';
import { UserTweetsContainerComponent } from './user-tweets-container/user-tweets-container.component';
import { UserTweetsTableComponent } from './user-tweets-table/user-tweets-table.component';
import { UserTweetsViewComponent } from './user-tweets-view/user-tweets-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: UserTweetsContainerComponent, children: [
          {path: '', component: UserTweetsViewComponent},
        ],
      },
    ]),
    CommonModule,
    CreateTweetModule,
    UserOverviewModule,
  ],
  declarations: [
    UserTweetsContainerComponent,
    UserTweetsViewComponent,
    UserTweetsTableComponent,
  ],
})
export class UserTweetsModule {
}
