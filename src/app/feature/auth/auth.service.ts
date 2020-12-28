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

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<authData.userData>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): authData.userData {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}users/login`, { email, password })
        .subscribe(
            response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.currentUserSubject.next(response);
                this.router.navigate(["/postsonmap"]);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    signup(data: authData.signupData) {
        this.http
          .post(`${environment.apiUrl}users/signup`, data)
          .subscribe(response => {
            console.log(response);
          });
      }
    
}