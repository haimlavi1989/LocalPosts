import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../shared/models/Post';
import { PostsService } from './../../feature/shared/services/posts/posts.service';

interface Response {
  status: number;
  data: Post;
}

@Injectable()
export class PostService {

  public postsChanged = new Subject<Post[]>();
  private posts: Post[];
  private center: google.maps.LatLngLiteral; 

  constructor(
    private postsService: PostsService
  ) {
    this.initPosts();
  }

  initPosts() {
    if (!this.posts) {
      this.getUserLocation();
    }
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts?.slice());
  }

  getPosts() {
    if (!this.posts) {
      return
    }
    return this.posts?.slice();
  }

  getPost(id: string) {

    if (!this.posts) {
      return
    }
    const postIndex = this.posts.findIndex(post => post.id === id);
    return this.posts[postIndex]; 
  }

  addPost(Post: FormData) {

    this.postsService.addNewPost(Post).subscribe(
      (response: Response) => {

        const extraData = { 
          'numberOfLikes': 0,
          'numberOfComments': 0,
          'distance': '0',
          'currentUserLike': []
        }
        let postObj = Object.assign(response.data, extraData);
        this.posts.unshift(postObj);
        this.postsChanged.next(this.posts?.slice());
    }, error => {

    });

  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts?.slice());
  }

  deletePost(index: number) {
    this.posts?.splice(index, 1);
    this.postsChanged.next(this.posts?.slice());
  }

  private getNearbyPosts() {

    this.postsService.getPosts(60000, [this.center.lat, this.center.lng], 'km').subscribe(
      response => {
        this.setPosts(response.data)
      }, error => {

      })
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.getNearbyPosts();
      })
    }  
  }
}
