import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day23-route-guards',
  template: `
    <h2>
      Day23 Route guards
    </h2>
    <nav>
      <a routerLink="" routerLinkActive="active">home</a>
      <span> &nbsp;</span>
      <!--<a routerLink="dashboard" routerLinkActive="active">dashboard</a>-->
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class Day23RouteGuardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
