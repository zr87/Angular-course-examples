import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Day14ReactiveForms1Component} from "./day14-reactive-forms-1.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Day14ReactiveForms1Component // <-- rective style form in this comp.
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // 1. import the right module
  ],
  exports: [
    Day14ReactiveForms1Component
  ]
})
export class Day14ReactiveForms1Module { }
