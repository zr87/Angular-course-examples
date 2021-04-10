import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Day10RoutingDemoComponent} from "./day10-routing-demo.component";
import { Page1ChildComponent } from './page1-child/page1-child.component';



@NgModule({
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
    NotFoundComponent,
    Day10RoutingDemoComponent,
    Page1ChildComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    Day10RoutingDemoComponent
  ]
})
export class Day10RoutingDemoModule { }
