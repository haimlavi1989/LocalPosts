import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  email: FormControl;
  password: FormControl;
  errorEmptyFields: string;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  createFormControls() {
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(4)]);
  }

  initForm() {
    this.createFormControls();
    this.errorEmptyFields = "Can not be empty!";
    this.loginFormGroup = new FormGroup({
      email: this.email,
      password: this.password, 
    });
  }

  getFormFields() {
    this.email = this.loginFormGroup.get('email').value;
    this.password = this.loginFormGroup.get('password').value;
  }

  onSubmit() {
    this.getFormFields();
    console.log(this.email);
  }
  

}
