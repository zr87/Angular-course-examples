import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day25-auth',
  template: `
    <h2>
      day25-auth works!
    </h2>

    <nav>
      <ul>
        <li> <a routerLink="login"> login</a></li>
        <li> <a routerLink="dashboard"> dashboard (protected)</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class Day25AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
