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
  
  myForm: FormGroup;
  pageTite = 'Login';
  
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl(
      '', [Validators.required, Validators.pattern('[a-z]+'), this.passwordCustomValidator] )
    });
  }

  passwordCustomValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value === 'xxx') {
        return { passwordCustomErr: true };
    }
    return null;
  }

  onClickSubmit()  {
    if (this.myForm.valid) {
      this.authService.login();
      this.router.navigateByUrl('/products');
    }
  }

}
