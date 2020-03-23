import { Component, Input } from '@angular/core';
import { UserOverviewModel } from '../../../models/user-overview.model';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent {

  @Input() userOverview: UserOverviewModel;

}
