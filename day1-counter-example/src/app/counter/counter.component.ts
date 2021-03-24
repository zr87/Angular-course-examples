import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  number = 0;

  constructor() {}

  ngOnInit(): void {}

  onClick(num: number): void {
    console.log('number', num);
    this.number += num;
  }
}
