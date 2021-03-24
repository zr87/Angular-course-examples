import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {


  @Input()
  inputData: string;

  constructor() {}

  ngOnInit(): void {}

}
