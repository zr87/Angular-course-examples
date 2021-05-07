import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import {AdminDashboardComponent} from "./admin-dashboard.component";
import { AdminSettingComponent } from './components/admin-setting.component';
import { AdminMainComponent } from './components/admin-main.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSettingComponent,
    AdminMainComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
