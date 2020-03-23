import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FollowUser } from '../overview.action';
import { OverviewState } from '../overview.state';

@Component({
  selector: 'app-follow-action-box',
  templateUrl: './follow-action-box.component.html',
  styleUrls: ['./follow-action-box.component.css']
})
export class FollowActionBoxComponent {

  @Input() follower: boolean;
  @Input() following: boolean;

  @Select(OverviewState.getOverviewUser) targetUser: string;

  constructor(
    private store: Store,
  ) {
  }

  getButtonLabel(): string {
    return this.follower ? 'Follow back' : 'Follow';
  }

  getFollowingInfoLabel(): string {
    return this.follower ? 'You follow each other' : 'Following';
  }

  follow(): void {
    this.store.dispatch(new FollowUser());
  }
}
