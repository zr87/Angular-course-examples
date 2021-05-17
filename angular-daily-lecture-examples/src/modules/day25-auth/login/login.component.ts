import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../auth/auth.interface";

@Component({
  selector: 'app-login',
  template: `
    <h2>
      login!
    </h2>

    <form (submit)="onSubmit()" [formGroup]="loginForm">
      <input type="email" formControlName="email"> <br>
      <input type="password" formControlName="password"> <br>
      <button type="submit"> Login</button>
    </form>
    <p class="error"> {{ errorMsg }}</p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });

  errorMsg: string | undefined | null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorMsg = null;
    console.log("loginForm", this.loginForm.value);

    this.auth
      .login(this.loginForm.value)
      .subscribe(
        (user: User) => {
          console.log("user", user);
          console.log("isLoggedIn", this.auth.isLoggedIn());
        },
        (error: HttpErrorResponse) => {
          console.log("error", error);
          this.errorMsg = error.error;
        });

    this.loginForm.reset();
  }
}
