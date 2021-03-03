import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CommentsService } from './comments.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input('commentEvent') commentEvent: EventEmitter<string>;
  @Input('postId') postId: string;

  visible: boolean = false;
  comments: any[];
  postCommentFormGroup: FormGroup;
  postComment: FormControl;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.showComments();
    this.initForm();
  }

  showComments() {
    this.commentEvent.subscribe( response => {
      this.visible = response;
      this.getCommentsById();
    })
  }

  getCommentsById() {
    this.commentsService.getCommentsByPostId(this.postId).subscribe(
      response => {
        this.comments = response?.data;
      }
    );
  }

  createFormControls() {
    this.postComment = new FormControl(null, [Validators.required, Validators.minLength(2)]);
  }

  initForm() {
    this.createFormControls();
    this.postCommentFormGroup = new FormGroup({
      postComment: this.postComment
    });
  }

  onSubmit() {

    //this.isLoadingShare = true;
    const commentData = { 
      "comment":  this.postCommentFormGroup.get('postComment').value, 
      "post": this.postId 
    };

    this.commentsService.addNewComment(commentData).subscribe(
      response => {
        //this.isLoadingShare = false;
        this.getCommentsById();
        this.postCommentFormGroup.setValue({postComment: ""});
    }, error => {
        //this.isLoadingShare = false;
    });
  }


}
