import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { AuthState } from '../../../auth/auth.state';
import { UserOverviewModel } from '../../../models/user-overview.model';
import { OverviewState } from '../overview.state';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent {

  @Select(OverviewState.getUserHighlights) $userOverview: Observable<UserOverviewModel>;
  @Select(OverviewState.getOverviewUser) $overviewUser: Observable<string>; // joining selectors allowed as of NGXS 3.5
  @Select(AuthState.getCurrentUser) $currentUser: Observable<string>;

}
