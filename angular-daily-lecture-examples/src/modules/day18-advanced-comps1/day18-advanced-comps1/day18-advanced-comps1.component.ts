import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-day18-advanced-comps1',
  templateUrl: './day18-advanced-comps1.component.html',
  styleUrls: ['./day18-advanced-comps1.component.scss']
})
export class Day18AdvancedComps1Component implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  loginUser(data: unknown): void {
    console.log("loginUser", data);
  }

  createUser(data: unknown): void {
    console.log("createUser", data);
  }

}
