import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-day15-reactive-forms2',
  templateUrl: './day15-reactive-forms-2.component.html',
  styleUrls: ['./day15-reactive-forms-2.component.scss']
})
export class Day15ReactiveForms2Component implements OnInit {

  myForm: FormGroup = this.fb.group({
    firstName:
      [null,
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ],
    lastName: null,
    email: [
      null, [
        Validators.required,
        Validators.email,
      ]
    ],
    password: null,
    passwordAgain: null
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log("this.myForm.value:", this.myForm.value);
    // console.log("myForm:", this.myForm);
   /* console.log("email", this.email);
    console.log("pass", this.password);
    console.log("pass again", this.passwordAgain);*/
  }

  get email(): AbstractControl | null {
    return this.myForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.myForm.get('password');
  }

  get passwordAgain(): AbstractControl | null {
    return this.myForm.get('passwordAgain');
  }

}
