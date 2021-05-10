import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day24RouteGuards2RoutingModule } from './day24-route-guards2-routing.module';
import {Day24RouteGuards2Component} from "./components/day24-route-guards2.component";
import {ExampleComponent} from "./components/example.component";
import { HttpClientModule} from "@angular/common/http";
import { Example2Component } from './components/example2.component';
import {ExampleGuard} from "./example.guard";
import {UserResolver} from "./user.resolver";



@NgModule({
  declarations: [
    Day24RouteGuards2Component,
    ExampleComponent,
    Example2Component
  ],
  exports: [
    Day24RouteGuards2Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Day24RouteGuards2RoutingModule
  ],
  providers: [ExampleGuard, UserResolver]
})
export class Day24RouteGuards2Module { }
