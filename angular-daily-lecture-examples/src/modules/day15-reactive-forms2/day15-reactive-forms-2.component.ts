import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors} from "@angular/forms";
import {ValidatorService} from "./validator.service";
import {map} from "rxjs/operators";
import {RegistrationValidator} from "./registration.validator";


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
      ], [
        this.emailValidator.bind(this)
      ]
    ],
    password: [null,
      [
        Validators.required, Validators.minLength(8), RegistrationValidator.passwordComplexity]],
    passwordAgain: [
      null,
      [
        Validators.required, Validators.minLength(8), RegistrationValidator.passwordComplexity]
    ]
  }, { validators: RegistrationValidator.passwordMatch });

  constructor(private fb: FormBuilder, private validator: ValidatorService) {
  }

  ngOnInit(): void {
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    return this.validator.hasEmail(control.value)
      .pipe(
        map((hasEmail: boolean ) => {
          return !hasEmail ? null : { alreadyRegistered: true };
        })
      );
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
