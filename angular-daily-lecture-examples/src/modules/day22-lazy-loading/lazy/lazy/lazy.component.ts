import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <p>
      lazy compoenent works!
    </p>
  `,
  styles: [
  ]
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
