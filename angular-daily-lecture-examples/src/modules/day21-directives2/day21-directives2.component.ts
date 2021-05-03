import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day21-directives2',
  template: `
    <h1>Day21: Directives II.</h1>
    <ol>
      <li>HostListener</li>
      <li>HostBinding</li>
      <li>Renderer</li>
    </ol>

    <hr>

    <h2> Example 1: HostListener LogClickdirective</h2>
    <button appLogClick (click)="callOnClick($event)"> click me!</button>
    <input type="text" appLogClick>

    <h2>Example 2: HostBinding</h2>
    <p appHostbindingExample>Lorem ipsum dolor sit amet.</p>

    <hr>
    <h3>Rainbow directive</h3>
    <input type="text" appRainbow>
  `,
  styleUrls: ['./day21-directives2.component.scss']
})
export class Day21Directives2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  callOnClick($event: MouseEvent): void {
    console.log("event", $event);
  }
}
