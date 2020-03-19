import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FetchState } from './fetch.state';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxsModule.forRoot([
      FetchState
    ]),
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class SharedModule {
}
