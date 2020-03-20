import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { OverviewService } from '../../services/overview/overview.service';
import { OverviewState } from './overview.state';
import { UserOverviewComponent } from './user-overview/user-overview.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      OverviewState,
    ]),
  ],
  declarations: [UserOverviewComponent],
  providers: [OverviewService],
  exports: [UserOverviewComponent]
})
export class UserOverviewModule {
}
