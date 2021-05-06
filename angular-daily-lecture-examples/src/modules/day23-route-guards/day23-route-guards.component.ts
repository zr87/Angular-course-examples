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
     <ul>
        <li>  <a routerLink="admin" routerLinkActive="active">admin</a>
            <ul>
              <li> <a routerLink="admin/settings" routerLinkActive="active">settings</a></li>
              <li> <a routerLink="admin/main" routerLinkActive="active">main</a></li>
            </ul>
        </li>

     </ul>
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
