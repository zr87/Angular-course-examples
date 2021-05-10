import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExampleComponent} from "./components/example.component";
import {ExampleGuard} from "./example.guard";
import {Example2Component} from "./components/example2.component";
import {UserResolver} from "./user.resolver";

const routes: Routes = [
  { // canDeactivate example
    path: 'example',
    canDeactivate: [ExampleGuard],
    component: ExampleComponent
  },
  { // Resolver example
    path: 'example2',
    resolve: {
      users: UserResolver
    },
    component: Example2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Day24RouteGuards2RoutingModule { }
