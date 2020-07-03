import { Injectable } from '@angular/core';
import posts from '../../shared/data/posts/posts.json';
import { Post } from '../../shared/Posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[];

  constructor() {
    this.posts = posts;
  }

  getPosts() {
    return posts;
  }
}
