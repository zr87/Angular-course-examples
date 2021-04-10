import { Component, OnInit } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  nav: Nav[] = [
    { link: '/', name: 'home', exact: true },
    { link: '/page1', name: 'page1', exact: true },
    { link: '/page2', name: 'page2', exact: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
