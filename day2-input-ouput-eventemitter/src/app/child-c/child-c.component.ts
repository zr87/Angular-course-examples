import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {

  @Input()
  data: string;

  @Output()
  dataChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.dataChange.emit('new title from childC');
    }, 4000);
  }

}
