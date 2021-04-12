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
    <router-outlet>
      <!-- routenak meglfeleő comp -->
    </router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'simple-blog';
}
