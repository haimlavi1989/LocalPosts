import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage = "An unknown error occurred!";
        errorMessage = errorResponse?.error?.message;
        
        return throwError(errorResponse);
      })
    );
  }
}
