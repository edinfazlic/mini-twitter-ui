import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserOverviewModel } from '../../models/user-overview.model';
import { OverviewService } from '../../services/overview/overview.service';
import { UserService } from '../../services/user/user.service';
import { ToggleLoading } from '../../store/fetch.action';
import { FollowUser, SetOverviewUser } from './overview.action';


export class OverviewStateModel {
  userOverview: UserOverviewModel;
  targetUser: string;
}

@State<OverviewStateModel>({
  name: 'overview',
  defaults: {
    userOverview: {} as UserOverviewModel,
    targetUser: '',
  },
})

export class OverviewState {

  @Selector()
  static getUserHighlights(state: OverviewStateModel): UserOverviewModel {
    return state.userOverview;
  }

  @Selector()
  static getOverviewUser(state: OverviewStateModel): string {
    return state.targetUser;
  }

  constructor(
    private overviewService: OverviewService,
    private userService: UserService,
    private store: Store,
  ) {
  }

  @Action(SetOverviewUser)
  setOverviewUser(context: StateContext<OverviewStateModel>, action: SetOverviewUser): void {
    context.patchState({
      targetUser: action.payload,
    });
    this.store.dispatch(new ToggleLoading(true));

    this.overviewService.fetchForUser(action.payload).pipe(
      tap((result: UserOverviewModel) => {
        context.patchState({
          userOverview: result,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }

  @Action(FollowUser)
  followUser(context: StateContext<OverviewStateModel>, action: FollowUser): void {
    const username = context.getState().targetUser;

    this.store.dispatch(new ToggleLoading(true));

    this.userService.followUser(username).pipe(
      tap(() => {
        this.store.dispatch(new SetOverviewUser(username)); // todo: should be fetch overview-> split setoverview
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }
}
