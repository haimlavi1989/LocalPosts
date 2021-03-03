import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getCommentsByPostId(id) {
    return this.http.get<any>(`${environment.apiUrl}comments?post=${id}`);
  }

  addNewComment(data) {
    return this.http.post(`${environment.apiUrl}comments`, data);
  }

}
