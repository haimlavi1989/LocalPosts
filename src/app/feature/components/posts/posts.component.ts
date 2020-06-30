import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: string[];

  constructor() { 
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
    this.posts.push("");
  }

}
