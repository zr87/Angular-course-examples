import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog/blog.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { PostDetailComponent } from './post-detail/post-detail.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
      BlogComponent,
      PostItemComponent,
      PostDetailComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
      RouterModule
  ],
  exports: [
      BlogComponent
  ]
})
export class PostsModule { }
