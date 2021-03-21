import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signupData } from "../auth/auth-data.model";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup: FormGroup;
  public fullname: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmpass: FormControl;
  public age: FormControl;
  public errorEmptyFields: string;
  public minlength4: string;
  public minlength6: string;
  public error: string;
  public isLoading: boolean = false;

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  createFormControls() {
    this.fullname = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required, Validators.minLength(6)]);
    this.confirmpass = new FormControl(null, [Validators.required, Validators.minLength(6), this.checkPasswords.bind(this)]);
    this.age = new FormControl(null, [Validators.required, Validators.min(18), Validators.max(120)]);
  }

  initForm() {
    this.createFormControls();
    this.errorEmptyFields = "Can not be empty!";
    this.minlength4 = "Min length is 4.";
    this.minlength6 = "Min length is 6.";
    this.registerFormGroup = new FormGroup({
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      confirmpass: this.confirmpass,
      age: this.age 
    });
  }

  checkPasswords() { 
    let password = this.registerFormGroup?.get('password').value;
    let confirmPass = this.registerFormGroup?.get('confirmpass').value;
    return password === confirmPass ? null : { notSame: true };     
  }

  onSubmit() {
    this.isLoading = true;
    const data: signupData = {name: '', email: '', password: '', passwordConfirm: '', age: 0};
    data.name = this.registerFormGroup.get('fullname').value;
    data.email = this.registerFormGroup.get('email').value;
    data.password = this.registerFormGroup.get('password').value;
    data.passwordConfirm = this.registerFormGroup.get('confirmpass').value;
    data.age = this.registerFormGroup.get('age').value;

    this.authService.signup(data).subscribe(
      response => {
        this.authService.handleLogin(response);
        this.isLoading = false;
      }, errorResponse => {
        this.isLoading = false;
        this.error = errorResponse?.error?.message;
      });;
  }

  onHandleError() {
    this.error = null;
  }
  

}
