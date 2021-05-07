import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day24-route-guards2',
  template: `
    <p>
      day24-route-guards2 works!
    </p>
    <nav>
      <a routerLink="admin">admin</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class Day24RouteGuards2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
