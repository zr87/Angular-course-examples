import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogClickDirective} from "./directives/log-click.directive";
import { HostbindingExampleDirective } from './directives/hostbinding-example.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { HunPhoneFormatterDirective } from './directives/hun-phone-formatter.directive';


@NgModule({
  declarations: [
    LogClickDirective,
    HostbindingExampleDirective,
    RainbowDirective,
    HunPhoneFormatterDirective
  ],
  exports: [
    LogClickDirective,
    HostbindingExampleDirective,
    RainbowDirective,
    HunPhoneFormatterDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
