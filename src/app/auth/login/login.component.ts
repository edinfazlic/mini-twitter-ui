import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginUserModel } from '../../models/login-user.model';
import { Login } from '../auth.action';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  selector: 'app-login',
})

export class LoginComponent {
  model: LoginUserModel = {username: '', password: ''};
  incorrectCredentialsError = false; // todo: value is never set

  constructor(private store: Store) {
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.login();
    }
  }

  login(): void {
    this.store.dispatch(new Login(this.model));
  }

  isFormSubmittedWithInvalidUsername(loginForm: NgForm): boolean {
    const usernameFormControl = loginForm.form.controls['username'];
    return loginForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }

  isFormSubmittedWithInvalidPassword(loginForm: NgForm): boolean {
    const passwordFormControl = loginForm.form.controls['password'];
    return loginForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }
}
