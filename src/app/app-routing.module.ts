import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Route } from './models/routes.enum';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/twitter/twitter.module#TwitterModule', canActivate: [AuthGuard]
  },
  {
    path: Route.LOGIN,
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
