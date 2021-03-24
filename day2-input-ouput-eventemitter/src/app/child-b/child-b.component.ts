import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  @Output()
  dataToParent = new EventEmitter<number>();

  counter = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
        this.dataToParent.emit(2);
    }, 2000);
  }

  onClick(): void {
    this.counter += 1;
    this.dataToParent.emit(this.counter);
  }

}
