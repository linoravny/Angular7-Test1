import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { custumPipe } from '../form/form.pipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [AuthService, custumPipe]
})
export class FormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  pageTite:string = "Login";

  myForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      '',
      [Validators.required, Validators.pattern("[a-z]+"), this.passwordCustomValidator])
  });

  
  passwordCustomValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value === 'xxx') {
        return { 'passwordCustomErr': true };
    }
    return null;
  }

  //for validation...
  get password() { return this.myForm.get('password'); }

  handleLogin = () => {
    //console.log(this.myForm.controls['email'].value);
    if(this.myForm.valid) {
      this.authService.login();
      this.router.navigateByUrl('/products');
    }
  }

}
