import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { OverviewService } from '../../services/overview/overview.service';
import { UserService } from '../../services/user/user.service';
import { FollowActionBoxComponent } from './follow-action-box/follow-action-box.component';
import { OverviewState } from './overview.state';
import { UserOverviewBoxComponent } from './user-overview-box/user-overview-box.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      OverviewState,
    ]),
  ],
  declarations: [
    UserOverviewComponent,
    UserOverviewBoxComponent,
    FollowActionBoxComponent,
  ],
  providers: [
    OverviewService,
    UserService,
  ],
  exports: [UserOverviewComponent]
})
export class UserOverviewModule {
}
