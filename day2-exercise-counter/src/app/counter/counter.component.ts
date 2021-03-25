import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 0;
  step = 2;

  onIncrement(value: number): void {
    console.log('value', value);
    this.counter += value;
  }
}
