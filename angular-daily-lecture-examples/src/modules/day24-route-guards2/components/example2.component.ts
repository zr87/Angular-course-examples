import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user.resolver";

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

  users: User[] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("router", this.router.snapshot.data.users);
    console.log("users", this.users);
    this.users =  this.router.snapshot.data.users;
  }

}
