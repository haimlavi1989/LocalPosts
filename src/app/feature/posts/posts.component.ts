import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/Posts/post';
import { PostsService } from './../services/posts/posts.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  defulPhoto: string;
  backEndUrl: string;
  center: google.maps.LatLngLiteral;
  
  constructor(private postServece: PostsService) { 
    this.posts = [];
    this.backEndUrl = environment.backEndUrl;
    this.defulPhoto = "/assets/images/icon_only_150.png";
  }

  ngOnInit(): void {

    this.getUserLocation();
  }


  getNearbyPosts() {
    this.postServece.getPosts(1000, [this.center.lat, this.center.lng], 'km').subscribe(
      response => {
        this.posts = response.data.data;
         console.log( this.posts);
      })
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.getNearbyPosts();
      })
    }  
  }


/*   ngOnInit(): void {
    this.postServece.getPosts()
    .pipe(
      map( response => {
        length = response.results*1;
        let data = response.data;
        console.log(data);
        for(let i=0; i<length; i++) {
          let row = data.data[i];
          let post: Post;
          post.description = row.description,
          post.imageCover = row.imageCover,
          post.images = row.images,
          post.date = row.date,
          post.location = { lat: row.location.lat, lng: row.location.lng},
          post.publishDate = row.publishDate,
          post.subject = row.subject,
          post.id = row.id
          this.posts.push(post); 
        }
      }),
    );

  } */

}
