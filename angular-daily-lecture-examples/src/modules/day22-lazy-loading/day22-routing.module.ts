import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LazyComponent} from "./lazy/lazy/lazy.component";

const routes: Routes = [
  { path: 'lazy', component: LazyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class Day22RoutingModule { }
