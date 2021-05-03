import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogClickDirective} from "./directives/log-click.directive";
import { HostbindingExampleDirective } from './directives/hostbinding-example.directive';


@NgModule({
  declarations: [
    LogClickDirective,
    HostbindingExampleDirective
  ],
  exports: [
    LogClickDirective,
    HostbindingExampleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
