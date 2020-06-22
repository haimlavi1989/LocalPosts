import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  confirmpass: FormControl;
  age: FormControl;
  errorEmptyFields: string;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  createFormControls() {
    this.fullname = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.confirmpass = new FormControl(null, [Validators.required, Validators.minLength(4), this.checkPasswords.bind(this)]);
    this.age = new FormControl(null, [Validators.required, Validators.min(18), Validators.min(120)]);
  }

  initForm() {
    this.createFormControls();
    this.errorEmptyFields = "Can not be empty!";
    this.registerFormGroup = new FormGroup({
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      confirmpass: this.confirmpass,
      age: this.age 
    });
  }

  getFormFields() {
    this.email = this.registerFormGroup.get('email').value;
    this.password = this.registerFormGroup.get('password').value;
  }

  checkPasswords() { 
    let password = this.registerFormGroup?.get('password').value;
    let confirmPass = this.registerFormGroup?.get('confirmpass').value;

    return password === confirmPass ? null : { notSame: true }     
  }

  onSubmit() {
    this.getFormFields();
    console.log(this.email);
  }
  

}
