import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day22LazyLoadingComponent } from './day22-lazy-loading.component';

import {Day22RoutingModule} from "./day22-routing.module";



@NgModule({
  declarations: [
    Day22LazyLoadingComponent
  ],
  exports: [
    Day22LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    Day22RoutingModule,
    // LazyModule //deleted from , brought import to loadChildren
  ]
})
export class Day22LazyLoadingModule { }
