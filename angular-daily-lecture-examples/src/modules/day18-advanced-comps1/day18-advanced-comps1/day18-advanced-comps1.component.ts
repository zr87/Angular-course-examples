import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-day18-advanced-comps1',
  templateUrl: './day18-advanced-comps1.component.html',
  styleUrls: ['./day18-advanced-comps1.component.scss']
})
export class Day18AdvancedComps1Component implements OnInit {

  private remember: boolean | undefined;

  constructor() {}

  ngOnInit(): void {
  }

  loginUser(data: unknown): void {
    console.log("loginUser", data, this.remember);
  }

  createUser(data: unknown): void {
    console.log("createUser", data);
  }

  onRememberChecked(checked: boolean): void {
    console.log("onRememberChecked", checked);
    this.remember = checked;
  }
}
