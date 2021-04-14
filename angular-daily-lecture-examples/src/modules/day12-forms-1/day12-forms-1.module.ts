import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day12Forms1Component } from './day12-forms1.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Day12Forms1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Day12Forms1Component
  ]
})
export class Day12Forms1Module { }
