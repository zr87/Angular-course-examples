import { Component } from '@angular/core';

export interface Post {
  id: number,
  title: string,
  body: string,
  postImg?: string
}


@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-blog [data]="posts"></app-blog>
  `,
  styles: []
})
export class AppComponent {
  title = 'simple-blog';

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
}
