import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-day12-forms1',
  templateUrl: './day12-forms1.component.html',
  styleUrls: ['./day12-forms1.component.scss']
})
export class Day12Forms1Component implements OnInit {

  initialValues = {
    name: ""
  };

  email = "asd@asd.hu";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSumit(form: NgForm): void {
    console.log("form", form);
    console.log("form.value", form.value);
  }

}
