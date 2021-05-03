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
    <button> click me!    </button>
  `,
  styleUrls: ['./day21-directives2.component.scss']
})
export class Day21Directives2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
