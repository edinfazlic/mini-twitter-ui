import { Component, Input } from '@angular/core';
import { UserHighlightModel } from '../../../models/user-highlight.model';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent {

  @Input()
  highlights: UserHighlightModel[];

}
