import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../shared/models/Post';


@Injectable()
export class PostService {

  PostsChanged = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor() {}

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.PostsChanged.next(this.posts.slice());
  }

  getPosts() {
    return this.posts.slice();
  }

  getpost(index: number) {
    return this.posts[index];
  }

  addPost(Post: Post) {
    this.posts.push(Post);
    this.PostsChanged.next(this.posts.slice());
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.PostsChanged.next(this.posts.slice());
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.PostsChanged.next(this.posts.slice());
  }
}
