import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  import { AuthService } from "./auth.service";
  
  @Injectable()
  export class AuthGuard implements CanActivate {

    isAuth: boolean;
    currentUser;

    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

      const currentUser = this.authService.currentUserValue;

      console.log(currentUser, "aut guard")
      if (currentUser) {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }
  