import { Component, OnInit } from '@angular/core';
import { Posts } from './../../../feature/shared/Posts/posts';
import { PostsService } from './../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];
  defulPhoto: string;

  constructor( private _postServece: PostsService) { 
    this.posts = [];
    this.defulPhoto = "/assets/images/icon_only_150.png";
  }

  ngOnInit(): void {
    this.posts = this._postServece.getPosts()
    /*
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    */
  }

}
