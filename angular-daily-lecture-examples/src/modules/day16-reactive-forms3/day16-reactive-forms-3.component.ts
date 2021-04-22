import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-day16-reactive-forms-3',
  templateUrl: './day16-reactive-forms-3.component.html',
  styleUrls: ['./day16-reactive-forms-3.component.scss']
})
export class Day16ReactiveForms3Component implements OnInit {

  sum = 0;

  myForm: FormGroup = this.fb.group({
    name: this.fb.group({
      last: null,
      first: null
    }),
    email: [null, [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // 1.1# set form Values: the bad way


    // 1.2# setting entire form with setValue
    //    - setValue you will need to pass key/values for all fields/controls,
    // other case you will get errors!

    // 1.3# patchValue (allows setting only one control in group)


    // 2.2# valueChanges . subsribing on formgroup/control value changes


  }

  onSubmit(): void {
    console.log("myForm", this.myForm.value);

    // 3.1# .disabled method
    // 3.2# form .reset method
  }

}
