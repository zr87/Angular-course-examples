import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminGuard} from "../admin.guard";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {AdminSettingComponent} from "./components/admin-setting.component";
import {AdminMainComponent} from "./components/admin-main.component";

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'settings', component: AdminSettingComponent},
      { path: 'main', component: AdminMainComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
