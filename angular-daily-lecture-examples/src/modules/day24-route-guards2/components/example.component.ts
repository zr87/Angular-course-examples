import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <p>
      example works!
    </p>
  `,
  styles: [
  ]
})
export class ExampleComponent implements OnInit {

  isDirty = true;

  constructor() { }

  ngOnInit(): void {
  }

}
