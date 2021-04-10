import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day9-routing-demo',
  template: `
    <h1>Routing demo (day2)</h1>

    <ul >
      <li>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">home</a>
      </li>
      <li>
        <a routerLink="/page1" routerLinkActive="active" >page 1</a>
      </li>
      <li>
        <a routerLink="/page2" routerLinkActive="active" >page 2</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['day10-routing-demo.component.scss']
})
export class Day10RoutingDemoComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
