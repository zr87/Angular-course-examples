import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  @Output()
  increment = new EventEmitter<number>();

  @Input()
  interval: number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('onClick' );
    this.increment.emit(this.interval);
  }

}
