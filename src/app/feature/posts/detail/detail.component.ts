import { Component, OnInit, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/models/Post';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { faCalendar, faMapMarkerAlt, faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { PostService } from './../post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewChecked {

  @Output('commentEvent') commentEvent = new EventEmitter<boolean>();

  post: Post;
  id: string;
  switched: Observable<any>;
  backEndUrl: string;
  defulPhoto: string;
  faCalendar = faCalendar;
  faMapMarkerAlt = faMapMarkerAlt;
  faThumbsUp = faThumbsUp;
  faComments = faComments;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
    ) { 
      this.backEndUrl = environment.backEndUrl;
      this.defulPhoto = environment.appDefulPhoto;
    }

    ngOnInit() {
      this.postService.postsChanged.subscribe( response => {
        this.post = this.postService.getPost(this.id);
      }); 

      this.activatedRoute.params.subscribe( (params: Params) => {
            this.id = params['id'];
            this.post = this.postService.getPost(this.id);
          }
        ); 
    }

    ngAfterViewChecked() {
      this.commentEvent.emit(true);
    }

    // fix free server deleted images
    errorImgHandler(event) {
      event.target.src = this.defulPhoto;
      event.target.onerror=null;
    }

}

