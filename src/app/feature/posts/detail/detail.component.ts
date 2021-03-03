import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/Post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from './../../../feature/shared/services/posts/posts.service';
import { switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post: Post;
  switched: Observable<any>;
  backEndUrl: string;
  defulPhoto: string;
  faCalendar = faCalendar;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
    ) { 
      this.backEndUrl = environment.backEndUrl;
      this.defulPhoto = environment.appDefulPhoto;
    }

    ngOnInit() {

      this.switched = this.activatedRoute.paramMap.pipe(
        switchMap( (params: ParamMap) => {
          return this.postsService.getPost(`posts/${params.get('id')}`);
        })
      )

      this.switched.subscribe(
        response => {
          this.post = response.data;
          console.log(this.post, "details")
        }, error => {
        }
      )
    }
}

