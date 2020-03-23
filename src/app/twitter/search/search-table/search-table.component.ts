import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { Route } from '../../../models/routes.enum';
import { UserModel } from '../../../models/user.model';
import { SearchState } from '../search.state';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent {

  @Select(SearchState.getUsers) users$: Observable<UserModel[]>;

  Route = Route;

}
