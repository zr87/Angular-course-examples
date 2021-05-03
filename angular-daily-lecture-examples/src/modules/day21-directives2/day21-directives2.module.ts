import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Day21Directives2Component} from "./day21-directives2.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    Day21Directives2Component,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Day21Directives2Component,
  ]
})
export class Day21Directives2Module { }
