import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Page1ChildComponent} from "./page1-child/page1-child.component";
import {Page1Child2Component} from "./page1-child2/page1-child2.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "page1",
    children: [
      {path: "", component: Page1Component},
      {path: ":id", component: Page1ChildComponent},
      {path: ":id/:name", component: Page1Child2Component},
    ]
  },
  {path: "page2", component: Page2Component},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "404"},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

