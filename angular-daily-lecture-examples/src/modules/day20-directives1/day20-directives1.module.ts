import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "./shared/shared.module";
import {Day20Directives1Component} from "./day20-directives1.component";


@NgModule({
  declarations: [
    Day20Directives1Component
  ],
  exports: [
    Day20Directives1Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class Day20Directives1Module { }
