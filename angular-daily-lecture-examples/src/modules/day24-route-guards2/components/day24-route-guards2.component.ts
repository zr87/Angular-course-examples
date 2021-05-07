import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day24-route-guards2',
  template: `
    <h2>Day24: Route Guards II.</h2>
    <ol>
      <li>canDeactivate</li>
      <li>Resolver</li>
    </ol>
    <nav>
      <a routerLink="/">home</a><br>
      <a routerLink="example">canDeactivate example</a> <br>
      <a routerLink="example2">resolver example</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class Day24RouteGuards2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
