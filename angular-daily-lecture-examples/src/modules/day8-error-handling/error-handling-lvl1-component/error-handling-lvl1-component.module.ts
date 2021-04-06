import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "./data.service";
import { Day8ErrorHandlingComponent } from './day8-error-handling.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    Day8ErrorHandlingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [Day8ErrorHandlingComponent],
  providers: [DataService]
})
export class ErrorHandlingLvl1ComponentModule { }
