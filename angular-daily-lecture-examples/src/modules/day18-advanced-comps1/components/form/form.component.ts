import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() submitData: EventEmitter<unknown> = new EventEmitter<unknown>();
  constructor(private fb: FormBuilder) { }

  myForm = this.fb.group({
    email: null,
    password: null
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitData.emit(this.myForm.value);
  }
}
