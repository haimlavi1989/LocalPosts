import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../shared/Posts/post';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  defulPhoto: string;
  backEndUrl: string;

  constructor() { 
    this.backEndUrl = environment.backEndUrl;
    this.defulPhoto = "/assets/images/icon_only_150.png";
  }

  ngOnInit(): void {
  }

}
