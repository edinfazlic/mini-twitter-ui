import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { UserService } from '../../services/user/user.service';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchState } from './search.state';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: SearchContainerComponent, children: [
          {path: '', component: SearchUsersComponent},
        ],
      },
    ]),
    NgxsModule.forFeature([
      SearchState,
    ]),
    FormsModule,
    CommonModule,
  ],
  declarations: [
    SearchComponent,
    SearchContainerComponent,
    SearchUsersComponent,
    SearchTableComponent,
  ],
  providers: [
    UserService,
  ],
})
export class SearchModule {
}
