import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { Day17ReactiveForms4Component } from './day17-reactive-forms4/day17-reactive-forms4.component';
import { SelectDemoComponent } from './select-demo/select-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';



@NgModule({
  declarations: [
    Day17ReactiveForms4Component,
    SelectDemoComponent,
    RadioDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Day17ReactiveForms4Component
  ]
})
export class Day17ReactiveForms4Module { }
