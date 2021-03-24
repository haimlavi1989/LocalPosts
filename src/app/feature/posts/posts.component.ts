import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/models/Post';
import { PostsService } from './../../feature/shared/services/posts/posts.service';
import { PostService } from './../../feature/posts/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  public isLoadingPosts: boolean = false;
  
  constructor(
    private postService: PostService,
    ) { 
  }

  ngOnInit(): void {

      this.posts = this.postService.getPosts();
      this.postService.postsChanged.subscribe( response => {
        this.posts = response;
      });
  }


}
