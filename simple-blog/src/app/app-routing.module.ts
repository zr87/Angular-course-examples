import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./posts/blog/blog.component";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";

const mainRoutes: Routes = [
  { path: "", component: BlogComponent},
  { path: "post", component: PostDetailComponent},
  { path: "post/:id", component: PostDetailComponent},
]

@NgModule({
  imports: [
      RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
