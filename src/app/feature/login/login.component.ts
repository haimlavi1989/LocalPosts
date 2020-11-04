import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  email: FormControl;
  password: FormControl;
  errorEmptyFields: string;

  constructor(private authService:AuthService) { }

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

  onSubmit() {
    this.authService.login(
      this.loginFormGroup.get('email').value,
      this.loginFormGroup.get('password').value
    );
  }
  

}
