import { Component, OnInit, ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { PostsService } from './../../../services/posts/posts.service';
import { Post } from '../../../shared/Posts/Post';


@Component({
  selector: 'app-postsonmap',
  templateUrl: './postsonmap.component.html',
  styleUrls: ['./postsonmap.component.css']
})
export class PostsonmapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  posts: Post[];
  markers: any[];
  infoContent: string;
  zoom: number;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions;

  constructor(private postServece: PostsService) {
  }

  ngOnInit() {

    this.initGoogleMapsParms();

    this.posts = this.postServece.getPosts();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })

      this.posts.forEach(post => {
        this.addMarker(post);
      });
    }  
  }

  initGoogleMapsParms() {
    this.markers = [];
    this.infoContent = '';
    this.zoom = 12;
    this.options = {
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: 'roadmap',
      maxZoom: 15,
      minZoom: 8
    };
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  customIcon(photo: string) {
    let photoUrl: string = "/assets/images/icon_only_150.png";
    if (photo) {
      photoUrl = photo;
    }
    return {
      url: photoUrl,
      scaledSize: {height: 30, width: 30},
    };
  }
 
  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  addMarker(post: Post) {
    this.markers.push({
      position: {
        lat: post.location.lat, 
        lng: post.location.lng,
      },
      label: {
        color: 'red',
        text: post.title,
      },
      info: post.text,
      options: {
        animation: google.maps.Animation.BOUNCE,
        icon: this.customIcon(post.photo)
      },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

}

