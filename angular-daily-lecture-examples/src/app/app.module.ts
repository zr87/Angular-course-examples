import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ErrorHandlingLvl1ComponentModule} from "../modules/day8-error-handling/error-handling-lvl1-component/error-handling-lvl1-component.module";
// tslint:disable-next-line:max-line-length
import {ErrorHandlingLvl2ServiceModule} from "../modules/day8-error-handling/error-handling-lvl2-service/error-handling-lvl2-service.module";
import {ErrorHandlingLvl3GlobalModule} from "../modules/day8-error-handling/error-handling-lvl3-global/error-handling-lvl3-global.module";
import {Day9RoutingDemoModule} from "../modules/day9-routing-1/day9-routing-demo.module";
import {Day10RoutingDemoModule} from "../modules/day10-routing-2/day10-routing-demo.module";
import {Day11RoutingDemoModule} from "../modules/day11-routing-3/day11-routing-demo.module";
import {Day12Forms1Module} from "../modules/day12-forms-1/day12-forms-1.module";
import {Day14ReactiveForms1Module} from "../modules/day14-reactive-forms1/day14-reactive-forms-1.module";
import {Day15ReactiveForms2Module} from "../modules/day15-reactive-forms2/day15-reactive-forms-2.module";
import {Day16ReactiveForms3Module} from "../modules/day16-reactive-forms3/day16-reactive-forms-3.module";
import {Day17ReactiveForms4Module} from "../modules/day17-reactive-forms4/day17-reactive-forms4.module";
import {Day18AdvancedComps1Module} from "../modules/day18-advanced-comps1/day18-advanced-comps1.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ErrorHandlingLvl1ComponentModule, // day8
    // ErrorHandlingLvl2ServiceModule, // day8
    // ErrorHandlingLvl3GlobalModule // day8

    // Day9RoutingDemoModule // day9 Routing part1
    // Day10RoutingDemoModule // day9 Routing part2
    // Day11RoutingDemoModule // day9 Routing part3
    // Day12Forms1Module // day12 Forms part1
    // day13: checkout branch day13_rxjs-switchmap-example

    // Day14ReactiveForms1Module
    // Day15ReactiveForms2Module // Custom Validations
    // Day16ReactiveForms3Module, // setValue, valueChanges, .disable()/.enable(), .reset()
    // Day17ReactiveForms4Module // FormArray

    Day18AdvancedComps1Module // Content projection
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
