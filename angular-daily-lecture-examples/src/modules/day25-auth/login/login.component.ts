import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

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
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required, Validators.email],
    password: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log("loginForm", this.loginForm.value );
    this.auth.login();
  }
}
