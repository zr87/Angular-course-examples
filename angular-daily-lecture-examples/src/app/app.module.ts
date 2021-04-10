import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ErrorHandlingLvl1ComponentModule} from "../modules/day8-error-handling/error-handling-lvl1-component/error-handling-lvl1-component.module";
// tslint:disable-next-line:max-line-length
import {ErrorHandlingLvl2ServiceModule} from "../modules/day8-error-handling/error-handling-lvl2-service/error-handling-lvl2-service.module";
import {ErrorHandlingLvl3GlobalModule} from "../modules/day8-error-handling/error-handling-lvl3-global/error-handling-lvl3-global.module";
import {Day9RoutingDemoModule} from "../modules/day9-routing-1/day9-routing-demo.module";
import {Day10RoutingDemoModule} from "../modules/day10-routing-2/day10-routing-demo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ErrorHandlingLvl1ComponentModule, // day8
    // ErrorHandlingLvl2ServiceModule, // day8
    //  ErrorHandlingLvl3GlobalModule // day8
    // Day9RoutingDemoModule // day9 Routing part1
    Day10RoutingDemoModule // day9 Routing part1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
