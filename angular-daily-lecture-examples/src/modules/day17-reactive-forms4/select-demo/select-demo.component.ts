import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent implements OnInit {

  cities: string[] = ['Budapest', 'Szeged', 'Pécs'];

/*  myForm = this.fb.control(null);*/

  myForm2 = this.fb.group({
    city: ''
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("myform2", this.myForm2.value);
  }


}
