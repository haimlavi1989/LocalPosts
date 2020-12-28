import { Injectable } from '@angular/core';
import posts from '../../shared/data/posts/posts.json';
import { Post } from '../../shared/Posts/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[];
  private unit: string = 'km';
  pridistances

  constructor(private http: HttpClient) {
    this.posts = posts;
  }

/*   getPosts() {
    return posts.slice();
  } */

  getPosts(distance: number, coordinates:[number, number], unit: string) {
    return this.http.get<any>(`
    ${environment.apiUrl}posts/distances/${distance}/center/
    ${[coordinates[0], coordinates[1]]}/unit/${unit}`);
    
  }

  addNewPost(data) {
    this.http
      .post(`${environment.apiUrl}posts`, data)
      .subscribe(response => {
      });
  }
}
