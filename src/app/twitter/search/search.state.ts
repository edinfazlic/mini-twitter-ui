import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FormattedUserModel } from '../../models/formatted-user.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { ToggleLoading } from '../../store/fetch.action';
import { SearchUsers } from './search.action';


export class SearchStateModel {
  searchString: string;
  users: UserModel[];
}

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    searchString: '',
    users: [],
  },
})

export class SearchState {

  @Selector()
  static getUsers(state: SearchStateModel): UserModel[] {
    return state.users;
  }

  @Selector()
  static getSearchString(state: SearchStateModel): string {
    return state.searchString;
  }

  constructor(
    private userService: UserService,
    private store: Store,
  ) {
  }

  @Action(SearchUsers)
  fetchForUser(context: StateContext<SearchStateModel>, action: SearchUsers): void {
    context.patchState({
      searchString: action.payload,
    });
    this.store.dispatch(new ToggleLoading(true));

    this.userService.searchUsers(action.payload).pipe(
      tap((result: FormattedUserModel[]) => {
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
