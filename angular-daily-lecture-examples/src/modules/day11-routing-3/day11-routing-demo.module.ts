import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Day11RoutingDemoComponent} from "./day11-routing-demo.component";
import {Page1Module} from "./page1/page1.module";


@NgModule({
  declarations: [
    HomeComponent,
    Page2Component,
    NotFoundComponent,
    Day11RoutingDemoComponent,
  ],
  imports: [
    CommonModule,
    Page1Module,
    AppRoutingModule
  ],
  exports: [
    Day11RoutingDemoComponent
  ]
})
export class Day11RoutingDemoModule { }
