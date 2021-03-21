import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as authData from "../auth/auth-data.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<authData.userData>;
    public currentUser: Observable<authData.userData>;
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<authData.userData>(null);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): authData.userData {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}users/login`, { email, password })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(["/login"]);
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
          this.tokenExpirationTimer = null;
    }

    private setLogoutTimer(expirationDuration: number) {
      if (!this.tokenExpirationTimer) {
          this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
         }, expirationDuration);
      }
    }  

    signup(data: authData.signupData) {
        return this.http.post(`${environment.apiUrl}users/signup`, data);
    }

    handleLogin(response) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        response["tokenDate"] = new Date();
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.handleAuthentication();
        this.router.navigate(["/posts"]);
    }

    // on each application startup check if user is authenticated 
    handleAuthentication() {

      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
          // check token token expiration date
          const tokenTimeLift = this.tokenTimeLift(currentUser)
          if ( tokenTimeLift > 0 ){
            // notify all subsibers that user is auth  
            this.currentUserSubject.next(currentUser);
            // active auto logout timer
            this.setLogoutTimer(tokenTimeLift);
          }
        } else {

        }
        
    }

    // return time left for token in miliseconds
    tokenTimeLift(currentUser) {
      const expirationDate = new Date(new Date(currentUser.tokenDate).getTime() + currentUser.expiresIn * 1000).getTime();
      const now = new Date().getTime();
      return (expirationDate - now);
    }

    
}