import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-overview-box',
  templateUrl: './user-overview-box.component.html',
  styleUrls: ['./user-overview-box.component.css']
})
export class UserOverviewBoxComponent {

  @Input() key: number;
  @Input() label: string;

}
