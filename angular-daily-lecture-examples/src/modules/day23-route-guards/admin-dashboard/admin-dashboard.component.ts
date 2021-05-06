import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <p>
      admin-dashboard works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminDashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
