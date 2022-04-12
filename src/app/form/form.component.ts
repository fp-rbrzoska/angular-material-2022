import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm = new FormGroup({
    userName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email)
  })
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.myForm.value)
  }

}
