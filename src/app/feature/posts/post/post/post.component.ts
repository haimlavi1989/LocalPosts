import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { faCalendar, faMapMarkerAlt, faThumbsUp, faComments, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { PostsService } from './../../../../feature/shared/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  @Output('commentEvent') commentEvent = new EventEmitter<boolean>();

  defulPhoto: string;
  backEndUrl: string;
  showComments: boolean = false;
  // font awesome
  faCalendar: IconDefinition;
  faMapMarkerAlt: IconDefinition;
  faThumbsUp: IconDefinition;
  faComments: IconDefinition;

  constructor(private router: Router, private postsService: PostsService) { 
    this.backEndUrl = environment.backEndUrl;
    this.defulPhoto = environment.appDefulPhoto;
  }

  ngOnInit(): void {
    this.initFontIcons();
  }

  handleMoreDetails(event: Post) {
    this.router.navigate(['/postdetail', event.id]);
  }

  initFontIcons() { 
    this.faCalendar = faCalendar;
    this.faMapMarkerAlt = faMapMarkerAlt;
    this.faThumbsUp = faThumbsUp;
    this.faComments = faComments;
  }

  handelComments() {
    this.showComments = !this.showComments;
    this.commentEvent.emit(this.showComments);
  }

  handelLike() {

    const currentUserLike = this.post.currentUserLike;
    if ( currentUserLike.length === 0 ) {
      this.Like();
      this.postsService.likePost( {post: this.post.id} ).subscribe( 
        (response: any) => {
          this.post.currentUserLike[0].id = response.data.id
        }, error => {
          this.UnLike();
      });

    } else {

      this.UnLike();
      this.postsService.unLikePost(currentUserLike[0].id).subscribe( 
        response => {
          this.post.currentUserLike = [];
        }, error => {
          this.Like();
      });


    }
  }

  Like() {
    this.post.currentUserLike[0] = { id: 'fakeid'};
    this.post.numberOfLikes = ++this.post.numberOfLikes;
  }

  UnLike() {
    this.post.currentUserLike = this.post.currentUserLike;
    this.post.numberOfLikes = --this.post.numberOfLikes;
  }

}
