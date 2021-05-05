import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day22-lazy-loading',
  template: `
    <p>
      day22-lazy-loading works!
    </p>
    <nav>
      <a routerLink="" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact:  true}">
            home
      </a>
      <span> &nbsp;</span>
      <a routerLink="lazy"
         routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact:  true}">
            /lazy
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    '.active { font-weight: bold }'
  ]
})
export class Day22LazyLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
