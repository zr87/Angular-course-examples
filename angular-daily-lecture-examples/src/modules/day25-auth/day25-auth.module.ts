import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day25AuthRoutingModule } from './day25-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { Day25AuthComponent } from './day25-auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    LoginComponent,
    Day25AuthComponent
  ],
  exports: [
    Day25AuthComponent
  ],
  imports: [
    CommonModule,
    Day25AuthRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class Day25AuthModule { }
