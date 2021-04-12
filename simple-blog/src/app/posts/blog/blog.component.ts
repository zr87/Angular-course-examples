import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-blog',
  template: `      
    <div class="grid-continer">
       <mat-card *ngFor="let post of posts" [id]="post.id">
            <img [src]="imgLink" alt="">
            <mat-card-title> {{ post.title }} </mat-card-title>
            <mat-card-content>
              <p> {{ post.body}} </p>s
            </mat-card-content>
            <button mat-button [routerLink]="['post', post.id ]">read more</button>
       </mat-card>
    </div>
  `,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  imgLink:string = 'https://picsum.photos/600/300';

  posts: Post[] = [
    {
      id:1,
      title: "Lorem ipsum",
      postImg: 'https://picsum.photos/200',
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    },
    {
      id:2,
      title: "Lorem ipsum",
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    },
    {
      id:3,
      title: "Lorem ipsum",
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    },
    {
      id:4,
      title: "Lorem ipsum",
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    },
    {
      id:5,
      title: "Lorem ipsum",
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    },
    {
      id:6,
      title: "Lorem ipsum",
      body: "High quality Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. Straightforward APIs with consistent cross platform behaviour. Versatile Provide tools that help developers build their own custom components with common interaction patterns. Customizable within the bounds of the Material Design specification. Frictionless Built by the Angular team to integrate seamlessly with Angular. Start from scratch or drop into your existing applications."
    }
  ]

  ngOnInit(): void {
    console.log("posts arra", this.posts);
  }

}
