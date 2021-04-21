import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors} from "@angular/forms";

/* This should be refctored to a separate class method! */
function passComplexityValidator(control: AbstractControl): ValidationErrors | null {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const valid = strongRegex.test(control.value);
  return valid ? null : {
    passWordComplexity: true
  };
}

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const control1 = control.get('password');
  const control2 = control.get('passwordAgain');

  if (!control1 || !control2) {
    return null;
  }

  const valid = control1.value === control2.value;

  return valid ? null : {
    passwordsNotMatching: true
  };

}

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
    password: [null, [passComplexityValidator/*Validators.required, Validators.minLength(8)*/]],
    passwordAgain: [null, [passComplexityValidator /*Validators.required, Validators.minLength(8)*/]]
  }, { validators: passwordMatchValidator });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log("this.myForm.value:", this.myForm.value);
    // console.log("myForm:", this.myForm);
    console.log("pass", this.password);
    console.log(this.myForm);
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
