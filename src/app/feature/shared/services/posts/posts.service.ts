import { Injectable } from '@angular/core';
import posts from '../../data/posts/posts.json';
import { Post } from './../../models/Post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { PostService } from '../../../posts/post.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[];
  private unit: string = 'km';

  constructor(
    private http: HttpClient,
  ) {
    this.posts = posts;
  }

  getPosts(distance: number, coordinates:[number, number], unit: string) {
    return this.http.get<any>(`
    ${environment.apiUrl}posts/distances/${distance}/center/
    ${[coordinates[0], coordinates[1]]}/unit/${unit}`);
  }

  getPost(url) {
    return this.http.get<any>(`${environment.apiUrl}${url}`);
  }

  addNewPost(data) {
    return this.http.post(`${environment.apiUrl}posts`, data);
  }

  likePost(data) {
    return this.http.post(`${environment.apiUrl}likes`, data);
  }

  unLikePost(id) {
    return this.http.delete(`${environment.apiUrl}likes/${id}`);
  }

}
