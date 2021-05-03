import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogClickDirective} from "./directives/log-click.directive";
import { HostbindingExampleDirective } from './directives/hostbinding-example.directive';
import { RainbowDirective } from './directives/rainbow.directive';


@NgModule({
  declarations: [
    LogClickDirective,
    HostbindingExampleDirective,
    RainbowDirective
  ],
  exports: [
    LogClickDirective,
    HostbindingExampleDirective,
    RainbowDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
