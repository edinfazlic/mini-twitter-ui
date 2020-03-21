import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { FetchState } from '../../../store/fetch.state';
import { SearchUsers } from '../search.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  @Select(FetchState.isLoading) $isLoading: Observable<boolean>;

  constructor(private store: Store) {
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(new SearchUsers(form.value.searchContent));
    }
  }

}
