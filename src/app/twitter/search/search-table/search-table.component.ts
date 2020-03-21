import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { FollowInfoUserModel } from '../../../models/follow-info-user.model';
import { Route } from '../../../models/routes.enum';
import { SearchState } from '../search.state';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent {

  @Select(SearchState.getUsers) users$: Observable<FollowInfoUserModel[]>;

  Route = Route;

}
