import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../feature/shared/services/posts/posts.service';
import { Post } from '../../shared/models/Post';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-postsonmap',
  templateUrl: './postsonmap.component.html',
  styleUrls: ['./postsonmap.component.css']
})
export class PostsonmapComponent implements OnInit {


  posts: Post[];
  center: google.maps.LatLngLiteral;

  constructor(private postServece: PostsService) {
  }

  ngOnInit() {

    this.getUserLocation();
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

  getNearbyPosts() {
    this.postServece.getPosts(1000, [this.center.lat, this.center.lng], 'km').subscribe(
      response => {
        this.posts = response.data;
      })
  }

}

