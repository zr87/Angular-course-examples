import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page1Component} from "./page1.component";
import {Page1ChildComponent} from "./page1-child/page1-child.component";
import {Page1Child2Component} from "./page1-child2/page1-child2.component";
import {RouterModule} from "@angular/router";

const page1Routes = [
  {
    path: "page1",
    children: [
      {path: "", component: Page1Component},
      {path: ":id", component: Page1Component},
      {path: ":id/:name", component: Page1Child2Component},
    ]
  },
];

/*const page1Routes = [
  {path: "page1", component: Page1Component },
  {path: "page1/:id", component: Page1ChildComponent},
  {path: "page1/:id/:name", component: Page1Child2Component}
];*/


@NgModule({
  imports: [
    RouterModule.forChild(page1Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Page1RoutingModule { }
