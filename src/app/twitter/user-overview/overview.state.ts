import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserHighlightModel } from '../../models/user-highlight.model';
import { UserOverviewModel } from '../../models/user-overview.mode';
import { OverviewService } from '../../services/overview/overview.service';
import { ToggleLoading } from '../../store/fetch.action';
import { FetchUserHighlight } from './overview.action';


export class OverviewStateModel {
  userHighlights: UserHighlightModel[];
}

@State<OverviewStateModel>({
  name: 'overview',
  defaults: {
    userHighlights: [],
  },
})

export class OverviewState {

  @Selector()
  static getUserHighlights(state: OverviewStateModel): UserHighlightModel[] {
    return state.userHighlights;
  }

  constructor(
    private overviewService: OverviewService,
    private store: Store,
  ) {
  }

  private static firstUppercase = (value: string): string => value[0].toUpperCase() + value.slice(1);

  private static objectEntryToHighlight = (highlight: [string, number]): UserHighlightModel => ({
    label: OverviewState.firstUppercase(highlight[0]),
    key: highlight[1]
  })

  @Action(FetchUserHighlight)
  fetchUserHighlight(context: StateContext<OverviewStateModel>, action: FetchUserHighlight): void {
    this.store.dispatch(new ToggleLoading(true));

    this.overviewService.fetchForUser(action.payload).pipe(
      tap((result: UserOverviewModel) => {
        const highlights: UserHighlightModel[] = Object.entries(result).map(OverviewState.objectEntryToHighlight);
        context.patchState({
          userHighlights: highlights,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }
}
