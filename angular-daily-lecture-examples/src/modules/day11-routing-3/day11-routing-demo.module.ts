import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Day11RoutingDemoComponent} from "./day11-routing-demo.component";
import { Page1ChildComponent } from './page1-child/page1-child.component';
import { Page1Child2Component } from './page1-child2/page1-child2.component';



@NgModule({
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
    NotFoundComponent,
    Day11RoutingDemoComponent,
    Page1ChildComponent,
    Page1Child2Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    Day11RoutingDemoComponent
  ]
})
export class Day11RoutingDemoModule { }
