import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Day6ServiceModule} from "../modules/day6-service/day6-service.module";
import {Day7HttpClientModule} from "../modules/day7-http-client/day7-http-client.module";

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
import {Day5BasicsComponent} from "../modules/day5-basics/day5-basics.component";
import {Day5BasicsModule} from "../modules/day5-basics/day5-basics.module";
import {Day19AdvancedComps2Module} from "../modules/day19-advanced-comps2/day19-advanced-comps2.module";
import {Day20Directives1Module} from "../modules/day20-directives1/day20-directives1.module";
import {SharedModule} from "../modules/day20-directives1/shared/shared.module";
import {Day21Directives2Module} from "../modules/day21-directives2/day21-directives2.module";
import {Day22RoutingModule} from "../modules/day22-lazy-loading/day22-routing.module";
import {Day22LazyLoadingModule} from "../modules/day22-lazy-loading/day22-lazy-loading.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Day5BasicsModule, // ngIf else, ngStyle, ngClass, tempalte #ref
    // Day6ServiceModule,
    // Day7HttpClientModule, // day7 Httpclient

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

    // Day18AdvancedComps1Module, // Content projection
    // Day19AdvancedComps2Module, // ElementRef
    // Day20Directives1Module, // Directives I.
    // Day21Directives2Module, // Directives II.
    Day22LazyLoadingModule, // Lazy Loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
