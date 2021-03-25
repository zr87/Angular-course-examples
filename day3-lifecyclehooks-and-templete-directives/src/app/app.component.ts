import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num = 6;

  heroes = [
    {name: 'Batman'}, {name: 'Spiderman'}, {name: 'Flash'}
  ];

  switchVar = 'Spiderman';


  constructor() {
    setTimeout(() => {
      this.num = 10;
    }, 5000);
  }
}
