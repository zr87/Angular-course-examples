import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {Day16ReactiveForms3Component} from "./day16-reactive-forms-3.component";


@NgModule({
  declarations: [
    Day16ReactiveForms3Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // 1. import the right module
  ],
  exports: [
    Day16ReactiveForms3Component
  ]
})
export class Day16ReactiveForms3Module { }
