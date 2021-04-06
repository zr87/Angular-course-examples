import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ErrorHandlingLvl1ComponentModule} from "../modules/day8-error-handling/error-handling-lvl1-component/error-handling-lvl1-component.module";
import {ErrorHandlingLvl2ServiceModule} from "../modules/day8-error-handling/error-handling-lvl2-service/error-handling-lvl2-service.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorHandlingLvl1ComponentModule, // day8
    ErrorHandlingLvl2ServiceModule // day8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
