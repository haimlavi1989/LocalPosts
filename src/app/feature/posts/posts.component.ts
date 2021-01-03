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
  center: google.maps.LatLngLiteral;
  public isLoadingPosts: boolean = false;
  
  constructor(private postServece: PostsService) { 
    this.posts = [];
  }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getNearbyPosts() {
    this.isLoadingPosts = true;
    this.postServece.getPosts(1000, [this.center.lat, this.center.lng], 'km').subscribe(
      response => {
        this.posts = response.data.data;
        this.isLoadingPosts = false;
      }, error => {
        this.isLoadingPosts = false;
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



}
