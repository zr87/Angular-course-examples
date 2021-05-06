import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day23RouteGuardsRoutingModule } from './day23-route-guards-routing.module';
import { Day23RouteGuardsComponent } from './day23-route-guards.component';
import {AdminGuard} from "./admin.guard";


@NgModule({
  declarations: [
    Day23RouteGuardsComponent,
  ],
  exports: [
    Day23RouteGuardsComponent
  ],
  imports: [
    CommonModule,
    Day23RouteGuardsRoutingModule
  ],
  providers: [
    AdminGuard
  ]
})
export class Day23RouteGuardsModule { }
