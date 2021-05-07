import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-example2',
  template: `
    <h2>Example2 works!</h2>

    <ul>
        <li *ngFor="let user of users">
          <b>{{ user.name }}</b>, <small>{{ user.email }}</small>
        </li>
    </ul>
  `,
  styles: [
  ]
})
export class Example2Component implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // component already initialized
    this.http     // a bit late to fetch data to display
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data as any;
      });
  }

}
