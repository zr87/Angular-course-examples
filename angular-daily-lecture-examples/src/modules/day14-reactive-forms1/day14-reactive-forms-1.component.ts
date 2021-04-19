import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-day14-reactive-forms1',
  templateUrl: './day14-reactive-forms-1.component.html',
  styleUrls: ['./day14-reactive-forms-1.component.scss']
})
export class Day14ReactiveForms1Component implements OnInit {

  myForm: FormGroup = new FormGroup({
    firstName:
      new FormControl(
        'Jakab',
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ),
    lastName: new FormControl(null),
    email: new FormControl(
      null, [
        Validators.required,
        Validators.email,
      ]),
    terms: new FormControl(null, [Validators.requiredTrue])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log("myForm:", this.myForm.value);
    console.log("myForm:", this.myForm);
    console.log("eamil", this.email);
    console.log("terms", this.terms);
  }

  get email(): AbstractControl | null {
    return this.myForm.get('email');
  }

  get terms(): AbstractControl | null {
    return this.myForm.get('terms');
  }

}
