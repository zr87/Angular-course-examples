import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
