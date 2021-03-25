import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {


  @Input()
  data = 0;

  constructor() {
    console.log('constructor');
  }

  title = 'day3-lifecyclehooks-and-templete-directives';

  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }

}
