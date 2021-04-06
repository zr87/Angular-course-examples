import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "./data.service";
import { Day8ErrorHandlingComponent } from './day8-error-handling.component';
import {HttpClientModule} from "@angular/common/http";
import {ErrorHandlerModule} from "./error-handler.module";



@NgModule({
  declarations: [
    Day8ErrorHandlingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ErrorHandlerModule
  ],
  exports: [Day8ErrorHandlingComponent],
  providers: [DataService]
})
export class ErrorHandlingLvl3GlobalModule { }
