import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20-directives1',
  template: `
        <h1 [appHighlight]="color">This is awesome!</h1>

        <p appHighlight> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, aut dignissimos eum fuga fugiat hic ipsam itaque iure, minus nisi nobis praesentium provident quas quod, repellendus ullam ut veniam vero. </p>
  `,
  styleUrls: ['./day20-directives1.component.scss']
})
export class Day20Directives1Component implements OnInit {

  color = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
