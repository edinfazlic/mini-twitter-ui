import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserOverviewModel } from '../../models/user-overview.model';
import { OverviewService } from '../../services/overview/overview.service';
import { ToggleLoading } from '../../store/fetch.action';
import { FetchUserHighlight } from './overview.action';


export class OverviewStateModel {
  userOverview: UserOverviewModel;
}

@State<OverviewStateModel>({
  name: 'overview',
  defaults: {
    userOverview: {} as UserOverviewModel,
  },
})

export class OverviewState {

  @Selector()
  static getUserHighlights(state: OverviewStateModel): UserOverviewModel {
    return state.userOverview;
  }

  constructor(
    private overviewService: OverviewService,
    private store: Store,
  ) {
  }

  @Action(FetchUserHighlight)
  fetchUserHighlight(context: StateContext<OverviewStateModel>, action: FetchUserHighlight): void {
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
}
