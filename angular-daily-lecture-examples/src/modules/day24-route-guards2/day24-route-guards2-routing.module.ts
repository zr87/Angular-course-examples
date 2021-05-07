import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExampleComponent} from "./components/example.component";

const routes: Routes = [
  {
    path: 'admin', component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Day24RouteGuards2RoutingModule { }
