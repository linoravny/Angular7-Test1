import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pageTite:string = "Form";

  myForm = new FormGroup({
    email : new FormControl(undefined, [Validators.required, Validators.email]),
    passwordLA: new FormControl(
      undefined,
      [Validators.required, Validators.pattern("[a-z]+")])
  });

  //for validation...
  get password() { return this.myForm.get('passwordLA'); }

  handleLogin = () => {
    //console.log(this.myForm.controls['email'].value);
  }

}
