import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {Day15ReactiveForms2Component} from "./day15-reactive-forms-2.component";
import {ValidatorService} from "./validator.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    Day15ReactiveForms2Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule // 1. import the right module
  ],
  providers: [
    ValidatorService
  ],
  exports: [
    Day15ReactiveForms2Component
  ]
})
export class Day15ReactiveForms2Module { }
