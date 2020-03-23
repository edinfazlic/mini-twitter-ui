export class SetOverviewUser {
  static readonly type = '[Overview] FetchUserOverview';

  constructor(public payload: string) {
  }
}

export class FollowUser {
  static readonly type = '[Overview] FollowUser';
}
