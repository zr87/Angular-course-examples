import {isDevMode, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: isDevMode() })],
  exports: [RouterModule]
})
export class Day23RouteGuardsRoutingModule {
}
