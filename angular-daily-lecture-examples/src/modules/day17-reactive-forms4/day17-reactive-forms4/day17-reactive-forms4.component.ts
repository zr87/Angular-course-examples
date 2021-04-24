import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  ) {
  }

  get users(): FormArray {
    return this.myForm.get('users') as FormArray;
  }

  //  must have- write getter to acces in template
  get children(): FormArray {
    return this.myForm.get('children') as FormArray;
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: 'Teszt Elek',
      email: 'test@elek.hu',
      users: this.fb.array([
          ['Tom', [Validators.required]],
          'Jerry',
        ],
        {
          validators: [Validators.required]
        }),
      children: this.fb.array([
        this.fb.group({
          name: 'Mario',
          age: 2,
          sign: '🍓',
          grade: null
        }),
        this.fb.group({
          name: 'Luigi',
          age: 3,
          sign: '🍑',
          grade: null
        })
      ])
    });

    /*
    FormArray []
          - FormGroup
              -FormControl
              -FormControl
         - FormGroup
              -FormControl
              -FormControl
     */

    console.log("this.users", this.users);
  }

  onSubmit(): void {
    console.log("myForm.value", this.myForm.value);
    console.log("myForm.value", this.myForm);
  }

  addChildren(): void {
    const newChild = this.fb.group({
      name: null,
      age: null,
      sign: null,
      grade: null
    });

    this.children.push(newChild);
  }

  removeChild(index: number): void {
    this.children.removeAt(index);
  }

  calcGrade(index: number): void {
    // save FormArray values into a variable
    const childrenFormValues = this.children.value;

    if (childrenFormValues[index].age >= 4) {
      // modify the variable
      childrenFormValues[index].grade = 'nagy csop';
    } else {
      childrenFormValues[index].grade = 'kis csop';
    }
    // write the array back to FormArray
    this.children.setValue(childrenFormValues);
    console.log("childrenFormValues", childrenFormValues);
  }
}
