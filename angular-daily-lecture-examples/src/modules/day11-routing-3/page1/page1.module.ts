import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page1Component} from "./page1.component";
import {Page1ChildComponent} from "./page1-child/page1-child.component";
import {Page1Child2Component} from "./page1-child2/page1-child2.component";
import { Page1RoutingModule } from './page1-routing.module';



@NgModule({
  declarations: [
    Page1Component,
    Page1ChildComponent,
    Page1Child2Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class Page1Module { }
