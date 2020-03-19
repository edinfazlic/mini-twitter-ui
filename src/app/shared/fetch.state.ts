import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToggleLoading } from './fetch.action';


export class FetchStateModel {
  loadingCounter: number;
}

@State<FetchStateModel>({
  name: 'fetch',
  defaults: {
    loadingCounter: 0,
  },
})

export class FetchState {

  @Selector()
  static isLoading(state: FetchStateModel): boolean {
    return state.loadingCounter > 0;
  }

  @Action(ToggleLoading)
  toggleLoading(context: StateContext<FetchStateModel>, action: ToggleLoading): void {
    const state = context.getState();
    context.patchState({
      loadingCounter: action.payload === true ? state.loadingCounter + 1 : (state.loadingCounter > 1 ? state.loadingCounter - 1 : 0),
    });
  }
}
