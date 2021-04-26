import {Component, ContentChild, EventEmitter, OnInit, Output, AfterContentInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthRememberComponent} from "../auth-remember/auth-remember.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterContentInit {

  // 1. step
  @ContentChild(AuthRememberComponent) rememberChild: AuthRememberComponent | undefined;

  @Output() submitData: EventEmitter<unknown> = new EventEmitter<unknown>();
  isRememberChecked: boolean | undefined;

  constructor(private fb: FormBuilder) {
  }

  myForm = this.fb.group({
    email: null,
    password: null
  });

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log("rememberChild", this.rememberChild);

    this.rememberChild?.checked?.subscribe(checked => {
      console.log("checkbox checked", checked);
      this.isRememberChecked = checked;
    });
  }

  onSubmit(): void {
    this.submitData.emit(this.myForm.value);
  }
}
