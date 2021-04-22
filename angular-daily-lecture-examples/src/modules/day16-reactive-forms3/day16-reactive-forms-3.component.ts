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

    // valueChanges example
    numbers: this.fb.group({
      num1: 0,
      num2: 0,
      num3: 0,
    })
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // 1.1# set form Values: the bad way

    setTimeout(() => {
      this.myForm = this.fb.group({
        name: this.fb.group({
          first: "John", last: "Doe"
        }),
        email: "asd@asd.hu"
      });
    }, 2000);


    // 1.2# setting entire form with setValue
    //    - setValue you will need to pass key/values for all fields/controls,
    // other case you will get errors!

    const newFormValues = {
      name: {first: 'Kasza', last: 'Blanka'},
      email: 'kasza@blanka.hu',
      numbers: {
        num1: 0,
        num2: 0,
        num3: 0,
      }
    };

    this.myForm.setValue(newFormValues);


    // 1.3# patchValue (allows setting only one control in group)
    setTimeout(() => {
      this.myForm.patchValue({
        email: "asd@asd.hu"
      });
    }, 3000);


    // 2.2# valueChanges . subsribing on formgroup/control value changes
    this.myForm.valueChanges.subscribe(values => {
      console.log("valuechanges log", values);
    });
    this.myForm.get('email')?.valueChanges.subscribe(values => {
      console.log("valuechanges email log", values);
    });

    // 2.2# valueChanges example
    this.myForm.get('numbers')?.valueChanges
      .subscribe(value => {
        console.log("number", value);
        this.sum = value.num1 + value.num2 + value.num3;
      });


  }

  onSubmit(): void {
    console.log("myForm", this.myForm.value);
    console.log("myForm email", this.myForm.get("email")?.value);

    // 3.1# .disabled method
    this.myForm.disable();
    this.myForm.enable();
    console.log("is enabled", this.myForm.enabled);
    console.log("is disabled", this.myForm.disabled);

    // 3.2# form .reset method
    this.myForm.reset();
  }

}
