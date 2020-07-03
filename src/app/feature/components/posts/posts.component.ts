import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/Posts/post';
import { PostsService } from './../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  defulPhoto: string;

  constructor(private postServece: PostsService) { 
    this.posts = [];
    this.defulPhoto = "/assets/images/icon_only_150.png";
  }

  ngOnInit(): void {
    this.posts = this.postServece.getPosts();
  }

}
