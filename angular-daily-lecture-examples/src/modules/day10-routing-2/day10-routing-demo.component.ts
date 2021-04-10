import {Component, OnInit} from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-day10-routing-demo',
  template: `
    <h1>Routing demo (day2)</h1>

    <nav>
      <a *ngFor="let item of nav"
        [routerLink]="item.link"
         routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }">
        {{ item.name }}
      </a>
    </nav>


    <router-outlet></router-outlet>
  `,
  styleUrls: ['day10-routing-demo.component.scss']
})
export class Day10RoutingDemoComponent implements OnInit {

  nav: Nav[] = [
    {link: "/", exact: true, name: "home"},
    {link: "/page1", exact: false, name: "page 1"},
    {link: "/page1/asd", exact: false, name: "page 1 (/page1/asd)"},
    {link: "/page1/42/john", exact: false, name: "page 1 (/page1/42/john)"},
    {link: "/page2", exact: false, name: "page 2"},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
