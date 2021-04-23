import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-day17-reactive-forms4',
  templateUrl: './day17-reactive-forms4.component.html',
  styleUrls: ['./day17-reactive-forms4.component.scss']
})
export class Day17ReactiveForms4Component implements OnInit {

  // @ts-ignore
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: 'Teszt Elek',
      email: 'test@elek.hu',
    });
  }

  onSubmit(): void {
    console.log("myForm.value", this.myForm.value);
  }
}
