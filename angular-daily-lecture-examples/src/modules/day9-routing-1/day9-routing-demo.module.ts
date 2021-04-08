import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Day9RoutingDemoComponent} from "./day9-routing-demo.component";



@NgModule({
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
    NotFoundComponent,
    Day9RoutingDemoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    Day9RoutingDemoComponent
  ]
})
export class Day9RoutingDemoModule { }
