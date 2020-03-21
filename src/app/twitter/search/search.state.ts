import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FollowInfoUserModel } from '../../models/follow-info-user.model';
import { UserService } from '../../services/user/user.service';
import { ToggleLoading } from '../../store/fetch.action';
import { SearchUsers } from './search.action';


export class SearchStateModel {
  users: FollowInfoUserModel[];
}

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    users: [],
  },
})

export class SearchState {

  @Selector()
  static getUsers(state: SearchStateModel): FollowInfoUserModel[] {
    return state.users;
  }

  constructor(
    private userService: UserService,
    private store: Store,
  ) {
  }

  @Action(SearchUsers)
  fetchForUser(context: StateContext<SearchStateModel>, action: SearchUsers): void {
    this.store.dispatch(new ToggleLoading(true));

    this.userService.searchUsers(action.payload).pipe(
      tap((result: FollowInfoUserModel[]) => {
        context.patchState({
          users: result,
        });
      }),
      tap(() => {
        this.store.dispatch(new ToggleLoading(false));
      }),
    ).subscribe();
  }
}
