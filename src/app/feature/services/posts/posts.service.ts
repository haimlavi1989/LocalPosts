import { Injectable } from '@angular/core';
import posts from '../../shared/data/posts/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts() {
    return posts;
  }
}
