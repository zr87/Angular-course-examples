import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day18AdvancedComps1Component } from './day18-advanced-comps1/day18-advanced-comps1.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';



@NgModule({
  declarations: [
    Day18AdvancedComps1Component,
    FormComponent,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Day18AdvancedComps1Component
  ]
})
export class Day18AdvancedComps1Module { }
