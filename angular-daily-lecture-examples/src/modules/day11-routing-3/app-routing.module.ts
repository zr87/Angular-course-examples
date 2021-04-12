import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {Page2Component} from "./page2/page2.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
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

