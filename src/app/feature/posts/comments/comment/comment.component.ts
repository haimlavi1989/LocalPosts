import { Component, Input, OnInit } from '@angular/core';
import { comment } from './comment.model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentData: comment;

  constructor() { }

  ngOnInit(): void {
  }

}
