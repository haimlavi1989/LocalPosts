import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { retry, catchError}  from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from './../feature/errors/app-error';
import { BadInput } from './../../errors/bad-input';
import { NotFoundError } from './../../errors/not-found-error';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
  
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
