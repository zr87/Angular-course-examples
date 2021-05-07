import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day24RouteGuards2RoutingModule } from './day24-route-guards2-routing.module';
import {Day24RouteGuards2Component} from "./components/day24-route-guards2.component";
import {ExampleComponent} from "./components/example.component";



@NgModule({
  declarations: [
    Day24RouteGuards2Component,
    ExampleComponent
  ],
  exports: [
    Day24RouteGuards2Component
  ],
  imports: [
    CommonModule,
    Day24RouteGuards2RoutingModule
  ]
})
export class Day24RouteGuards2Module { }
