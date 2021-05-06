import {isDevMode, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminGuard} from "./admin.guard";

const routes: Routes = [
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () => (import('./admin-dashboard/admin-dashboard.module').then(module => module.AdminDashboardModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class Day23RouteGuardsRoutingModule {
}
