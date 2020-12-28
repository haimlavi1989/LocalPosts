import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from "./feature/auth/auth.service";
import * as authData from "./feature/auth/auth-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userData: authData.userData;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(); 
  }
  
}
