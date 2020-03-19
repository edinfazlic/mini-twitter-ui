import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserModel } from '../../models/login-user.model';
import { Route } from '../../models/routes.enum';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  selector: 'app-login',
})

export class LoginComponent {
  model: LoginUserModel = {username: '', password: ''};
  loading = false;
  incorrectCredentialsError = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.login();
    }
  }

  login(): void {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password);
    this.router.navigate([`/${Route.APP}/${Route.TWEETS}`]);
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
