import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AuthUserModel } from '../../models/auth-user.model';
import { Route } from '../../models/routes.enum';
import { Register } from '../auth.action';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  selector: 'app-signup',
})

export class SignupComponent {
  model: AuthUserModel = {} as AuthUserModel;

  confirmPassword: string;

  Route = Route;

  constructor(private store: Store) {
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.register();
    }
  }

  register(): void {
    this.store.dispatch(new Register(this.model));
  }

  isFormSubmittedWithInvalidName(loginForm: NgForm, name: string): boolean {
    const nameFormControl = loginForm.form.controls[name];
    return loginForm.submitted && nameFormControl && !nameFormControl.valid;
  }

  isFormSubmittedWithInvalidPassword(loginForm: NgForm): boolean {
    const passwordFormControl = loginForm.form.controls['password'];
    return loginForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }

  isFormSubmittedWithInvalidConfirmPassword(loginForm: NgForm): boolean {
    const confirmPasswordFormControl = loginForm.form.controls['confirmPassword'];
    if (!loginForm.submitted || !confirmPasswordFormControl) {
      return false;
    }
    const passwordFormControl = loginForm.form.controls['password'];
    return !confirmPasswordFormControl.valid || passwordFormControl && passwordFormControl.value !== confirmPasswordFormControl.value;
  }
}
