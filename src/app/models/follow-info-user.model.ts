import { UserModel } from './user.model';

export interface FollowInfoUserModel extends UserModel {
  follower: boolean;
  following: boolean;
}
