import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '../models/routes.enum';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: Route.APP, component: MainComponent,
    children: [
      {path: '', redirectTo: Route.TWEETS, pathMatch: 'full'},
      {path: Route.TWEETS, loadChildren: 'app/twitter/tweets/tweets.module#TweetsModule'},
      {path: Route.SEARCH, loadChildren: 'app/twitter/search/search.module#SearchModule'},
      {path: `${Route.TWEETS}/:${Route.PARAM_USERNAME}`, loadChildren: 'app/twitter/user-tweets/user-tweets.module#UserTweetsModule'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitterRoutingModule {
}
