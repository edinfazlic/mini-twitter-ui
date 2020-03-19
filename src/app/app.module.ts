import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthState } from './auth/auth.state';
import { FetchState } from './store/fetch.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([
      FetchState,
    ]),
    NgxsModule.forFeature([
      AuthState,
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
