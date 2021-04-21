import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {Day15ReactiveForms2Component} from "./day15-reactive-forms-2.component";


@NgModule({
  declarations: [
    Day15ReactiveForms2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // 1. import the right module
  ],
  exports: [
    Day15ReactiveForms2Component
  ]
})
export class Day15ReactiveForms2Module { }
